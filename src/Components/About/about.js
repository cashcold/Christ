import React, { Component } from 'react';
import './style.css'
class About extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='aboutMain'>
                <div className='about'>
                    <div className='aboutChrsit'>
                        <h1 className='animate__animated animate__wobble animate__slower'>ABOUT THE CHRIST MIRACLE CHURCH INT </h1>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default About;