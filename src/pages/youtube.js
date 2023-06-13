import React, { useState, useEffect } from 'react';
import "./dashboard.css";
import renderCharts from './renderCharts';
import { Link } from "react-router-dom";

const Youtube = (props) => {
  // Set the required parameters
  const CLIENT_ID = '964989657567-0s5gaotr644ba5o48qvdn0dls9fkb69s.apps.googleusercontent.com';
  const CLIENT_SECRET = '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';
  const redirectUri = `${window.location.origin}${window.location.pathname}`;
  const [accessToken, setAccessToken] = useState(null);

  const [userState, setUserState] = useState(null);
  var sidebarOpen = false;
  var sidebar = document.getElementById("sidebar");
  
  function openSidebar(){
      if(!sidebarOpen){
          sidebar.classList.add("sidebar-responsive");
          sidebarOpen = true;
      }
  }
  function closeSidebar(){
      if(sidebarOpen){
          sidebar.classList.remove("sidebar-responsive");
          sidebarOpen = false;
      }
  }
  useEffect(() => {
    if (userState) {
      openSidebar();
    } else {
      setUserState(true);
      closeSidebar();
    }
  }, [userState]);


  function genAuthUrl(){
    // Set the required parameters
    const clientId = CLIENT_ID;
    const scope = 'https://www.googleapis.com/auth/yt-analytics.readonly';

    // Create OAuth2 client
    const oauth2URI = 'https://accounts.google.com/o/oauth2/v2/auth'

    const authUrl = `${oauth2URI}?client_id=${clientId}&scope=${scope}&access_type=offline&include_granted_scopes=true&response_type=code&state=state_parameter_passthrough_value&redirect_uri=${redirectUri}`

    // Print the authentication URL
    console.log('Authorization URL:', authUrl);
    return authUrl;
  }

  // Handle the authorization code
  const handleAuthorizationCode = async (code) => {
    try {
      // Exchange the authorization code for tokens
      const oauth2Token = 'https://oauth2.googleapis.com/token';
      const tokenParams = new URLSearchParams({
        'code': code,
        'client_id': CLIENT_ID,
        'client_secret': CLIENT_SECRET,
        'redirect_uri': redirectUri,
        'grant_type': 'authorization_code'
      });

      // Set the options so we send a POST request
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: tokenParams.toString(),
      };

      // send the API request
      const response = await fetch(oauth2Token, options);
      const tokens = await response.json();
      // Handle the tokens response as needed
      setAccessToken(tokens.access_token);
      sessionStorage.setItem('accessToken', tokens.access_token);
      console.log("ACCESS TOKEN FROM HANDLEAUTHCODE");
      console.log(tokens.access_token);

    } catch (error) {
      console.error('Error retrieving access token:', error);
    }
  };

  useEffect(() => {
    // Get the access token from sessionStoreage
    const storedAccessToken = sessionStorage.getItem('accessToken');
    console.log("stored token", storedAccessToken);
    if (!storedAccessToken && storedAccessToken !== 'undefined') {
      setAccessToken(storedAccessToken);
    }

    if (!accessToken && accessToken !== 'undefined') {
      const searchParams = new URLSearchParams(window.location.search);
      const code = searchParams.get('code');

      const handleAuth = async () => {
        // Use the code and scope values for further processing
        await handleAuthorizationCode(code);
      };
      // Call the async function
      handleAuth()
    }
  }, []);

  function GoogleLogin() {
    window.location.href = genAuthUrl();
  }

  useEffect(() => {
    /////////////////////// YOUTUBE API/////////////////////////////////////
    function populateDataMap(startDate, endDate, dimensions, maxResults) {
      const url = 'https://youtubeanalytics.googleapis.com/v2/reports'
      const params = new URLSearchParams({
        'ids': 'channel==MINE',
        'startDate': startDate,
        'endDate': endDate,
        'metrics': 'views,likes,subscribersGained',
        'dimensions': dimensions,
        'maxResults': maxResults,
        'access_token': accessToken
      });

    // Send the GET request using fetch()
    return fetch(`${url}?${params}`)
    .then((response) => response.json())
    .then((data) =>{

      //We will now convert the data 
      // console.log(data);
      // console.log(`${url}?${params}`);
      const dataMap = new Map();
      let currentDate = new Date(startDate);
      currentDate.setDate(currentDate.getDate()); //Skip one day because it starts from the day before so it will always be 0
      let currentEndDate = new Date(endDate)

      while (currentDate <= currentEndDate) {
        let dateKey;
        if (dimensions === 'day') {
          dateKey = currentDate.toISOString().split("T")[0];
          currentDate.setDate(currentDate.getDate() + 1);
        } else if (dimensions === 'month') {
          dateKey = getMonthKey(currentDate);
          currentDate.setMonth(currentDate.getMonth() + 1);
        } else if (dimensions === 'channel') {
          return data.rows[0];
        }
        dataMap.set(dateKey, [0, 0, 0]);
      }

      // Add 0s to the days that do not have any value
      data.rows.forEach(row => {
        const date = row[0];
        const views = row[1];
        const likes = row[2];
        const subs = row[3];
        const value = [views, likes, subs]
        if (dimensions === 'day') {
            dataMap.set(date, value);
        } else if (dimensions === 'month') {
            const monthKey = getMonthKey(new Date(date));
            dataMap.set(monthKey, value);
        }
      });

      //Get the values from the data map and conver them into arrays.
      const viewsArray = Array.from(dataMap.values()).map(([firstValue]) => firstValue);
      const likesArray = Array.from(dataMap.values()).map(([_, secondValue]) => secondValue);
      const subsArray = Array.from(dataMap.values()).map(([_, x, thirdValue]) => thirdValue);

      return [viewsArray, likesArray, subsArray]
    });

    }

    function getMonthKey(date) {
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      return `${year}-${String(month).padStart(2, '0')}`;
    }

    //Create the variables
    var weeklyVW;
    var weeklyLikes;
    var weeklyFL;
    var monthlyVW;
    var monthlyLikes;
    var monthlyFL;  
    var yearlyVW;
    var yearlyLikes;
    var yearlyFL;

    async function getData(){
      try{
        const today = new Date();
        const currentYear = today.getFullYear();
        // const currentYear = 2018;
        const currentWeek = Math.ceil(today.getDate() / 7);
        const currentMonth = String(today.getMonth() + 1).padStart(2, '0');

        // Wait for all the data to be retrived.
        await Promise.all([
          // Get weekly data
          populateDataMap(
            `${currentYear}-${currentMonth}-${String(((currentWeek - 1) * 7 + 1)).padStart(2, '0')}`,
            `${currentYear}-${currentMonth}-${String((currentWeek * 7)).padStart(2, '0')}`,
            'day',
            '7'
          ).then(([VW, LK, FL]) => {
            weeklyFL = FL;
            weeklyLikes = LK;
            weeklyVW = VW;
          }),
          // Get monthy data
          populateDataMap(
            `${currentYear}-${currentMonth}-01`,
            `${currentYear}-${currentMonth}-30`,
            'day',
            '31'
          ).then(([VW, LK, FL]) => {
            monthlyFL = FL;
            monthlyLikes = LK;
            monthlyVW = VW;
          }),
          // Get yearly data
          populateDataMap(
            `${currentYear - 1}-12-01`,
            `${currentYear}-11-01`,
            'month',
            '12'
          ).then(([VW, LK, FL]) => {
            yearlyFL = FL;
            yearlyLikes = LK;
            yearlyVW = VW;
          })
        ]);

      } catch (error) {
        console.log(error);
      }
    }

    async function renderAllCharts(){
      // Set the label values
      const weeklyLabels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
      const monthlyLabels = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
      '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
      '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];
      const yearlyLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

      console.log('Rendering Charts');
      /////////////////////RENDER CHARTS///////////////////////////////////////////
      renderCharts("#weekChart_fl", weeklyFL, weeklyLabels);
      renderCharts("#weekChart_vw", weeklyVW, weeklyLabels);
      renderCharts("#weekChart_likes", weeklyLikes, weeklyLabels);
      renderCharts("#monthChart_fl", monthlyFL, monthlyLabels);
      renderCharts("#monthChart_vw", monthlyVW, monthlyLabels);
      renderCharts("#monthChart_likes", monthlyLikes, monthlyLabels);
      renderCharts("#yearChart_fl", yearlyFL, yearlyLabels);
      renderCharts("#yearChart_vw", yearlyVW, yearlyLabels);
      renderCharts("#yearChart_likes", yearlyLikes, yearlyLabels);
    }

    ////////////////expend_hide_button_animations/////////////////////////
    document.getElementById('expend_btn').addEventListener('click', function () {
      var element1 = document.querySelector('.card_extra');
      var element2 = document.querySelector('#expend_btn');
      var element3 = document.querySelector('#hide_btn');

      // Change display property to "block" (or any other valid value)
      element1.style.display = 'grid';
      element2.style.display = 'none';
      element3.style.display = 'inline';

    });



    document.getElementById('hide_btn').addEventListener('click', function () {
      var element1 = document.querySelector('.card_extra');
      var element2 = document.querySelector('#hide_btn');
      var element3 = document.querySelector('#expend_btn');

      // Change display property to "block" (or any other valid value)
      element1.style.display = 'none';
      element2.style.display = 'none';
      element3.style.display = 'inline';
    });

    ////////////////END/////////////////////////

    ////////////////FLT_BTN///////////////////

    var chartType = 1;
    var chartPeriod = 1;
    
    function updateChartDisplay() {
      var chartDaily = document.querySelector('.chart_daily');
      var chartWeekly = document.querySelector('.chart_weekly');
      var chartMonthly = document.querySelector('.chart_monthly');
      var chartWeeklyL = document.querySelector('.chart_weekly_l');
      var chartMonthlyL = document.querySelector('.chart_monthly_l');
      var chartYearlyL = document.querySelector('.chart_yearly_l');
      
      chartDaily.style.display = (chartPeriod === 1 && chartType === 1) ? 'grid' : 'none';
      chartWeekly.style.display = (chartPeriod === 2 && chartType === 1) ? 'grid' : 'none';
      chartMonthly.style.display = (chartPeriod === 3 && chartType === 1) ? 'grid' : 'none';
      chartWeeklyL.style.display = (chartPeriod === 1 && chartType === 2) ? 'grid' : 'none';
      chartMonthlyL.style.display = (chartPeriod === 2 && chartType === 2) ? 'grid' : 'none';
      chartYearlyL.style.display = (chartPeriod === 3 && chartType === 2) ? 'grid' : 'none';
    }
    
    function sumArray(array) {
      return array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    }
    
    async function updateElementTextContent(elementId, value) {
      const element = document.getElementById(elementId);
      if (element) {
        element.textContent = value;
      }
    }

    async function updateStats() {
      var ytFollowers = 111;
      var ytLikes = 222;
      var ytViews = 333;
  
      // Gather channel wide stats
      const today = new Date();
      const year = today.getFullYear();
      const month = String(today.getMonth() + 1).padStart(2, '0');
      const day = String(today.getDate()).padStart(2, '0');
      await populateDataMap(
        `2004-02-14`,
        `${year}-${month}-${day}`,
        'channel',
        '5'
      ).then(([_, VW, LK, FL]) => {
        console.log(VW, LK, FL);
        ytFollowers = FL;
        ytLikes = LK;
        ytViews = VW;
      })

      // Use already gathered data to get the stats
      var ytFollowersW = sumArray(weeklyFL);
      var ytLikesW = sumArray(weeklyLikes);
      var ytViewsW = sumArray(weeklyVW);
      var ytFollowersM = sumArray(monthlyFL);
      var ytLikesM = sumArray(monthlyLikes);
      var ytViewsM = sumArray(monthlyVW);

      //Update the variables in the display
      await Promise.all([
        updateElementTextContent('yt_followers', ytFollowers),
        updateElementTextContent('yt_likes', ytLikes),
        updateElementTextContent('yt_views', ytViews),
        updateElementTextContent('yt_followers_w', ytFollowersW),
        updateElementTextContent('yt_likes_w', ytLikesW),
        updateElementTextContent('yt_views_w', ytViewsW),
        updateElementTextContent('yt_followers_m', ytFollowersM),
        updateElementTextContent('yt_likes_m', ytLikesM),
        updateElementTextContent('yt_views_m', ytViewsM)
      ]);    

      document.getElementById('bar_btn').addEventListener('click', function() {
        chartType = 1;
        updateChartDisplay();
      });

      document.getElementById('lnr_btn').addEventListener('click', function() {
        chartType = 2;
        updateChartDisplay();
      });

      document.getElementById('daily_btn').addEventListener('click', function() {
        chartPeriod = 1;
        updateChartDisplay();
      });

      document.getElementById('weekly_btn').addEventListener('click', function() {
        chartPeriod = 2;
        updateChartDisplay();
      });

      document.getElementById('monthly_btn').addEventListener('click', function() {
        chartPeriod = 3;
        updateChartDisplay();
      });
    }

    async function initialize(){
      await getData();
      await renderAllCharts();
      updateChartDisplay();
      updateStats();
    }

    // Initialize
    if (accessToken && accessToken !== 'undefined'){
      initialize();
    }
    ////////////////////END/////////////////////////
  }, [accessToken]);

  return (
    <div className="grid-container">
      {/* Sidebar */}
      <aside id="sidebar">
        <div className="sidebar-title">
          <div className="sidebar-brand">
            <span className="material-icons-outlined">dashboard</span>
            SocialHub
          </div>
          <span
            className="material-icons-outlined"
            id="close_btn"
            onClick={closeSidebar}
          >
            close
          </span>
        </div>

        <ul className="sidebar-list">
        <Link to="/MainDashboard">
            <li className="sidebar-list-item">
                <span className="material-icons-outlined">home</span>
                Dashboard
            </li>
        </Link>
        <Link to="/dashboard_yt">
          <li className="sidebar-list-item">
              <span className="material-icons-outlined">label_important</span>
              YouTube
          </li>
        </Link>
        <Link to="/MainDashboard">
            <li className="sidebar-list-item">
                <span className="material-icons-outlined">label_important</span>
                Facebook
            </li>
        </Link>
        </ul>
      </aside>
      {/* Main */}
      <main className="main-container">
        <div className="main-title">
          <p className="font-weight-bold">YOUTUBE</p>
          <button id="expend_btn">expend</button>
          <button id="hide_btn">hide</button>
        </div>
        <button className="main__btn" onClick={GoogleLogin}>login</button>

        <div className="main-cards">
          <div className="card">
            <div className="card-inner">
              <p className="text-primary">FOLLOWES</p>
              <span className="material-icons-outlined text-blue">groups</span>
            </div>
            <span id="yt_followers" className="text-primary font-weight-bold"></span>
          </div>

          <div className="card">
            <div className="card-inner">
              <p className="text-primary">VIEWS</p>
              <span className="material-icons-outlined text-blue">movie</span>
            </div>
            <span id="yt_views" className="text-primary font-weight-bold"></span>
          </div>

          <div className="card">
            <div className="card-inner">
              <p className="text-primary">LIKES</p>
              <span className="material-icons-outlined text-blue">thumb_up</span>
            </div>
            <span id="yt_likes" className="text-primary font-weight-bold"></span>
          </div>
        </div>

        <div className="card_extra">
          <div className="card">
            <div className="card-inner">
              <p className="text-primary">WEEKLY FOLLOWES</p>
              <span className="material-icons-outlined text-blue">groups</span>
            </div>
            <span id="yt_followers_w" className="text-primary font-weight-bold"></span>
          </div>

          <div className="card">
            <div className="card-inner">
              <p className="text-primary">WEEKLY VIEWS</p>
              <span className="material-icons-outlined text-blue">movie</span>
            </div>
            <span id="yt_views_w" className="text-primary font-weight-bold"></span>
          </div>

          <div className="card">
            <div className="card-inner">
              <p className="text-primary">WEEKLY LIKES</p>
              <span className="material-icons-outlined text-blue">thumb_up</span>
            </div>
            <span id="yt_likes_w" className="text-primary font-weight-bold"></span>
          </div>

          <div className="card">
            <div className="card-inner">
              <p className="text-primary">Monthly FOLLOWES</p>
              <span className="material-icons-outlined text-blue">groups</span>
            </div>
            <span id="yt_followers_m" className="text-primary font-weight-bold"></span>
          </div>

          <div className="card">
            <div className="card-inner">
              <p className="text-primary">Monthly VIEWS</p>
              <span className="material-icons-outlined text-blue">movie</span>
            </div>
            <span id="yt_views_m" className="text-primary font-weight-bold"></span>
          </div>

          <div className="card">
            <div className="card-inner">
              <p className="text-primary">Monthly LIKES</p>
              <span className="material-icons-outlined text-blue">thumb_up</span>
            </div>
            <span id="yt_likes_m" className="text-primary font-weight-bold"></span>
          </div>
        </div>

        <div className="button-container">
          <div className="left-buttons">
            <button id="daily_btn">weekly</button>
            <button id="weekly_btn">monthly</button>
            <button id="monthly_btn">yearly</button>
          </div>

          <div className="right-buttons">
            <button id="bar_btn">Bar Chart</button>
            <button id="lnr_btn">Linear Chart</button>
          </div>
        </div>

        <div className="chart_daily">
          <div className="charts-card">
            <p className="chart-title">FOLLOWERS GROWTH</p>
            <div id="weekChart_fl"></div>
          </div>

          <div className="charts-card">
            <p className="chart-title">VIEWS GROWTH</p>
            <div id="weekChart_vw"></div>
          </div>

          <div className="charts-card">
            <p className="chart-title">LIKES GROWTH</p>
            <div id="weekChart_likes"></div>
          </div>
        </div>

        <div className="chart_weekly_l">
          <div className="charts-card">
            <p className="chart-title">FOLLOWERS GROWTH</p>
            <div id="weekChart_fl_linear"></div>
          </div>
          <div className="charts-card">
            <p className="chart-title">VIEWS GROWTH</p>
            <div id="weekChart_vw_linear"></div>
          </div>
          <div className="charts-card">
            <p className="chart-title">LIKES GROWTH</p>
            <div id="weekChart_likes_linear"></div>
          </div>
        </div>

        <div className="chart_weekly">
          <div className="charts-card">
            <p className="chart-title">FOLLOWERS GROWTH</p>
            <div id="monthChart_fl"></div>
          </div>

          <div className="charts-card">
            <p className="chart-title">VIEWS GROWTH</p>
            <div id="monthChart_vw"></div>
          </div>

          <div className="charts-card">
            <p className="chart-title">LIKES GROWTH</p>
            <div id="monthChart_likes"></div>
          </div>
        </div>
        <div className="chart_monthly_l">
          <div className="charts-card">
            <p className="chart-title">FOLLOWERS GROWTH</p>
            <div id="monthChart_fl_linear"></div>
          </div>
          <div className="charts-card">
            <p className="chart-title">VIEWS GROWTH</p>
            <div id="monthChart_vw_linear"></div>
          </div>
          <div className="charts-card">
            <p className="chart-title">LIKES GROWTH</p>
            <div id="monthChart_likes_linear"></div>
          </div>
        </div>

        <div className="chart_monthly">
          <div className="charts-card">
            <p className="chart-title">FOLLOWERS GROWTH</p>
            <div id="yearChart_fl"></div>
          </div>

          <div className="charts-card">
            <p className="chart-title">VIEWS GROWTH</p>
            <div id="yearChart_vw"></div>
          </div>

          <div className="charts-card">
            <p className="chart-title">LIKES GROWTH</p>
            <div id="yearChart_likes"></div>
          </div>
        </div>

        <div className="chart_yearly_l">
          <div className="charts-card">
            <p className="chart-title">FOLLOWERS GROWTH</p>
            <div id="yearChart_fl_linear"></div>
          </div>
          <div className="charts-card">
            <p className="chart-title">VIEWS GROWTH</p>
            <div id="yearChart_vw_linear"></div>
          </div>
          <div className="charts-card">
            <p className="chart-title">LIKES GROWTH</p>
            <div id="yearChart_likes_linear"></div>
          </div>
        </div>
      </main>
    {/*Main end*/}
    </div>
  );
  
}

export default Youtube
