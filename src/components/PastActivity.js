import React, { Component } from 'react'
import "bootstrap-icons/font/bootstrap-icons.css";
export default class PastActivity extends Component {


    constructor(props) {
        super(props);

        //mock JSON DATA
        const mock_json = [
            {
                "name": "Company creation",
                "date": "January 1,2022",
                "completed": true,
            },
            {
                "name": "Loans tokenized",
                "date": "February 1,2022",
                "completed": true,
            },
            {
                "name": "Legal status modified",
                "date": "March 1, 2022",
                "completed": true,
            },

        ]

        this.state = {



            activity: mock_json
        }
    }




    render() {

        return (
            <div id='past-activity-div'>
                <h3 className='sub-heading'>Past Activity</h3>
                <hr />
                <div id='past-activity-content-div'>

                    {this.state.activity.map((activity) => (
                        <div key={activity.name} className='past-activity-divs'>
                            <div className='row activity-divs'>
                                <div className='col-xs-2 col-md-2'>

                                    {activity.completed === true ? <><i className="bi bi-check-circle check-btn"></i></> : null}
                                </div>
                                <div className='col-xs-10 col-md-10'>
                                    <div className=''>{activity.name}</div>
                                    <div className='dates'>{activity.date}</div>
                                </div>
                            </div>


                        </div>
                    )

                    )}
                    < div ></div>
                    <div></div>
                    <div></div>
                </div>
            </div >
        )
    }
}
