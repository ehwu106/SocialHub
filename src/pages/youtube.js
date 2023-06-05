import React, { useState, useEffect } from 'react';
import "./dashboard.css";
import ApexCharts from 'apexcharts';
import AppLayout from './applayout';
import {NavLink, Link} from "react-router-dom";
import SignOutButton from './signoutbutton';

const {google} = require('googleapis');

// Set the required parameters
const CLIENT_ID = '964989657567-0s5gaotr644ba5o48qvdn0dls9fkb69s.apps.googleusercontent.com';
const CLIENT_SECRET = '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';
var access_token = null;
var oauth2Client= null;

function genAuthUrl(){
  // Set the required parameters
  const clientId = CLIENT_ID;
  const clientSecret = CLIENT_SECRET;
  const redirectUri = 'https://localhost:3000/dashboard_yt/oauth';
  const scope = 'https://www.googleapis.com/auth/yt-analytics.readonly';

  // Create OAuth2 client
  oauth2Client = new google.auth.OAuth2(clientId, clientSecret, redirectUri);

  // Generate the authentication URL
  const authUrl = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: scope,
  });

  // Print the authentication URL
  console.log('Authorization URL:', authUrl);
  return authUrl;
}

const redirectLogin = () => {
  useEffect(() => {
    // Perform the redirect after the component mounts
    window.location.href = genAuthUrl();
  }, []);
}

// Handle the authorization code
const handleAuthorizationCode = async (code) => {
  try {
    // Exchange the authorization code for tokens
    const { tokens } = await oauth2Client.getToken(code);

    // Set the tokens on the client
    oauth2Client.setCredentials(tokens);
    console.log('Access tokens:', tokens);
    access_token = tokens.access_token;

    // Use the tokens to make API requests
    // ...
  } catch (error) {
    console.error('Error retrieving access token:', error);
  }
};

export const Oauth = () => {
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get('code');

    // Use the code and scope values for further processing
    handleAuthorizationCode(code);

    // Redirect to /dashboard_yt
    window.location.href = '/dashboard_yt';
  }, []);

  return null;
};

