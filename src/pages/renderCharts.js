import ApexCharts from 'apexcharts';
const renderCharts = (chartId, data, labels) => {
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

  document.querySelector(chartId).innerHTML = '';
  document.querySelector(`${chartId}_linear`).innerHTML = '';

  renderBarChart(chartId, data, labels);
  renderAreaChart(`${chartId}_linear`, [{ name: 'Series 1', data }], labels);
};
export default renderCharts;