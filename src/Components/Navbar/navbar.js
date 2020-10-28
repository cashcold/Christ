import React, { Component } from 'react';
import './style.css'
import  'animate.css'
import {TimelineLite} from "gsap"

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            login: false
         }
         
    }
    componentDidMount(){
        if(localStorage.getItem('x-access-token') != null)  {
            this.setState({Login: true})
        }

        

        const ToggleBtn = ()=>{
            const toggleBtn = document.querySelector('.toggleBtn')
            const links = document.querySelector('.linksNow')

            toggleBtn.addEventListener('click',()=>{
                if(links.style.display==='none'){
                    links.style.display='block';
                }
                else{
                    links.style.display='none'
                }
            })
            
        }
        ToggleBtn()

        

        const NavAnmaite = ()=>{
            const toggleLine = document.querySelectorAll('.toggleBtn div')
            const toggleTl = new TimelineLite()
            toggleTl.from(toggleLine,{opacity: 0, duration: 2,ease: "slow(0.7, 0.7, false)", stagger: 0.8,delay: 0.9, x: '-500'})
        }
        NavAnmaite()
    }

    render() { 
       
        return ( 
            <div className='navBar'>
               <div className='container'>
                   <header>
                       <div className='welcomeInfoMain'>
                            <div className='logo animate__animated animate__zoomInDown animate__slower'>
                                <img src={require('../../pic/christImg.jpg')}/>
                                <h1 >THE <span style={{color: 'red'}}>CHRIST</span> MIRACLE  <span style={{color: 'red'}}>CHURCH</span> INT </h1>
                            </div>
                       </div>
                       <nav>
                           <div className='navLinks'>
                               <div className='toggleBtn'>
                                   <div className='lin1'></div>
                                   <div className='lin1'></div>
                                   <div className='lin1'></div>
                                   <div className='lin1'></div>
                               </div>
                              <div className='linksNow'> 
                                <ul className='links animate__animated animate__fadeInTopLeft animate__slower' >
                                    <li><a href='/'>HOME</a></li>
                                    <li><a href='/'>MISSION</a></li>
                                    <li><a href='/aim'>AIM</a></li>
                                    <li><a href='/'>MESSAGE</a></li>
                                    <li><a href='/'>AUDIO</a></li>
                                    <li><a href='/about'>ABOUT</a></li>
                                    <li><a href='/contact'>CONTACT</a></li>
                                </ul>
                              </div>
                           </div>
                       </nav>
                       <marquee className='marqueeText'>
                           <p>The purpose of THE CHRIST MIRACLE CHURCH INT is to enrich and multiply life and hope through disciple-making in the name of Our Lord and Savior Jesus Christ.</p>
                           <p>We wish to invite you and your friends or relatives to join us and worhsip the lord </p>
                           <p>Worhsip with us</p>
                           <p>TUEDAY: BIBLE STUDY, TIME 5:00 PM TO 8:00 PM</p>
                           <p>FRIDAY: PRAYER REVIVAL MEETING, TIME 5:00 PM TO 8:00 PM </p>
                           <p>SUNDAY SERVICE: Comm.9 Breach , TIME 7:30 am TO 11:40 PM</p>
                           <p>SUNDAY SERVICE: Lience Office Breach , TIME 7:00 am TO 11:30 PM</p>
                           <p>Contact-us 0547695813</p>
                           <p>Contact-us 0547300887</p>
                           <p>Join Next Mission Outreach Evanglisim</p>
                           
                       </marquee>
                   </header>
               </div>
            </div>
         );
    }
}
 
export default Navbar;