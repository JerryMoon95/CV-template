$(document).ready(function(){
  
var langs = Highcharts.chart('programing-lang', {
    chart: {
        backgroundColor: {
            linearGradient: [0, 0, 500, 500],
            stops: [
                [0, 'rgb(255, 255, 255)'],
                [1, 'rgb(230, 230, 230)']
            ]
        },
        type: 'column'
    },
    title: {
        text: 'Lenguajes de Programación'
    },
    xAxis: {
        type: 'category'
    },
    yAxis: {
        title: {
            text: 'Conocimiento comparado'
        }
    },
    series: [{
      name: 'Lenguajes',
      colorByPoint: true,
      data: [{
          name: 'Python',
          y: 40,
          drilldown: 'Python',
          color: '#000'
      }, {
          name: 'Java',
          y: 60,
          drilldown: 'Java'
      }, {
          name: 'M',
          y: 40,
          drilldown: 'M'
      }, {
          name: 'C#',
          y: 30,
          drilldown: 'C#'
      }, {
          name: 'Javascript',
          y: 100,
          drilldown: 'Javascript'
      }, {
          name: 'PHP',
          y: 80,
          drilldown: 'PHP'
      },{
          name: 'Visual Basic',
          y: 70,
          drilldown: 'VisualBasic'
      },{
          name: 'C++',
          y: 30,
          drilldown: 'C++'
      },{
          name: 'HTML5+CSS3',
          y: 90,
          drilldown: 'HTML5+CSS3'
      }]
  }]
});


// 

var frameworks = Highcharts.chart('frameworks', {
  chart: {
    backgroundColor: {
        linearGradient: [0, 0, 500, 500],
        stops: [
            [0, 'rgb(255, 255, 255)'],
            [1, 'rgb(230, 230, 230)']
        ]
    },
      plotBackgroundColor: null,
      plotBorderWidth: 0,
      plotShadow: false
  },
  title: {
      text: '<br><br>Frameworks',
      align: 'center',
      verticalAlign: 'top',
      y: 40
  },
  tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
  plotOptions: {
      pie: {
          dataLabels: {
              enabled: true,
              distance: -50,
              style: {
                  fontWeight: 'bold',
                  color: 'white'
              }
          },
          startAngle: -90,
          endAngle: 90,
          center: ['50%', '75%']
      }
  },
  series: [{
      type: 'pie',
      name: 'Frameworks',
      innerSize: '50%',
      data: [
          ['NodeJs',      32],
          ['Materialize', 30],
          ['Boostrap',    25],
          ['Jquery',      15],
          ['Laravel',     8]
      ]
  }]
});


var sgbd = Highcharts.chart('sgbd', {
  chart: {
    backgroundColor: {
        linearGradient: [0, 0, 500, 500],
        stops: [
            [0, 'rgb(255, 255, 255)'],
            [1, 'rgb(230, 230, 230)']
        ]
    },
      plotBackgroundColor: null,
      plotBorderWidth: 0,
      plotShadow: false
  },
  title: {
      text: '<br><br>Gestores de Bases de datos',
      align: 'center',
      verticalAlign: 'top',
      y: 40
  },
  tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
  plotOptions: {
      pie: {
          dataLabels: {
              enabled: true,
              distance: -50,
              style: {
                  fontWeight: 'bold',
                  color: 'white'
              }
          },
          startAngle: -90,
          endAngle: 90,
          center: ['50%', '75%']
      }
  },
  series: [{
      type: 'pie',
      name: 'SGBD',
      innerSize: '50%',
      data: [
          ['MongoDB',       32],
          ['MySql',         30],
          ['Sql Server',    25]
      ]
  }]
});


var languages = Highcharts.chart('languages', {
  chart: {
    backgroundColor: {
        linearGradient: [0, 0, 500, 500],
        stops: [
            [0, 'rgb(255, 255, 255)'],
            [1, 'rgb(230, 230, 230)']
        ]
    },
      type: 'bar'
  },
  title: {
      text: 'Idiomas'
  },
  xAxis: {
      categories: ['Ingles', 'Español']
  },
  yAxis: {
      title: {
          text: 'Idiomas'
      }
  },
  series: [{
      name: 'Hablado',
      data: [6, 10],
      color: '#DC3B0C'
  }, {
      name: 'Escrito',
      data: [8, 10],
      color: '#0E5F8B'
  },{
      name: 'Escuchado',
      data: [5, 10],
      color: '#DCA30C'
  }]
});


});