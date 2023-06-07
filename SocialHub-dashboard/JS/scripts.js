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
  weekChart_fl.render();

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
  weekChart_vw.render();


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


  var montlyOptions_fl_linear = {
    series: [{
      name: 'YouTube',
    data: [59, 47, 34, 62, 74, 41, 28, 51, 66, 22, 55, 78, 37, 72, 23, 68, 26, 44, 31, 57, 79, 25, 43, 64, 53, 36, 21, 48, 76, 30, 69]
  }],
    chart: {
    type: 'area',
    height: 350,
    toolbar:{
        show:false
    },
  },
  colors:[
    
    "#f5b74f"
  ],
  plotOptions: {
    
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth'
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
var monthChart_fl_linear = new ApexCharts(document.querySelector("#monthChart_fl_linear"), montlyOptions_fl_linear);
monthChart_fl_linear.render();

var montlyOptions_vw_linear = {
  series: [{
    name: 'YouTube',
  data: [59, 47, 34, 62, 74, 41, 28, 51, 66, 22, 55, 78, 37, 72, 23, 68, 26, 44, 31, 57, 79, 25, 43, 64, 53, 36, 21, 48, 76, 30, 69]
}],
  chart: {
  type: 'area',
  height: 350,
  toolbar:{
      show:false
  },
},
colors:[
  
  "#f5b74f"
],
plotOptions: {
  
},
dataLabels: {
  enabled: false
},
stroke: {
  curve: 'smooth'
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
var monthChart_vw_linear = new ApexCharts(document.querySelector("#monthChart_vw_linear"), montlyOptions_vw_linear);
monthChart_vw_linear.render();

var montlyOptions_likes_linear = {
  series: [{
    name: 'YouTube',
  data: [59, 47, 34, 62, 74, 41, 28, 51, 66, 22, 55, 78, 37, 72, 23, 68, 26, 44, 31, 57, 79, 25, 43, 64, 53, 36, 21, 48, 76, 30, 69]
}],
  chart: {
  type: 'area',
  height: 350,
  toolbar:{
      show:false
  },
},
colors:[
  
  "#f5b74f"
],
plotOptions: {
  
},
dataLabels: {
  enabled: false
},
stroke: {
  curve: 'smooth'
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
var monthChart_likes_linear = new ApexCharts(document.querySelector("#monthChart_likes_linear"), montlyOptions_likes_linear);
monthChart_likes_linear.render();

var yearlyOptions_likes_linear = {
  series: [{
    name: 'YouTube',
  data: [1000,2000,3000,4000,5000,6000,7000,8000,9000,10000,11000,12000]
}],
  chart: {
  type: 'area',
  height: 350,
  toolbar:{
      show:false
  },
},
colors:[
  
  "#f5b74f"
],
plotOptions: {
  
},
dataLabels: {
  enabled: false
},
stroke: {
  curve: 'smooth'
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
var yearChart_likes_linear = new ApexCharts(document.querySelector("#yearChart_likes_linear"), yearlyOptions_likes_linear);
yearChart_likes_linear.render();


var yearlyOptions_vw_linear = {
  series: [{
    name: 'YouTube',
  data: [1000,2000,3000,4000,5000,6000,7000,8000,9000,10000,11000,12000]
}],
  chart: {
  type: 'area',
  height: 350,
  toolbar:{
      show:false
  },
},
colors:[
  
  "#f5b74f"
],
plotOptions: {
  
},
dataLabels: {
  enabled: false
},
stroke: {
  curve: 'smooth'
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
var yearChart_vw_linear = new ApexCharts(document.querySelector("#yearChart_vw_linear"), yearlyOptions_vw_linear);
yearChart_vw_linear.render();



var yearlyOptions_fl_linear = {
  series: [{
    name: 'YouTube',
  data: [1000,2000,3000,4000,5000,6000,7000,8000,9000,10000,11000,12000]
}],
  chart: {
  type: 'area',
  height: 350,
  toolbar:{
      show:false
  },
},
colors:[
  
  "#f5b74f"
],
plotOptions: {
  
},
dataLabels: {
  enabled: false
},
stroke: {
  curve: 'smooth'
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
var yearChart_fl_linear = new ApexCharts(document.querySelector("#yearChart_fl_linear"), yearlyOptions_fl_linear);
yearChart_fl_linear.render();

var weeklyOptions_fl_linear = {
  series: [{
    name: 'YouTube',
  data: [1000,2000,3000,4000,5000,6000,7000]
}],
  chart: {
  type: 'area',
  height: 350,
  toolbar:{
      show:false
  },
},
colors:[
  
  "#f5b74f"
],
plotOptions: {
  
},
dataLabels: {
  enabled: false
},
stroke: {
  curve: 'smooth'
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
var weekChart_fl_linear = new ApexCharts(document.querySelector("#weekChart_fl_linear"), weeklyOptions_fl_linear);
weekChart_fl_linear.render();

var weeklyOptions_vw_linear = {
  series: [{
    name: 'YouTube',
  data: [1000,2000,3000,4000,5000,6000,7000]
}],
  chart: {
  type: 'area',
  height: 350,
  toolbar:{
      show:false
  },
},
colors:[
  
  "#f5b74f"
],
plotOptions: {
  
},
dataLabels: {
  enabled: false
},
stroke: {
  curve: 'smooth'
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
var weekChart_vw_linear = new ApexCharts(document.querySelector("#weekChart_vw_linear"), weeklyOptions_vw_linear);
weekChart_vw_linear.render();

var weeklyOptions_likes_linear = {
  series: [{
    name: 'YouTube',
  data: [1000,2000,3000,4000,5000,6000,7000]
}],
  chart: {
  type: 'area',
  height: 350,
  toolbar:{
      show:false
  },
},
colors:[
  
  "#f5b74f"
],
plotOptions: {
  
},
dataLabels: {
  enabled: false
},
stroke: {
  curve: 'smooth'
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
var weekChart_likes_linear = new ApexCharts(document.querySelector("#weekChart_likes_linear"), weeklyOptions_likes_linear);
weekChart_likes_linear.render();
  ///////////////////END/////////////////////


////////////////expend_hide_button_animations/////////////////////////
  document.getElementById('expend_btn').addEventListener('click', function() {
    var element1 = document.querySelector('.card_extra');
    var element2 = document.querySelector('#expend_btn');
    var element3 = document.querySelector('#hide_btn');
  
    // Change display property to "block" (or any other valid value)
    element1.style.display = 'grid';
    element2.style.display = 'none';
    element3.style.display = 'inline';

    

  });

 

  document.getElementById('hide_btn').addEventListener('click', function() {
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

 var chart_type=1;
 var chart_period=1;
 document.getElementById('bar_btn').addEventListener('click', function() {
  var element1 = document.querySelector('.chart_daily');
  var element2 = document.querySelector('.chart_weekly');
  var element3 = document.querySelector('.chart_monthly');
  var element4 = document.querySelector('.chart_weekly_l');
  var element5 = document.querySelector('.chart_monthly_l');
  var element6 = document.querySelector('.chart_yearly_l');
  chart_type=1;

  // Change display property to "block" (or any other valid value)
  if(chart_period==1){
  element1.style.display = 'grid';
  element2.style.display = 'none';
  element3.style.display = 'none';
  element4.style.display = 'none';
  element5.style.display = 'none';
  element6.style.display = 'none';
  }
  if(chart_period==2){
    element1.style.display = 'none';
    element2.style.display = 'grid';
    element3.style.display = 'none';
    element4.style.display = 'none';
    element5.style.display = 'none';
    element6.style.display = 'none';
    }
    if(chart_period==3){
      element1.style.display = 'none';
      element2.style.display = 'none';
      element3.style.display = 'grid';
      element4.style.display = 'none';
      element5.style.display = 'none';
      element6.style.display = 'none';
      }
  

});
document.getElementById('lnr_btn').addEventListener('click', function() {
  var element1 = document.querySelector('.chart_daily');
  var element2 = document.querySelector('.chart_weekly');
  var element3 = document.querySelector('.chart_monthly');
  var element4 = document.querySelector('.chart_weekly_l');
  var element5 = document.querySelector('.chart_monthly_l');
  var element6 = document.querySelector('.chart_yearly_l');
  chart_type=2;

  // Change display property to "block" (or any other valid value)
  if(chart_period==1){
  element1.style.display = 'none';
  element2.style.display = 'none';
  element3.style.display = 'none';
  element4.style.display = 'grid';
  element5.style.display = 'none';
  element6.style.display = 'none';
  }
  if(chart_period==2){
    element1.style.display = 'none';
    element2.style.display = 'none';
    element3.style.display = 'none';
    element4.style.display = 'none';
    element5.style.display = 'grid';
    element6.style.display = 'none';
    }
    if(chart_period==3){
      element1.style.display = 'none';
      element2.style.display = 'none';
      element3.style.display = 'none';
      element4.style.display = 'none';
      element5.style.display = 'none';
      element6.style.display = 'grid';
      }
  

});
 document.getElementById('daily_btn').addEventListener('click', function() {
  var element1 = document.querySelector('.chart_daily');
  var element2 = document.querySelector('.chart_weekly');
  var element3 = document.querySelector('.chart_monthly');
  var element4 = document.querySelector('.chart_weekly_l');
  var element5 = document.querySelector('.chart_monthly_l');
  var element6 = document.querySelector('.chart_yearly_l');
  chart_period=1;

  // Change display property to "block" (or any other valid value)
  if(chart_type==1){
  element1.style.display = 'grid';
  element2.style.display = 'none';
  element3.style.display = 'none';
  element4.style.display = 'none';
  element5.style.display = 'none';
  element6.style.display = 'none';
  }
  if(chart_type==2){
    element1.style.display = 'none';
    element2.style.display = 'none';
    element3.style.display = 'none';
    element4.style.display = 'grid';
    element5.style.display = 'none';
    element6.style.display = 'none';
    }
  

});

document.getElementById('weekly_btn').addEventListener('click', function() {
  var element1 = document.querySelector('.chart_weekly');
  var element2 = document.querySelector('.chart_daily');
  var element3 = document.querySelector('.chart_monthly');
  var element4 = document.querySelector('.chart_weekly_l');
  var element5 = document.querySelector('.chart_monthly_l');
  var element6 = document.querySelector('.chart_yearly_l');
  chart_period=2;

  // Change display property to "block" (or any other valid value)
  if(chart_type==1){
  element1.style.display = 'grid';
  element2.style.display = 'none';
  element3.style.display = 'none';
  element4.style.display = 'none';
  element5.style.display = 'none';
  element6.style.display = 'none';
  }
  if(chart_type==2){
    element1.style.display = 'none';
    element2.style.display = 'none';
    element3.style.display = 'none';
    element4.style.display = 'none';
    element5.style.display = 'grid';
    element6.style.display = 'none';
    }
  
  

});

document.getElementById('monthly_btn').addEventListener('click', function() {
  var element1 = document.querySelector('.chart_monthly');
  var element2 = document.querySelector('.chart_weekly');
  var element3 = document.querySelector('.chart_daily');
  var element4 = document.querySelector('.chart_weekly_l');
  var element5 = document.querySelector('.chart_monthly_l');
  var element6 = document.querySelector('.chart_yearly_l');
  chart_period=3;

  // Change display property to "block" (or any other valid value)
  if(chart_type==1){
  element1.style.display = 'grid';
  element2.style.display = 'none';
  element3.style.display = 'none';
  element4.style.display = 'none';
  element5.style.display = 'none';
  element6.style.display = 'none';
  }
  if(chart_type==2){
    element1.style.display = 'none';
    element2.style.display = 'none';
    element3.style.display = 'none';
    element4.style.display = 'none';
    element5.style.display = 'none';
    element6.style.display = 'grid';
    }
});

 //////////////////////end////////////////
////////////////YT_JS_BOX_STATS/////////////////////////
  var yt_followers = 111;
  var yt_likes =222;
  var yt_views =333;
  var yt_followers_w = 1111;
  var yt_likes_w =2222;
  var yt_views_w =3333;
  var yt_followers_m = 11111;
  var yt_likes_m =22222;
  var yt_views_m =33333;


document.getElementById('yt_followers').textContent = yt_followers;
document.getElementById('yt_likes').textContent = yt_likes;
document.getElementById('yt_views').textContent = yt_views;
document.getElementById('yt_followers_w').textContent = yt_followers_w;
document.getElementById('yt_likes_w').textContent = yt_likes_w;
document.getElementById('yt_views_w').textContent = yt_views_w;
document.getElementById('yt_followers_m').textContent = yt_followers_m;
document.getElementById('yt_likes_m').textContent = yt_likes_m;
document.getElementById('yt_views_m').textContent = yt_views_m;


////////////////END/////////////////////////
