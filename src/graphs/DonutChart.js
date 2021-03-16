import React, { Component } from 'react';
import Chart from 'react-apexcharts';

class DonutChart extends Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [1274, 198, 615, 828, 248, 819, 1544, 1066, 1312],

            options: {
                labels: ["Diplay", "Paid Social", "Email", "Organic", "Social", "Referral", "Direct", "Paid", "Other"],
                plotOptions: {
                    pie: {
                        donut: {

                            labels: {
                                show: true,

                                name: {
                                    show: false,
                                    title: 'Channel Traffic'
                                },
                                value: {
                                    offsetY: -1,
                                    show: true,
                                    fontSize: '36px'
                                },
                                total: {
                                    show: true,
                                    fontWeight: '1000',
                                    fontSize: '32px'
                                },
                                stroke: {
                                    colors: 'transparent'
                                }


                            }

                        }
                    }
                },

                colors: ['#101B38', '#3EB4E7', '#538BF0', '#6510E8', '#FF29A2', '#FFA132', '#DFE8FB', '#06BCC1'],
                chart: {
                    type: 'donut',
                    width: 300,
                    height: 175,
                    foreColor: 'white',
                    margin: 50

                },
                dataLabels: {
                    enabled: false
                },
                legend: {
                    position: 'bottom',


                    itemMargin: {
                        horizontal: 5,
                        vertical: 5
                    },

                },

                title: {
                    text: "Traffic Detail",
                    align: 'center',
                    margin: 50,
                    style: {
                        fontSize: '22px'
                    },
                },



            },


        };
    }

    render() {
        return (
            <Chart
                options={this.state.options}
                series={this.state.series}
                type="donut"
                height="500px"
                width="300px"
            />
        );
    };
}


export default DonutChart;
