import React, { Component } from 'react'
import Loading from './Loading'

export default class MainMetrics extends Component {

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
        var total_value = 0;
        for (var i = 0; i < data.length; i++) {
            total_value = total_value + data[i].value;
        }


        var final_data = []
        for (var i = 0; i < data.length; i++) {
            var percent = (data[i].value * 100) / total_value;

            var processed_data = {
                "name": data[i].name,
                "value": data[i].value,
                "percent": Number(percent),
            }
            final_data.push(processed_data)

        }


        this.setState({
            loading: false,
            total_value: total_value,
            data: final_data,
        })
    }


    render() {
        console.log(this.state.data)
        return (
            <div id='main-metrics-div'>
                <div className='row'>
                    <div className='col-xs-12 col-md-8'>
                        <h3 className='sub-heading'>Your company information</h3>
                        <span className='sub-text'>Main metrics</span>
                    </div>
                    <div className='col-xs-12 col-md-4'>
                        <div className='row'>
                            <div className='col-xs-12 col-md-6'>

                                <div>
                                    Total Shares
                                </div>
                                <div>
                                    {this.state.loading === true ? <Loading /> : <span style={{ color: "blue" }}>{this.state.total_value}</span>}
                                </div>
                            </div>
                            <div className='col-xs-12 col-md-6'>
                                <div>
                                    Total Value
                                </div>
                                <div>
                                    {this.state.loading === true ? <Loading /> : <span style={{ color: "blue" }}>$ {this.state.total_value}</span>}
                                </div>

                            </div>
                        </div>

                    </div>
                </div>



                <div className='row' id='graph1'>
                    {this.state.loading === true ? <Loading /> :

                        <>
                            {this.state.data.map((datum) =>
                            (
                                <div key={datum.name}>

                                    <meter className='meter' value={datum.percent} max="100"></meter>
                                </div>
                            )
                            )}
                        </>

                    }


                </div>


            </div>
        )
    }
}
