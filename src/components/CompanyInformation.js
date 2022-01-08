import React, { Component } from 'react'
import MainMetrics from './MainMetrics'
import PastActivity from './PastActivity'
export default class CompanyInformation extends Component {
    render() {
        return (
            <div className='row myDiv shadow mb-5 bg-white rounded'>
                <div className='col-xs-6 col-md-6 col-lg-8 p-3'>
                    <MainMetrics />
                </div>
                <div className='col-xs-6 col-md-6 col-lg-4 left-border p-3'>
                    <PastActivity />
                </div>

            </div>
        )
    }
}
