import React, { Component } from 'react';
import Chart from 'react-apexcharts';

class LineChart extends Component {
    constructor(props) {
        super(props);

        this.state = {
        
          series: [{
            name: 'All Traffic',
            data: [121, 91, 88, 72, 150, 130, 181]
          },{
            name: 'Direct',
            data: [45, 40, 28, 51, 42, 21, 52]
          },{
            name: 'Organic',
            data: [20, 32, 42, 20, 15, 13, 21]
          },{
            name: 'Paid',
            data: [10, 13, 17, 10, 8, 15, 46]
          },{
            name: 'Referral',
            data: [80, 40, 28, 51, 42, 109, 100]
          }, {
            name: ' Social',
            data: [69, 32, 45, 32, 34, 52, 41]
          }],
          
          options: {
          
              grid: {
                row: {
                    colors: ['transparent'],
                },
                column: {
                    colors: ['transparent']
                }
              },
              colors: ['#101B38', '#3EB4E7', '#538BF0', '#6510E8', '#FF29A2', '#FFA132', '#DFE8FB', '#06BCC1'],

            chart: {
              height: 350,
              type: 'area',
              foreColor: 'white'
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              curve: 'smooth'
            },
            xaxis: {
              labels: {
                style: {
                    colors: ['white'],
                    fontColor: 'white'
                }
              },
             
              categories: ["Feb. 1", "Feb. 6th", "Feb. 12th", "Feb. 18th", "Feb. 22nd", "Feb. 26th", "Feb. 28th"],
              axisBorder : {
                  color: 'white'
              },
              axisTicks: {
                  color: 'white'
              }
            },
            tooltip: {
              x: {
                format: 'dd/MM/yy HH:mm'
              },
            },
          },
        
        
        };
      }

    render(){
        return (
             <Chart
            options={this.state.options}
            series={this.state.series}
            type= "area"
            height="325"
            width="100%"        
        />
        );
    };
}


export default LineChart;