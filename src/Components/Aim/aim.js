import React, { Component } from 'react';
import './style.css'
class Aim extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='AimMain'>
                <div className='aim'>
                    <div className='ainNow'>
                        <h1>Who We Are</h1>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Aim;