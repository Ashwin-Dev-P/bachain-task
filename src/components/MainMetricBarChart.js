import React, { Component } from 'react'
import { Bar } from 'react-chartjs-2';
export default class MainMetricBarChart extends Component {

    constructor(props) {
        super(props)





        this.state = {

            loading: true,



        }
    }


    componentDidMount() {

        const mock_json = [
            {
                "name": "Shareholder A",
                "value": 900,
            },
            {
                "name": "Shareholder B",
                "value": 650,
            },
            {
                "name": "Shareholder C",
                "value": 760,
            },
            {
                "name": "Shareholder D",
                "value": 1350,
            },
        ]


        const data = mock_json;


        //get labels, data seperately from the props 

        var labels_array = []
        var data_array = []
        var total_value = 0;
        for (var i = 0; i < data.length; i++) {

            labels_array.push(data[i].name)
            data_array.push(data[i].value)
            total_value = total_value + data[i].value;
        }


        var chartData = {
            labels: labels_array,
            datasets: [
                {
                    label: "loans owners",
                    data: data_array,
                    backgroundColor: [

                        "blue",

                    ],
                    barThickness: 5,
                }
            ]
        }

        var options = {
            //Makes the bar chart horizontal
            indexAxis: 'y',


            plugins: {
                legend: {
                    display: false,

                },


            },
            maintainAspectRatio: true,
            scales: {

                y: {




                    grid: {
                        display: false,
                    },


                },
                x: {

                    min: 0,
                    max: total_value,
                    position: 'top',
                    grid: {
                        display: true,
                    }


                }
            },

        }



        this.setState({
            chartData: chartData,
            options,
            loading: false,
        })

    }


    render() {

        return (
            <div>
                <div className='row' id='graph1'>
                    {this.state.loading === true ? <>Loading...</> :

                        <>
                            <Bar
                                data={this.state.chartData}
                                options={this.state.options}
                            />
                        </>}


                </div>
            </div>
        )
    }
}
