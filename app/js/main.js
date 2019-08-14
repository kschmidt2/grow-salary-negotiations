// adds social class to get social chart
// let element = document.getElementsByClassName("chart-area");
// for(var i = 0; i < element.length; i++)
// {
//     element[i].className += " social";
// }

// bolds the subhead if there is no headline
let subhead = document.getElementsByClassName("chart-subhead"),
    headline = document.getElementById("chart-head");
    if (!headline) {
        for(var i = 0; i < subhead.length; i++) {
            subhead.className += " strong";
        }       
     }

Highcharts.setOptions({
    lang: {
      thousandsSep: ','
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const myChart = Highcharts.chart('chart-container', {
        chart: {
            type: 'column',
            styledMode: true,
            spacingBottom: 25,
            spacingRight: 100,
            spacingLeft: -10
        }, 
        title: {
            text: null
        },
        data: {
            googleSpreadsheetKey: '1YOFW8CaXSuP8niKcC--8j8Vmv9GJVl6-HYzDD7D5GNU'
        },
        // for bar charts only
        plotOptions: {
            series: {
                groupPadding: 0.1,
                stacking: 'normal'
            } 
        },
        legend: {
            align: 'right',
            symbolRadius: 0,
            verticalAlign: 'top',
            x: 10,
            itemMarginTop: -10
        },
        xAxis: {
            labels: {
                style: {
                    whiteSpace: 'nowrap'
                }
            },
            tickLength: 5
        },
        yAxis: {
            title: false,
            labels: {
                useHTML: true,
                overflow: 'allow'
            },
            max: 100
        },
        credits: {
            enabled: false
        },
        tooltip: {
            shadow: false,
            padding: 10,
            shared: true
        },
        responsive: {
            rules: [{
              condition: {
                maxWidth: 500
              },
              chartOptions: {
                chart: {
                  spacingRight: 10
                },
                legend: {
                    align: 'left',
                    x: 0,
                    itemMarginTop: 0
                },
                tooltip: {
                    enabled: false
                }
              }
            }]
        }
    });
});