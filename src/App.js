import React, { Component } from 'react';
import './App.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './Components/Navbar/navbar';
import Home from './Components/Home/home';
// import Footer from './Components/Footer/footer';
// import AboutUs from './Components/About-us/about';
import Support from './Components/Support/support'
import About from './Components/About/about';
import Aim from './Components/Aim/aim';
class MainApp extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         }
    }
    render() { 
        return ( 
            <Router>
                <div className='mainApp animate__animated animate__zoomIn animate__slowerss'>
                    <div className='container'>
                        <Navbar/>
                        <div className='router'>
                           <Switch>
                              <Route path='/' exact component={Home}/> 
                              <Route path='/about' component={About}/>
                              <Route path='/contact' component={Support}/>
                              <Route path='/aim' component={Aim}/>
                           </Switch>
                        </div>
                        {/* <Footer/> */}
                    </div>
                </div>
            </Router>
         );
    }
}
 
export default MainApp;