import React, { Component } from 'react'
import CompanyInformation from './CompanyInformation'
import LoansMetrics from './LoansMetrics'
export default class Main extends Component {
    render() {
        return (
            <div>
                <main className='container'>

                    <div className='row'>
                        <div className='col-xs-12' >
                            <CompanyInformation />
                        </div>
                        <div className='col-xs-12'>
                            <LoansMetrics />

                        </div>
                    </div>



                </main>

            </div>
        )
    }
}
