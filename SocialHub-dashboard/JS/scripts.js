//SIDEBAR TOGGLE

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

//charts

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