const Youtube = (props) => {
    redirectLogin();
    const fbstate = useState(null);
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
        closeSidebar();
      }
      ///////////////////END//////////////////////

      ///////////////////SIDEBAR TOGGLE//////////////////////


      ///////////////////END//////////////////////

      /////////////////////// YOUTUBE API/////////////////////////////////////
      async function populateDataMap(startDate, endDate, dimensions, maxResults) {
        const url = 'https://youtubeanalytics.googleapis.com/v2/reports'
        const params = new URLSearchParams({
          'ids': 'channel==MINE',
          'startDate': startDate,
          'endDate': endDate,
          'metrics': 'views,likes,subscribersGained',
          'dimensions': dimensions,
          'maxResults': maxResults,
          'access_token': access_token
        });

        // Send the GET request using fetch()
        try {
          const response = await fetch(`${url}?${params}`);
          const data = await response.json();

          const dataMap = new Map();
          let currentDate = new Date(startDate);
          currentDate.setDate(currentDate.getDate() + 1); //Skip one day because it starts from the day before so it will always be 0
          let currentEndDate = new Date(endDate)

          while (currentDate <= currentEndDate) {
            let dateKey;

            if (dimensions === 'day') {
              dateKey = currentDate.toISOString().split("T")[0];
              currentDate.setDate(currentDate.getDate() + 1);
            } else if (dimensions === 'month') {
              dateKey = getMonthKey(currentDate);
              currentDate.setMonth(currentDate.getMonth() + 1);
            }

            dataMap.set(dateKey, [0, 0, 0]);
          }

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

          const viewsArray = Array.from(dataMap.values()).map(([firstValue]) => firstValue);
          const likesArray = Array.from(dataMap.values()).map(([_, secondValue]) => secondValue);
          const subsArray = Array.from(dataMap.values()).map(([_, x, thirdValue]) => thirdValue);

          return [viewsArray, likesArray, subsArray]

        } catch (error) {
          console.error(error);
        }
      }

      function getMonthKey(date) {
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        return `${year}-${String(month).padStart(2, '0')}`;
      }

      const today = new Date();
      const currentYear = today.getFullYear();
      const currentWeek = Math.ceil(today.getDate() / 7);
      const currentMonth = String(today.getMonth() + 1).padStart(2, '0');

      const [weeklyVW, weeklyLikes, weeklyFL] = populateDataMap(
        `${currentYear}-${currentMonth}-${String(((currentWeek - 1) * 7 + 1)).padStart(2, '0')}`,
        `${currentYear}-${currentMonth}-${String((currentWeek * 7)).padStart(2, '0')}`,
        'day',
        '7'
      )
      const [monthlyVW, monthlyLikes, monthlyFL] = populateDataMap(
        `${currentYear}-${currentMonth}-31`,
        `${currentYear}-${currentMonth}-31`,
        'month',
        '12'
      )
      const [yearlyVW, yearlyLikes, yearlyFL] = populateDataMap(
        `${currentYear - 1}-12-31`,
        `${currentYear}-12-31`,
        'month',
        '12'
      )

      ///////////////////CHARTS////////////////////

      function renderBarChart(selector, data, categories) {
        var barChartOptions = {
          series: [{
            data: data
          }],
          chart: {
            type: 'bar',
            height: 350,
            toolbar: {
              show: false
            }
          },
          colors: [
            "#cc3c43",
            "#367952",
            "#f5b74f"
          ],
          plotOptions: {
            bar: {
              distributed: true,
              borderRadius: 4,
              horizontal: false,
              columnWidth: '40%'
            }
          },
          dataLabels: {
            enabled: false
          },
          legend: {
            show: false
          },
          xaxis: {
            categories: categories
          },
          yaxis: {
            title: {
              text: "Count"
            }
          }
        };

        var barChart = new ApexCharts(document.querySelector(selector), barChartOptions);
        barChart.render();
      }

      function renderAreaChart(selector, seriesData, labels) {
        var areaChartOptions = {
          series: seriesData,
          chart: {
            height: 350,
            type: 'area',
            toolbar: {
              show: false
            }
          },
          colors: [
            "#cc3c43",
            "#367952",
            "#f5b74f"
          ],
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'smooth'
          },
          labels: labels,
          markers: {
            size: 0
          },
          yaxis: [{
            title: {
              text: 'Followers per month'
            }
          }],
          tooltip: {
            shared: true,
            intersect: false
          }
        };

        var areaChart = new ApexCharts(document.querySelector(selector), areaChartOptions);
        areaChart.render();
      }
      
      const weeklyLabels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
      const monthlyLabels = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
      '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
      '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];
      const yearlyLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      /////////////////////YOUTUBE API ENDS///////////////////////////////////////////
      renderBarChart(
        "#weekChart_fl",
        weeklyFL,
        weeklyLabels
      );

      renderBarChart(
        "#weekChart_vw",
        weeklyVW,
        weeklyLabels
      );

      renderBarChart(
        "#weekChart_likes",
        weeklyLikes,
        weeklyLabels
      );

      renderBarChart(
        "#monthChart_fl",
        monthlyFL,
        monthlyLabels
      );

      renderBarChart(
        "#monthChart_vw",
        monthlyVW,
        monthlyLabels
      );

      renderBarChart(
        "#monthChart_likes",
        monthlyLikes,
        monthlyLabels
      );

      renderBarChart(
        "#yearChart_fl",
        yearlyFL,
        yearlyLabels
      );

      renderBarChart(
        "#yearChart_vw",
        yearlyVW,
        yearlyLabels
      );

      renderBarChart(
        "#yearChart_likes",
        yearlyLikes,
        yearlyLabels
      );
  
      //// AREA GRAPHS
      renderAreaChart(
        "#monthChart_fl_linear",
        [{
          name: 'YouTube',
          data: monthlyFL
        }],
        monthlyLabels
      );

      renderAreaChart(
        "#monthChart_vw_linear",
        [{
          name: 'YouTube',
          data: monthlyVW
        }],
        monthlyLabels
      );

      renderAreaChart(
        "#monthChart_likes_linear",
        [{
          name: 'YouTube',
          data: monthlyLikes
        }],
        monthlyLabels
      );

      renderAreaChart(
        "#yearChart_likes_linear",
        [{
          name: 'YouTube',
          data: yearlyLikes
        }],
        yearlyLabels
      );

      renderAreaChart(
        "#yearChart_vw_linear",
        [{
          name: 'YouTube',
          data: yearlyVW
        }],
        yearlyLabels
      );

      renderAreaChart(
        "#yearChart_fl_linear",
        [{
          name: 'YouTube',
          data: yearlyFL
        }],
        yearlyLabels
      );

      renderAreaChart(
        "#weekChart_fl_linear",
        [{
          name: 'YouTube',
          data: weeklyFL
        }],
        weeklyLabels
      );

      renderAreaChart(
        "#weekChart_vw_linear",
        [{
          name: 'YouTube',
          data: weeklyVW
        }],
        weeklyLabels
      );

      renderAreaChart(
        "#weekChart_likes_linear",
        [{
          name: 'YouTube',
          data: weeklyLikes
        }],
        weeklyLabels
      );
      ///////////////////END/////////////////////
  
  
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
      
      function updateStats() {
        var ytFollowers = 111;
        var ytLikes = 222;
        var ytViews = 333;
        var ytFollowersW = 1111;
        var ytLikesW = 2222;
        var ytViewsW = 3333;
        var ytFollowersM = 11111;
        var ytLikesM = 22222;
        var ytViewsM = 33333;
        
        document.getElementById('yt_followers').textContent = ytFollowers;
        document.getElementById('yt_likes').textContent = ytLikes;
        document.getElementById('yt_views').textContent = ytViews;
        document.getElementById('yt_followers_w').textContent = ytFollowersW;
        document.getElementById('yt_likes_w').textContent = ytLikesW;
        document.getElementById('yt_views_w').textContent = ytViewsW;
        document.getElementById('yt_followers_m').textContent = ytFollowersM;
        document.getElementById('yt_likes_m').textContent = ytLikesM;
        document.getElementById('yt_views_m').textContent = ytViewsM;
      }
      
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
      
      // Initial setup
      updateChartDisplay();
      updateStats();

        ////////////////END/////////////////////////
    }, [userState]);

    return (
      <div className="grid-container">
      {/* Header */}
      <header className="header">
        <div className="menu-icon" onClick={openSidebar}>
          <span className="material-icons-outlined">menu</span>
        </div>
        <div className="header-left">
          <span className="material-icons-outlined">search</span>
        </div>
        <div className="header-right">
          <span className="material-icons-outlined">settings</span>
          <span className="material-icons-outlined">account_circle</span>
        </div>
      </header>

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
          <style>{`
            a {
              text-decoration: none;
            }
          `}</style>

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

          <a href="https://www.example.com">
            <li className="sidebar-list-item">
              <span className="material-icons-outlined">label_important</span>
              Facebook
            </li>
          </a>

          <a href="https://www.example.com">
            <li className="sidebar-list-item">
              <span className="material-icons-outlined">label_important</span>
              Twitter
            </li>
          </a>
        </ul>
      </aside>

      {/* Main */}
      <main className="main-container">
        <div className="main-title">
          <p className="font-weight-bold">YOUTUBE</p>
          <button id="expend_btn">expend</button>
          <button id="hide_btn">hide</button>
        </div>

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

export default Youtube;