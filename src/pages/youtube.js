

import React, { useState, useEffect } from 'react';
import "./dashboard.css";
import ApexCharts from 'apexcharts';
import AppLayout from './applayout';
import {NavLink, Link} from "react-router-dom";
import SignOutButton from './signoutbutton';

const Youtube = (props) => {
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

      // renderBarChart(selector, data, categories)
      // renderAreaChart(selector, seriesData, labels)
      renderBarChart(
        "#bar-chart",
        [10200, 2500, 7000],
        ['YouTube', 'Facebook', 'Twitter']
      );

      renderBarChart(
        "#bar-chart2",
        [700000, 250000, 809900],
        ['YouTube', 'Facebook', 'Twitter']
      );

      renderAreaChart(
        "#area-chart",
        [{
          name: 'YouTube',
          data: [44, 50, 30, 20, 79, 100, 50]
        },
        {
          name: 'Facebook',
          data: [55, 69, 45, 61, 43, 54, 120]
        },
        {
          name: 'Twitter',
          data: [30, 45, 45, 134, 77, 54, 111]
        }],
        ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"]
      );

      renderBarChart(
        "#bar-chart3",
        [10200, 2500, 7000, 2340, 5550, 11111, 4567, 10200, 2500, 7000, 2340, 5550],
        ['week1', 'week2', 'week3', 'week4', 'week5', 'week6', 'week7', 'week8', 'week9', 'week10', 'week11', 'week12']
      );

      renderBarChart(
        "#bar-chart4",
        [10200, 92500, 27000, 24340, 56550, 31111, 45667, 81000, 52500, 47000, 25340, 55560],
        ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      );

      renderBarChart(
        "#bar-chart5",
        [59, 47, 34, 62, 74, 41, 28, 51, 66, 22, 55, 78, 37, 72, 23, 68, 26, 44, 31, 57, 79, 25, 43, 64, 53, 36, 21, 48, 76, 30, 69],
        ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
          '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
          '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31']
      );

      renderBarChart(
        "#weekChart_fl",
        [1200, 2500, 778, 2340, 4000, 1700, 2100],
        ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
      );

      renderBarChart(
        "#weekChart_vw",
        [2000, 5000, 3000, 2500, 4000, 1700, 2100],
        ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
      );

      renderBarChart(
        "#weekChart_likes",
        [2000, 5000, 3000, 2500, 4000, 1700, 2100],
        ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
      );

      renderBarChart(
        "#monthChart_fl",
        [59, 47, 34, 62, 74, 41, 28, 51, 66, 22, 55, 78, 37, 72, 23, 68, 26, 44, 31, 57, 79, 25, 43, 64, 53, 36, 21, 48, 76, 30, 69],
        ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
          '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
          '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31']
      );

      renderBarChart(
        "#monthChart_vw",
        [59, 47, 111, 62, 74, 41, 28, 51, 66, 22, 55, 78, 37, 72, 23, 68, 26, 44, 31, 57, 79, 25, 43, 64, 53, 36, 21, 48, 76, 30, 69],
        ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
          '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
          '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31']
      );

      renderBarChart(
        "#monthChart_likes",
        [200, 47, 111, 62, 74, 41, 28, 51, 66, 22, 55, 78, 37, 72, 23, 68, 26, 44, 31, 57, 79, 25, 43, 64, 53, 36, 21, 48, 76, 30, 69],
        ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
          '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
          '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31']
      );

      renderBarChart(
        "#yearChart_fl",
        [10200, 92500, 27000, 24340, 56550, 31111, 45667, 81000, 52500, 47000, 25340, 55560],
        ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      );

      renderBarChart(
        "#yearChart_vw",
        [10200, 92500, 27000, 24340, 56550, 31111, 45667, 81000, 52500, 47000, 25340, 557560],
        ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      );

      renderBarChart(
        "#yearChart_likes",
        [10200, 92500, 27000, 24340, 96550, 31111, 453667, 81000, 52500, 47000, 25340, 557560],
        ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      );
  
      //// AREA GRAPHS
      renderAreaChart(
        "#monthChart_fl_linear",
        [{
          name: 'YouTube',
          data: [59, 47, 34, 62, 74, 41, 28, 51, 66, 22, 55, 78, 37, 72, 23, 68, 26, 44, 31, 57, 79, 25, 43, 64, 53, 36, 21, 48, 76, 30, 69]
        }],
        ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
          '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
          '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31']
      );

      renderAreaChart(
        "#monthChart_vw_linear",
        [{
          name: 'YouTube',
          data: [59, 47, 34, 62, 74, 41, 28, 51, 66, 22, 55, 78, 37, 72, 23, 68, 26, 44, 31, 57, 79, 25, 43, 64, 53, 36, 21, 48, 76, 30, 69]
        }],
        ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
          '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
          '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31']
      );

      renderAreaChart(
        "#monthChart_likes_linear",
        [{
          name: 'YouTube',
          data: [59, 47, 34, 62, 74, 41, 28, 51, 66, 22, 55, 78, 37, 72, 23, 68, 26, 44, 31, 57, 79, 25, 43, 64, 53, 36, 21, 48, 76, 30, 69]
        }],
        ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
          '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
          '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31']
      );

      renderAreaChart(
        "#yearChart_likes_linear",
        [{
          name: 'YouTube',
          data: [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 11000, 12000]
        }],
        ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      );

      renderAreaChart(
        "#yearChart_vw_linear",
        [{
          name: 'YouTube',
          data: [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 11000, 12000]
        }],
        ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      );

      renderAreaChart(
        "#yearChart_fl_linear",
        [{
          name: 'YouTube',
          data: [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 11000, 12000]
        }],
        ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      );

      renderAreaChart(
        "#weekChart_fl_linear",
        [{
          name: 'YouTube',
          data: [1000, 2000, 3000, 4000, 5000, 6000, 7000]
        }],
        ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
      );

      renderAreaChart(
        "#weekChart_vw_linear",
        [{
          name: 'YouTube',
          data: [1000, 2000, 3000, 4000, 5000, 6000, 7000]
        }],
        ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
      );

      renderAreaChart(
        "#weekChart_likes_linear",
        [{
          name: 'YouTube',
          data: [1000, 2000, 3000, 4000, 5000, 6000, 7000]
        }],
        ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
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