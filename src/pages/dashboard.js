
import React, { useState, useEffect } from 'react';
import './dashboard.css';
import { NavLink, Link } from "react-router-dom";
import ApexCharts from 'apexcharts'
import AppLayout from './applayout';

const MainDashboard = (props, { signOut }) => {
  const fbstate = useState(null);
  const [userState, setUserState] = useState(null);
  var sidebarOpen = false;
  var sidebar = document.getElementById("sidebar");

  function openSidebar() {
    if (!sidebarOpen) {
      sidebar.classList.add("sidebar-responsive");
      sidebarOpen = true;
    }
  }
  function closeSidebar() {
    if (sidebarOpen) {
      sidebar.classList.remove("sidebar-responsive");
      sidebarOpen = false;
    }
  }

  useEffect(() => {
    ///////////////////SIDEBAR TOGGLE//////////////////////


    if (userState) {
      openSidebar();
    } else {
      closeSidebar();
    }
    ///////////////////END//////////////////////

    ///////////////////CHARTS////////////////////
    var barChartOptions = {
      series: [{
        data: [10200, 2500, 7000]
      }],
      chart: {
        type: 'bar',
        height: 350,
        toolbar: {
          show: false
        },
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
          columnWidth: '40%',

        }
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        show: false
      },
      xaxis: {
        categories: ['YouTube', 'Facebook', 'Twitter'],
      },
      yaxis: {
        title: {
          text: "Count"
        }
      }
    };

    var barChart = new ApexCharts(document.querySelector("#bar-chart"), barChartOptions);
    barChart.render();



    var barChartOptions2 = {
      series: [{
        data: [700000, 250000, 809900]
      }],
      chart: {
        type: 'bar',
        height: 350,
        toolbar: {
          show: false
        },
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
          columnWidth: '40%',

        }
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        show: false
      },
      xaxis: {
        categories: ['YouTube', 'Facebook', 'Twitter'],
      },
      yaxis: {
        title: {
          text: "Count"
        }
      }
    };

    var barChart2 = new ApexCharts(document.querySelector("#bar-chart2"), barChartOptions2);
    barChart2.render();


    var areaChartOptions = {
      series: [{
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
      chart: {
        height: 350,
        type: 'area',
        toolbar: {
          show: false,
        },
      },
      colors: [
        "#cc3c43",
        "#367952",
        "#f5b74f"
      ],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth'
      },
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      markers: {
        size: 0
      },
      yaxis: [
        {
          title: {
            text: 'Followers per month',
          },
        },

      ],
      tooltip: {
        shared: true,
        intersect: false,
      }
    };

    var areaChart = new ApexCharts(document.querySelector("#area-chart"), areaChartOptions);
    areaChart.render();

    var barChartOptions3 = {
      series: [{
        data: [10200, 2500, 7000, 2340, 5550, 11111, 4567, 10200, 2500, 7000, 2340, 5550]
      }],
      chart: {
        type: 'bar',
        height: 350,
        toolbar: {
          show: false
        },
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
          columnWidth: '40%',

        }
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        show: false
      },
      xaxis: {
        categories: ['week1', 'week2', 'week3', 'week4', 'week5', 'week6', 'week7', 'week8', 'week9', 'week10', 'week11', 'week12'],
      },
      yaxis: {
        title: {
          text: "Count"
        }
      }
    };
    var barChart3 = new ApexCharts(document.querySelector("#bar-chart3"), barChartOptions3);
    barChart3.render();

    var barChartOptions4 = {
      series: [{
        data: [10200, 92500, 27000, 24340, 56550, 31111, 45667, 81000, 52500, 47000, 25340, 55560]
      }],
      chart: {
        type: 'bar',
        height: 350,
        toolbar: {
          show: false
        },
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
          columnWidth: '40%',

        }
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        show: false
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      },
      yaxis: {
        title: {
          text: "Count"
        }
      }
    };

    var barChart4 = new ApexCharts(document.querySelector("#bar-chart4"), barChartOptions4);
    barChart4.render();




    var barChartOptions5 = {
      series: [{
        data: [59, 47, 34, 62, 74, 41, 28, 51, 66, 22, 55, 78, 37, 72, 23, 68, 26, 44, 31, 57, 79, 25, 43, 64, 53, 36, 21, 48, 76, 30, 69]
      }],
      chart: {
        type: 'bar',
        height: 350,
        toolbar: {
          show: false
        },
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
          columnWidth: '40%',

        }
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        show: false
      },
      xaxis: {
        categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
          '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
          '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],
      },
      yaxis: {
        title: {
          text: "Count"
        }
      }
    };




    var barChart5 = new ApexCharts(document.querySelector("#bar-chart5"), barChartOptions5);
    barChart5.render();



    var monthOptions_fl = {
      series: [{
        data: [59, 47, 34, 62, 74, 41, 28, 51, 66, 22, 55, 78, 37, 72, 23, 68, 26, 44, 31, 57, 79, 25, 43, 64, 53, 36, 21, 48, 76, 30, 69]
      }],
      chart: {
        type: 'bar',
        height: 350,
        toolbar: {
          show: false
        },
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
          columnWidth: '40%',

        }
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        show: false
      },
      xaxis: {
        categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
          '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
          '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],
      },
      yaxis: {
        title: {
          text: "Count"
        }
      }
    };
    var monthChart_fl = new ApexCharts(document.querySelector("#monthChart_fl"), monthOptions_fl);
    monthChart_fl.render();

    var monthOptions_vw = {
      series: [{
        data: [59, 47, 111, 62, 74, 41, 28, 51, 66, 22, 55, 78, 37, 72, 23, 68, 26, 44, 31, 57, 79, 25, 43, 64, 53, 36, 21, 48, 76, 30, 69]
      }],
      chart: {
        type: 'bar',
        height: 350,
        toolbar: {
          show: false
        },
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
          columnWidth: '40%',

        }
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        show: false
      },
      xaxis: {
        categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
          '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
          '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],
      },
      yaxis: {
        title: {
          text: "Count"
        }
      }
    };
    var monthChart_vw = new ApexCharts(document.querySelector("#monthChart_vw"), monthOptions_vw);
    monthChart_vw.render();

    var monthOptions_likes = {
      series: [{
        data: [200, 47, 111, 62, 74, 41, 28, 51, 66, 22, 55, 78, 37, 72, 23, 68, 26, 44, 31, 57, 79, 25, 43, 64, 53, 36, 21, 48, 76, 30, 69]
      }],
      chart: {
        type: 'bar',
        height: 350,
        toolbar: {
          show: false
        },
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
          columnWidth: '40%',

        }
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        show: false
      },
      xaxis: {
        categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
          '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
          '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],
      },
      yaxis: {
        title: {
          text: "Count"
        }
      }
    };
    var monthChart_likes = new ApexCharts(document.querySelector("#monthChart_likes"), monthOptions_likes);
    monthChart_likes.render();

    var yearOptions_fl = {
      series: [{
        data: [10200, 92500, 27000, 24340, 56550, 31111, 45667, 81000, 52500, 47000, 25340, 55560]
      }],
      chart: {
        type: 'bar',
        height: 350,
        toolbar: {
          show: false
        },
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
          columnWidth: '40%',

        }
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        show: false
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      },
      yaxis: {
        title: {
          text: "Count"
        }
      }
    };

    var yearChart_fl = new ApexCharts(document.querySelector("#yearChart_fl"), yearOptions_fl);
    yearChart_fl.render();

    var yearOptions_vw = {
      series: [{
        data: [10200, 92500, 27000, 24340, 56550, 31111, 45667, 81000, 52500, 47000, 25340, 557560]
      }],
      chart: {
        type: 'bar',
        height: 350,
        toolbar: {
          show: false
        },
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
          columnWidth: '40%',

        }
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        show: false
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      },
      yaxis: {
        title: {
          text: "Count"
        }
      }
    };

    var yearChart_vw = new ApexCharts(document.querySelector("#yearChart_vw"), yearOptions_vw);
    yearChart_vw.render();

    var yearOptions_likes = {
      series: [{
        data: [10200, 92500, 27000, 24340, 96550, 31111, 453667, 81000, 52500, 47000, 25340, 557560]
      }],
      chart: {
        type: 'bar',
        height: 350,
        toolbar: {
          show: false
        },
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
          columnWidth: '40%',

        }
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        show: false
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      },
      yaxis: {
        title: {
          text: "Count"
        }
      }
    };

    var yearChart_likes = new ApexCharts(document.querySelector("#yearChart_likes"), yearOptions_likes);
    yearChart_likes.render();

    ///////////////////END/////////////////////


    ////////////////expend_hide_button_animations/////////////////////////
    if (document.getElementById('expend_btn')) {
      document.getElementById('expend_btn').addEventListener('click', function () {
        var element1 = document.querySelector('.card_extra');
        var element2 = document.querySelector('#expend_btn');
        var element3 = document.querySelector('#hide_btn');

        // Change display property to "block" (or any other valid value)
        element1.style.display = 'grid';
        element2.style.display = 'none';
        element3.style.display = 'inline';



      });
    }

    if (document.getElementById('hide_btn')) {
      document.getElementById('hide_btn').addEventListener('click', function () {
        var element1 = document.querySelector('.card_extra');
        var element2 = document.querySelector('#hide_btn');
        var element3 = document.querySelector('#expend_btn');

        // Change display property to "block" (or any other valid value)
        element1.style.display = 'none';
        element2.style.display = 'none';
        element3.style.display = 'inline';
      });
    }

    ////////////////END/////////////////////////

    ////////////////FLT_BTN///////////////////

    if (document.getElementById('daily_btn')) {
      document.getElementById('daily_btn').addEventListener('click', function () {
        var element1 = document.querySelector('.chart_daily');
        var element2 = document.querySelector('.chart_weekly');
        var element3 = document.querySelector('.chart_monthly');

        // Change display property to "block" (or any other valid value)
        element1.style.display = 'grid';
        element2.style.display = 'none';
        element3.style.display = 'none';



      });
    }
    if (document.getElementById('weekly_btn')) {
      document.getElementById('weekly_btn').addEventListener('click', function () {
        var element1 = document.querySelector('.chart_weekly');
        var element2 = document.querySelector('.chart_daily');
        var element3 = document.querySelector('.chart_monthly');

        // Change display property to "block" (or any other valid value)
        element1.style.display = 'grid';
        element2.style.display = 'none';
        element3.style.display = 'none';



      });
    }
    if (document.getElementById('monthly_btn')) {
      document.getElementById('monthly_btn').addEventListener('click', function () {
        var element1 = document.querySelector('.chart_monthly');
        var element2 = document.querySelector('.chart_weekly');
        var element3 = document.querySelector('.chart_daily');

        // Change display property to "block" (or any other valid value)
        element1.style.display = 'grid';
        element2.style.display = 'none';
        element3.style.display = 'none';
      });
    }


  }, [userState]);


  return (
    <AppLayout signOut={signOut}>
      <div>
        <div className="grid-container">
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

          <aside id="sidebar">
            <div className="sidebar-title">
              <div className="sidebar-brand">
                <span className="material-icons-outlined">dashboard</span>SocialHub
              </div>
              <span className="material-icons-outlined" onClick={closeSidebar}>close</span>
            </div>

            <ul className="sidebar-list">
              <style>{`a { text-decoration: none; }`}</style>
              <Link to="/MainDashboard">
                <li className="sidebar-list-item">
                  <span className="material-icons-outlined">home</span>Dashboard
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

          <main className="main-container">
            <div className="main-title">
              <p className="font-weight-bold">DASHBOARD</p>
            </div>

            <div className="main-cards">
              <div className="card">
                <div className="card-inner">
                  <p className="text-primary">FOLLOWERS COMBINED</p>
                  <span className="material-icons-outlined text-blue">groups</span>
                </div>
                <span className="text-primary font-weight-bold">10347</span>
              </div>

              <div className="card">
                <div className="card-inner">
                  <p className="text-primary">VIEWS COMBINED</p>
                  <span className="material-icons-outlined text-blue">movie</span>
                </div>
                <span className="text-primary font-weight-bold">2340000</span>
              </div>

              <div className="card">
                <div className="card-inner">
                  <p className="text-primary">LIKES COMBINED</p>
                  <span className="material-icons-outlined text-blue">thumb_up</span>
                </div>
                <span className="text-primary font-weight-bold">4840000</span>
              </div>
            </div>

            <div className="charts">
              <div className="charts-card">
                <p className="chart-title">Followers Comparison</p>
                <div id="bar-chart"></div>
              </div>

              <div className="charts-card">
                <p className="chart-title">Likes Comparison</p>
                <div id="bar-chart2"></div>
              </div>
            </div>

            <div className="charts2">
              <div className="charts-card2">
                <p className="chart-title2">Followers Growth</p>
                <div id="area-chart"></div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </AppLayout>
  );
}
export default MainDashboard;





