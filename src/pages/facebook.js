import React, {useState, useEffect} from 'react';
import './styles.css';
//import runScriptJS from './script.js';
import ApexCharts from 'apexcharts';

const Facebook = (props) => {
  const [userState, setUserState] = useState(null);
  const [userToken, setUserToken] = useState(null);
  const [pageData, setPageData] = useState(null);
  const [pageFollowerEle, setPageFollowerEle] = useState(<></>);
  const [pageLikeEle, setPageLikeEle] = useState(<></>);
  const [pageViewerEle, setPageViewerEle] = useState(<></>);
  const [weekOptions_fls, setWeekOptions_fls] = useState(null);

  useEffect(() => {
    ///////////////////SIDEBAR TOGGLE//////////////////////

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
///////////////////END//////////////////////

///////////////////CHARTS////////////////////
var barChartOptions = {
    series: [{
    data: [10200, 2500, 7000]
  }],
    chart: {
    type: 'bar',
    height: 350,
    toolbar:{
        show:false
    },
  },
  colors:[
    "#cc3c43",
    "#367952",
    "#f5b74f"
  ],
  plotOptions: {
    bar: {
      distributed: true,
      borderRadius: 4,
      horizontal: false,
      columnWidth:'40%',

    }
  },
  dataLabels: {
    enabled: false
  },
  legend:{
    show:false
  },
  xaxis: {
    categories: ['YouTube', 'Facebook', 'Twitter'],
  },
  yaxis:{
    title:{
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
    toolbar:{
        show:false
    },
  },
  colors:[
    "#cc3c43",
    "#367952",
    "#f5b74f"
  ],
  plotOptions: {
    bar: {
      distributed: true,
      borderRadius: 4,
      horizontal: false,
      columnWidth:'40%',

    }
  },
  dataLabels: {
    enabled: false
  },
  legend:{
    show:false
  },
  xaxis: {
    categories: ['YouTube', 'Facebook', 'Twitter'],
  },
  yaxis:{
    title:{
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
    toolbar:{
        show:false,
    },
  },
  colors:[
    "#cc3c43",
    "#367952",
    "#f5b74f"
  ],
  dataLabels:{
    enabled:false,
  },
  stroke: {
    curve: 'smooth'
  },
  labels: ["Jan","Feb","Mar","Apr","May","Jun","Jul"],
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
    data: [10200, 2500, 7000, 2340, 5550, 11111, 4567,10200, 2500, 7000, 2340, 5550]
  }],
    chart: {
    type: 'bar',
    height: 350,
    toolbar:{
        show:false
    },
  },
  colors:[
    "#cc3c43",
    "#367952",
    "#f5b74f"
  ],
  plotOptions: {
    bar: {
      distributed: true,
      borderRadius: 4,
      horizontal: false,
      columnWidth:'40%',

    }
  },
  dataLabels: {
    enabled: false
  },
  legend:{
    show:false
  },
  xaxis: {
    categories: ['week1', 'week2', 'week3','week4','week5','week6','week7','week8','week9','week10','week11','week12'],
  },
  yaxis:{
    title:{
        text: "Count"
    }
  }
  };
  var barChart3 = new ApexCharts(document.querySelector("#bar-chart3"), barChartOptions3);
  barChart3.render();

  var barChartOptions4 = {
    series: [{
    data: [10200, 92500, 27000, 24340, 56550, 31111, 45667,81000, 52500, 47000, 25340, 55560]
  }],
    chart: {
    type: 'bar',
    height: 350,
    toolbar:{
        show:false
    },
  },
  colors:[
    "#cc3c43",
    "#367952",
    "#f5b74f"
  ],
  plotOptions: {
    bar: {
      distributed: true,
      borderRadius: 4,
      horizontal: false,
      columnWidth:'40%',

    }
  },
  dataLabels: {
    enabled: false
  },
  legend:{
    show:false
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
  },
  yaxis:{
    title:{
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
    toolbar:{
        show:false
    },
  },
  colors:[
    "#cc3c43",
    "#367952",
    "#f5b74f"
  ],
  plotOptions: {
    bar: {
      distributed: true,
      borderRadius: 4,
      horizontal: false,
      columnWidth:'40%',

    }
  },
  dataLabels: {
    enabled: false
  },
  legend:{
    show:false
  },
  xaxis: {
    categories: ['1', '2', '3','4','5','6', '7', '8', '9', '10',
     '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
      '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],
  },
  yaxis:{
    title:{
        text: "Count"
    }
  }
  };



  
  var barChart5 = new ApexCharts(document.querySelector("#bar-chart5"), barChartOptions5);
  barChart5.render();

/*
  var weekOptions_fl = {
    series: [{
    data: [1200, 2500, 778, 2340, 4000, 1700,2100]
  }],
    chart: {
    type: 'bar',
    height: 350,
    toolbar:{
        show:false
    },
  },
  colors:[
    "#cc3c43",
    "#367952",
    "#f5b74f"
  ],
  plotOptions: {
    bar: {
      distributed: true,
      borderRadius: 4,
      horizontal: false,
      columnWidth:'40%',

    }
  },
  dataLabels: {
    enabled: false
  },
  legend:{
    show:false
  },
  xaxis: {
    categories: ['Monday', 'Tuesday', 'Wednesday','Thursday','Friday','Saturday','Sunday'],
  },
  yaxis:{
    title:{
        text: "Count"
    }
  }
  };
  var weekChart_fl = new ApexCharts(document.querySelector("#weekChart_fl"), weekOptions_fl);
  weekChart_fl.render();*/
/*
  var weekOptions_vw = {
    series: [{
    data: [2000, 5000, 3000, 2500, 4000, 1700,2100]
  }],
    chart: {
    type: 'bar',
    height: 350,
    toolbar:{
        show:false
    },
  },
  colors:[
    "#cc3c43",
    "#367952",
    "#f5b74f"
  ],
  plotOptions: {
    bar: {
      distributed: true,
      borderRadius: 4,
      horizontal: false,
      columnWidth:'40%',

    }
  },
  dataLabels: {
    enabled: false
  },
  legend:{
    show:false
  },
  xaxis: {
    categories: ['Monday', 'Tuesday', 'Wednesday','Thursday','Friday','Saturday','Sunday'],
  },
  yaxis:{
    title:{
        text: "Count"
    }
  }
  };
  var weekChart_vw = new ApexCharts(document.querySelector("#weekChart_vw"), weekOptions_vw);
  weekChart_vw.render();*/

/*
  var weekOptions_likes = {
    series: [{
    data: [2000, 5000, 3000, 2500, 4000, 1700,2100]
  }],
    chart: {
    type: 'bar',
    height: 350,
    toolbar:{
        show:false
    },
  },
  colors:[
    "#cc3c43",
    "#367952",
    "#f5b74f"
  ],
  plotOptions: {
    bar: {
      distributed: true,
      borderRadius: 4,
      horizontal: false,
      columnWidth:'40%',

    }
  },
  dataLabels: {
    enabled: false
  },
  legend:{
    show:false
  },
  xaxis: {
    categories: ['Monday', 'Tuesday', 'Wednesday','Thursday','Friday','Saturday','Sunday'],
  },
  yaxis:{
    title:{
        text: "Count"
    }
  }
  };
  var weekChart_likes = new ApexCharts(document.querySelector("#weekChart_likes"), weekOptions_likes);
  weekChart_likes.render();
*/


  var monthOptions_fl = {
    series: [{
    data: [59, 47, 34, 62, 74, 41, 28, 51, 66, 22, 55, 78, 37, 72, 23, 68, 26, 44, 31, 57, 79, 25, 43, 64, 53, 36, 21, 48, 76, 30, 69]
  }],
    chart: {
    type: 'bar',
    height: 350,
    toolbar:{
        show:false
    },
  },
  colors:[
    "#cc3c43",
    "#367952",
    "#f5b74f"
  ],
  plotOptions: {
    bar: {
      distributed: true,
      borderRadius: 4,
      horizontal: false,
      columnWidth:'40%',

    }
  },
  dataLabels: {
    enabled: false
  },
  legend:{
    show:false
  },
  xaxis: {
    categories: ['1', '2', '3','4','5','6', '7', '8', '9', '10',
     '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
      '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],
  },
  yaxis:{
    title:{
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
    toolbar:{
        show:false
    },
  },
  colors:[
    "#cc3c43",
    "#367952",
    "#f5b74f"
  ],
  plotOptions: {
    bar: {
      distributed: true,
      borderRadius: 4,
      horizontal: false,
      columnWidth:'40%',

    }
  },
  dataLabels: {
    enabled: false
  },
  legend:{
    show:false
  },
  xaxis: {
    categories: ['1', '2', '3','4','5','6', '7', '8', '9', '10',
     '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
      '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],
  },
  yaxis:{
    title:{
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
    toolbar:{
        show:false
    },
  },
  colors:[
    "#cc3c43",
    "#367952",
    "#f5b74f"
  ],
  plotOptions: {
    bar: {
      distributed: true,
      borderRadius: 4,
      horizontal: false,
      columnWidth:'40%',

    }
  },
  dataLabels: {
    enabled: false
  },
  legend:{
    show:false
  },
  xaxis: {
    categories: ['1', '2', '3','4','5','6', '7', '8', '9', '10',
     '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
      '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],
  },
  yaxis:{
    title:{
        text: "Count"
    }
  }
  };
  var monthChart_likes = new ApexCharts(document.querySelector("#monthChart_likes"), monthOptions_likes);
  monthChart_likes.render();

  var yearOptions_fl = {
    series: [{
    data: [10200, 92500, 27000, 24340, 56550, 31111, 45667,81000, 52500, 47000, 25340, 55560]
  }],
    chart: {
    type: 'bar',
    height: 350,
    toolbar:{
        show:false
    },
  },
  colors:[
    "#cc3c43",
    "#367952",
    "#f5b74f"
  ],
  plotOptions: {
    bar: {
      distributed: true,
      borderRadius: 4,
      horizontal: false,
      columnWidth:'40%',

    }
  },
  dataLabels: {
    enabled: false
  },
  legend:{
    show:false
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
  },
  yaxis:{
    title:{
        text: "Count"
    }
  }
  };

  var yearChart_fl = new ApexCharts(document.querySelector("#yearChart_fl"), yearOptions_fl);
  yearChart_fl.render();

  var yearOptions_vw = {
    series: [{
    data: [10200, 92500, 27000, 24340, 56550, 31111, 45667,81000, 52500, 47000, 25340, 557560]
  }],
    chart: {
    type: 'bar',
    height: 350,
    toolbar:{
        show:false
    },
  },
  colors:[
    "#cc3c43",
    "#367952",
    "#f5b74f"
  ],
  plotOptions: {
    bar: {
      distributed: true,
      borderRadius: 4,
      horizontal: false,
      columnWidth:'40%',

    }
  },
  dataLabels: {
    enabled: false
  },
  legend:{
    show:false
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
  },
  yaxis:{
    title:{
        text: "Count"
    }
  }
  };

  var yearChart_vw = new ApexCharts(document.querySelector("#yearChart_vw"), yearOptions_vw);
  yearChart_vw.render();

  var yearOptions_likes = {
    series: [{
    data: [10200, 92500, 27000, 24340, 96550, 31111, 453667,81000, 52500, 47000, 25340, 557560]
  }],
    chart: {
    type: 'bar',
    height: 350,
    toolbar:{
        show:false
    },
  },
  colors:[
    "#cc3c43",
    "#367952",
    "#f5b74f"
  ],
  plotOptions: {
    bar: {
      distributed: true,
      borderRadius: 4,
      horizontal: false,
      columnWidth:'40%',

    }
  },
  dataLabels: {
    enabled: false
  },
  legend:{
    show:false
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
  },
  yaxis:{
    title:{
        text: "Count"
    }
  }
  };

  var yearChart_likes = new ApexCharts(document.querySelector("#yearChart_likes"), yearOptions_likes);
  yearChart_likes.render();

  ///////////////////END/////////////////////


////////////////expend_hide_button_animations/////////////////////////
  if (document.getElementById('expend_btn')) {
  document.getElementById('expend_btn').addEventListener('click', function() {
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
    document.getElementById('hide_btn').addEventListener('click', function() {
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
 document.getElementById('daily_btn').addEventListener('click', function() {
  var element1 = document.querySelector('.chart_daily');
  var element2 = document.querySelector('.chart_weekly');
  var element3 = document.querySelector('.chart_monthly');

  // Change display property to "block" (or any other valid value)
  element1.style.display = 'grid';
  element2.style.display = 'none';
  element3.style.display = 'none';

  

});}
if (document.getElementById('weekly_btn')) {
document.getElementById('weekly_btn').addEventListener('click', function() {
  var element1 = document.querySelector('.chart_weekly');
  var element2 = document.querySelector('.chart_daily');
  var element3 = document.querySelector('.chart_monthly');

  // Change display property to "block" (or any other valid value)
  element1.style.display = 'grid';
  element2.style.display = 'none';
  element3.style.display = 'none';

  

});}
if (document.getElementById('monthly_btn')) {
document.getElementById('monthly_btn').addEventListener('click', function() {
  var element1 = document.querySelector('.chart_monthly');
  var element2 = document.querySelector('.chart_weekly');
  var element3 = document.querySelector('.chart_daily');

  // Change display property to "block" (or any other valid value)
  element1.style.display = 'grid';
  element2.style.display = 'none';
  element3.style.display = 'none';
});}

 //////////////////////end////////////////
////////////////YT_JS_BOX_STATS/////////////////////////
/*
  var yt_followers = 222222;
  var yt_likes =111;
  var yt_views =999;
  var yt_followers_w = 2222223;
  var yt_likes_w =1113;
  var yt_views_w =9993;
  var yt_followers_m = 2222224;
  var yt_likes_m =1114;
  var yt_views_m =9994;

document.getElementById('yt_followers').textContent = yt_followers;
document.getElementById('yt_likes').textContent = yt_likes;
document.getElementById('yt_views').textContent = yt_views;
document.getElementById('yt_followers_w').textContent = yt_followers_w;
document.getElementById('yt_likes_w').textContent = yt_likes_w;
document.getElementById('yt_views_w').textContent = yt_views_w;
document.getElementById('yt_followers_m').textContent = yt_followers_m;
document.getElementById('yt_likes_m').textContent = yt_likes_m;
document.getElementById('yt_views_m').textContent = yt_views_m;*/
////////////////END/////////////////////////
  }, [userState]);


  useEffect(() => {
    //var weekChart_fl = new ApexCharts(document.querySelector("#weekChart_fl"), weekOptions_fls);
    //weekChart_fl.render();
  }, [weekOptions_fls])

  /*function fbInit() {
    window.fbAsyncInit = () => {
      window.FB.init({
          appId            : '639014718039079',
          autoLogAppEvents : true,
          xfbml            : true,
          version          : 'v16.0'
      });
    };
    (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) { return; }
        js = d.createElement(s); js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js";
        js.crossorigin="anonymous";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }*/
  /*function getLogin() {
    if (window.FB) {
      window.FB.getLoginStatus(function (r) {
        if (r.status === 'connected') {
          setUserToken(r.authResponse.accessToken);
          setUserState(r.authResponse);
          alert(`Hi ${r.authResponse.userID}`);
        } else {
          alert("You must login first.");
        }
      })
    }
  }*/
  function fblogin() {
    if (window.FB) {
      window.FB.login(function(response) {
        if (response.authResponse) {
        console.log('Welcome!  Fetching your information.... ');
        window.FB.api('/me', function(response) {
          console.log('login response');
          console.log(response);
          setUserState(response);
          fbToken();
        });
        } else {
        console.log('User cancelled login or did not fully authorize.');
        }
      }, {scope: 'public_profile, email, pages_show_list', return_scopes: true});
    } else {
      console.log("window.FB undef");
    }
  }
  function fbToken() {
    if (window.FB) {
      window.FB.getLoginStatus(function (r) {
        if (r.status === 'connected') {
          console.log(r);
          setUserToken(r.authResponse.accessToken)
        }
      })
    }
  }
  
  function fbRetrievePageMetrics() {
    if (window.FB) {
      window.FB.api(`/${userState.id}/posts`, 'get', {access_token: userToken, summary: true}, function (response) {
        console.log(response);
        console.log(userState.id);
        console.log(userToken);
      });
      //https://graph.facebook.com/PAGE_ID/insights?metric=page_daily_follows_unique&access_token=ACCESS_TOKEN
    } else {
      console.log("window.FB undef");
    }
  }

  function fbGetPages() {
    if (window.FB) {
      window.FB.api(`/${userState.id}/accounts`,'get',{access_token: userToken}, function (response) {
        console.log(response);
        countFbFollowers(response.data)
        return response.data;
      })
    }
  }

  function countFbFollowers(pageIds) {
    if (window.FB) {
      let followers = []
      let views = []
      let likes = []
      let pageNames = []
      pageIds.forEach((page) => {
        window.FB.api(`/${page.id}/`,'get',{access_token: page.access_token, fields: 'followers_count,fan_count,new_like_count,rating_count,talking_about_count,were_here_count'}, function (response) {
          console.log(response);
          let newData = {...pageData};
          followers.push(response.followers_count);
          views.push(response.were_here_count);
          likes.push(response.fan_count);
          pageNames.push(page.name);
          newData.fb_followers = followers.reduce((a, b) => a + b, 0);
          newData.fb_views = views.reduce((a, b) => a + b, 0);
          newData.fb_likes = likes.reduce((a, b) => a + b, 0);
          setPageData(newData);

          

          let weekOptions_fl = {
            series: [{data: followers}],
            chart: {type: 'bar', height: 350, toolbar:{show:false},
          },
          colors:["#cc3c43","#367952","#f5b74f"],
          plotOptions: {
            bar: {
              distributed: true,
              borderRadius: 4,
              horizontal: false,
              columnWidth:'40%',
            }
          },
          dataLabels: {
            enabled: false
          },
          legend:{
            show:false
          },
          xaxis: {
            categories: pageNames,
          },
          yaxis:{
            title:{
                text: "Count"
            }
          }
          };

          setWeekOptions_fls(weekOptions_fl);

          document.querySelector("#weekChart_fl").innerHTML = '';
          var weekChart_fl = new ApexCharts(document.querySelector("#weekChart_fl"), weekOptions_fl);
          weekChart_fl.render();

          let weekOptions_vw = {
            series: [{data: views}],
            chart: {type: 'bar', height: 350, toolbar:{show:false},
          },
          colors:["#cc3c43","#367952","#f5b74f"],
          plotOptions: {
            bar: {
              distributed: true,
              borderRadius: 4,
              horizontal: false,
              columnWidth:'40%',
            }
          },
          dataLabels: {
            enabled: false
          },
          legend:{
            show:false
          },
          xaxis: {
            categories: pageNames,
          },
          yaxis:{
            title:{
                text: "Count"
            }
          }
          };

          document.querySelector("#weekChart_vw").innerHTML = '';
          var weekChart_fl = new ApexCharts(document.querySelector("#weekChart_vw"), weekOptions_fl);
          weekChart_fl.render();

          let weekOptions_likes = {
            series: [{data: likes}],
            chart: {type: 'bar', height: 350, toolbar:{show:false},
          },
          colors:["#cc3c43","#367952","#f5b74f"],
          plotOptions: {
            bar: {
              distributed: true,
              borderRadius: 4,
              horizontal: false,
              columnWidth:'40%',
            }
          },
          dataLabels: {
            enabled: false
          },
          legend:{
            show:false
          },
          xaxis: {
            categories: pageNames,
          },
          yaxis:{
            title:{
                text: "Count"
            }
          }
          };

          document.querySelector("#weekChart_likes").innerHTML = '';
          var weekChart_fl = new ApexCharts(document.querySelector("#weekChart_likes"), weekOptions_fl);
          weekChart_fl.render();
        })
      });
    }
  }
  return (
    <div>
      {!userToken &&
      <main className="main-container auth-card">
        <div className="main-cards">
          <div className="card">
            <div className="card-inner">
              <span className="text-blue ">Facebook authorization required to view analytics.</span>

              <button onClick={fblogin}>Login with Facebook</button>
            </div>
          </div>
        </div>
      </main>}
      {userToken &&
        <div>
          <div className="main-title">
            <p className="font-weight-bold">FACEBOOK</p>
            <button id="expend_btn">expand</button>
            <button id="hide_btn">hide</button>
          </div>
          <div className="main-title">
            <p className="">Welcome, {userState && userState.name}</p>
          </div>

          <div className="main-cards">
            <div className="card">
              <div className="card-inner">
                <p className="text-primary">TOTAL FOLLOWERS</p>
                <span className="material-icons-outlined text-blue">groups</span>
              </div>
              <span
                id="fb_followers"
                className="text-primary font-weight-bold"
              >{pageData && pageData.fb_followers}</span>
            </div>

            <div className="card">
              <div className="card-inner">
                <p className="text-primary">TOTAL VIEWS</p>
                <span className="material-icons-outlined text-blue">movie</span>
              </div>
              <span id="fb_views" className="text-primary font-weight-bold">{pageData && pageData.fb_views}</span>
            </div>

            <div className="card">
              <div className="card-inner">
                <p className="text-primary">TOTAL LIKES</p>
                <span className="material-icons-outlined text-blue">thumb_up</span>
              </div>
              <span id="yt_likes" className="text-primary font-weight-bold">{pageData && pageData.fb_likes}</span>
            </div>
          </div>

          <div className="card_extra">
            <div className="card">
              <div className="card-inner">
                <p className="text-primary">WEEKLY FOLLOWERS</p>
                <span className="material-icons-outlined text-blue">groups</span>
              </div>
              <span
                id="yt_followers_w"
                className="text-primary font-weight-bold"
              ></span>
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
              <span
                id="yt_followers_m"
                className="text-primary font-weight-bold"
              ></span>
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
          <div className="fltr_btn">
            <button id="daily_btn">weekly</button>
            <button id="weekly_btn">monthly</button>
            <button id="monthly_btn">yearly</button>
          </div>

          <div className="chart_daily">
            <div className="charts-card">
              <p className="chart-title">FOLLOWERS BY PAGE</p>
              {pageFollowerEle}
              <div id="weekChart_fl"></div>
            </div>

            <div className="charts-card">
              <p className="chart-title">VIEWS BY PAGE</p>
              {pageViewerEle}
              <div id="weekChart_vw"></div>
            </div>

            <div className="charts-card">
              <p className="chart-title">LIKES BY PAGE</p>
              {pageLikeEle}
              <div id="weekChart_likes"></div>
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
        </div>
      }
    </div>
  );
}
export default Facebook;