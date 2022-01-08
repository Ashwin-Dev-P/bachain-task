import React, { Component } from 'react'
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto'
export default class LoansMetrics extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: {
                labels: ["Party A", "Party B", "Party C"],
                datasets: [
                    {
                        label: "loans owners",
                        data: [
                            8, 6, 4
                        ],
                        backgroundColor: [
                            "orange",
                            "blue",
                            "purple",
                        ],
                        barThickness: 20,
                    }
                ]
            },

            options: {
                plugins: {
                    legend: {
                        display: false,

                    },
                    layout: {
                        padding: {
                            left: 50,
                        }
                    },
                    base: {

                    }
                },
                maintainAspectRatio: true,
            }

        }
    }



    render() {
        return (
            <div className='row myDiv shadow p-3 mb-5 bg-white rounded'>
                Loan metrics


                <Bar
                    data={this.state.chartData}
                    options={this.state.options}
                />
            </div>
        )
    }
}
