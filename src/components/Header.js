import React, { Component } from 'react'
////CSS
//import { Row, Col } from 'react-bootstrap'

export default class Header extends Component {
    render() {
        return (
            <div>
                <header className="">
                    <div className='row'>
                        <div className='col-xs-12 col-md-6' id='my-title'>
                            <div className='row'>
                                <div className='col-xs-12'>
                                    <span>BAChain</span>
                                </div>
                                <div className='col-xs-12'>
                                    <span id='transparency-text'>Transparency</span>
                                </div>
                            </div>



                        </div>
                        <div className='col-xs-12 col-md-6' id='username-div'>

                            <img src="https://thispersondoesnotexist.com/image" className='circular-image'></img>
                            <span>username</span>

                        </div>



                    </div>



                </header>
            </div>
        )
    }
}
