import React, { Component } from 'react';
import {TimelineLite} from 'gsap'
import {gsap} from 'gsap'
import{ScrollTrigger} from 'gsap/ScrollTrigger'
import 'animate.css'
import './style.css'
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            reffer: ''
         }
    }
    componentDidMount(){
        const WelcomeHome  = ()=>{
           const welcome =  document.querySelector('.wayImg2 ')
           welcome.addEventListener('click',()=>{
               window.location='/contact'
           })
        }
        WelcomeHome()


        let SlideIndex = 0;
        const SlideDiv = ()=>{
            var i ;
            var slideDiv = document.querySelectorAll('.boxMe')
            const HomeAnitionh1 = document.querySelectorAll('.box-1-items h1')
            const HomeAnitionh4 = document.querySelectorAll('.box-1-items h4')
            const HomeAnitionA = document.querySelectorAll('.box-1-items a')
            
            const SlideDivTl = new TimelineLite()
            SlideDivTl.from(slideDiv,{duration: 1, x: '-500'})
            SlideDivTl.from(HomeAnitionh1,{opacity:0, duration: 2,x:'-400'})
            SlideDivTl.from(HomeAnitionh4,{opacity:0, duration: 2,x:'400'})
            SlideDivTl.from(HomeAnitionA,{opacity:0, duration: 2,x:'-400'})

            var dot = document.querySelectorAll('.dot')
            for(i = 0; i < slideDiv.length; i++){
                slideDiv[i].style.display='none'
            }
            SlideIndex++;
            if(SlideIndex > slideDiv.length){SlideIndex = 1}
            for(i = 0; i < dot.length; i++){
                dot[i].className = dot[i].className.replace(" active", "");
            }
            slideDiv[SlideIndex-1].style.display= "block";

            setTimeout(SlideDiv,8000)

        }
        SlideDiv()

        
        
        
    }
    render() { 
        return ( 
            <div className='mainHome animate__animated animate__zoomIn animate__slower'>
                <div className='homeNow'>
                    <div className='Home'>
                        <div className='box-1 boxMe '>
                            <div className='box-1-items'>
                                <h1 ><span style={{color: 'white'}}>Behold, I stand at the door, and knock:</span></h1>
                                <h4  style={{color: 'white'}}> if any man hear my voice, and open the door</h4>
                                <a style={{color: 'white', font: '30px'}} href='/' className='homeStyleAnimate btn  getStartBtn'>I will come in to him, and will sup with him, and he with me.</a>
                            </div>
                        </div>
                        <div className='box-5 boxMe '>
                            <div className='box-1-items'>
                                <h1 ></h1>
                            </div>
                        </div>
                        <div className='box-7 boxMe '>
                            <div className='box-1-items'>
                                <h1 style={{color: 'white'}}>MISSION AND <span style={{color: 'red'}}>EVANLISM</span><br/> IS THE HEART BEAT OF GOD</h1>
                            </div>
                        </div>
                        <div className='box-6 boxMe '>
                            <div className='box-1-items'>
                                <h1 ></h1>
                            </div>
                        </div>
                        <div className='box-2 boxMe' >
                            <div className='box-1-items'>
                                <h1></h1>
                            </div>
                        </div>
                        <div className='box-8 boxMe' >
                            <div className='box-1-items'>
                                <h1 style={{color: 'white'}}>OUTREACH</h1>
                            </div>
                        </div>
                        <div className='box-9 boxMe' >
                            <div className='box-1-items'>
                                <h1 ></h1>
                            </div>
                        </div>
                        <div className='box-3 boxMe '>
                            <div className='box-1-items'>
                                <h1 ><span style={{color: 'blue'}}></span></h1>
                                <h4  style={{color: 'white'}}></h4>
                            </div>
                        </div>
                        <div className='box-4 boxMe '>
                            <div className='box-1-items'>
                                <h1 ><span style={{color: 'white'}}>WE BELIVE IN</span></h1>
                            </div>
                        </div>
                        <div className='box-10 boxMe' >
                            <div className='box-1-items'>
                                <h1 ></h1>
                            </div>
                        </div>
                        <div className='dot'></div>
                        <div className='dot'></div>
                    </div>

                    <div className='letTalk'>
                        <div className='h1Title'>
                            <h1>WHO IS JESUS</h1>
                        </div>
                        <div className='videoSlot'>
                            <div style={{width: '100%', height: "500px"}}><iframe src="https://player.vimeo.com/video/273563190?autoplay=1&color=666666&title=0&byline=0&portrait=0" style={{width: '100%', height: "100%"}}  frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
                        </div>
                    </div>
                    <div className='aboutJesus'>
                        <div className='masterJesus'>
                            <div className='master'>
                                <h1>JESUS</h1>
                                <p>The world knows that 2,000 years ago a man named Jesus came from the town of Nazareth in what is now called Israel. He traveled about the region and gained a large following. After a few years, the religious leaders in Jerusalem falsely accused him of crimes and handed him over to the Roman authorities. They executed him by nailing him to a cross. A short time later, his followers preached in the name of Jesus Christ, whom they said rose from the dead. More and more followers were added to this movement which has become the Christian church of today.</p>
                                <p>These are the facts upon which even the greatest skeptic will agree. But there is so much more to Jesus than that. Where he came from, what he did on earth, what he can do for us now is all revealed in the Bible. This book contains the only record of Jesus and was written by the generation of people who heard him teach and saw his deeds. Here is what the Bible teaches us about Jesus Christ:</p>
                            </div>
                            <div className='aboutJesus'>
                               <div className='praiseJesus'>
                                    <div className='aboutMaster'>
                                        <img src={require('../../pic/Lord-Jesus-1.jpg')}/>
                                        <h4>1. JESUS IS GOD</h4>
                                        <p>John wrote about Him: In the beginning was the Word [poetic description of Jesus], and the Word was with God and the Word was God (John 1:1 ESV). He created the world and all that is in it (John 1:3). The religious leaders of his time understood that Jesus claimed to be God (John 5:17-18). Paul wrote that when Jesus died, the Father revealed to the entire world that He was God (Philippians 2:5-11).</p>
                                    </div>
                                    <div className='aboutMaster'>
                                        <img src={require('../../pic/how-will-the-Lord-Jesus-return.jpg')}/>
                                        <h4>2. JESUS IS THE SON OF GOD</h4>
                                        <p>According to the Bible, “Son of God” means: (1) He is fully God. (2) He is one of three persons who together make up the One God. This concept is called the “Trinity.”<br/>The religious leaders of Jesus’ time understood this concept: This was why the Jews were seeking all the more to kill him, because not only was he breaking the Sabbath, but he was even calling God his own Father, making himself equal with God. (John 5:18 ESV)</p>
                                    </div>
                                    <div className='aboutMaster'>
                                        <img src={require('../../pic/Jesus-teaches-peter-to-forgive-others-seventy-times-seven.jpg')}/>
                                        <h4>3. JESUS BECAME HUMAN THROUGH THE VIRGIN BIRTH.</h4>
                                        <p>The eternal Son of God already existed in heaven (John 17:5). Through the power of the Holy Spirit (Matthew 1:20), He was born as a human being, who was then named Jesus (Matthew 1:25). To demonstrate that Jesus was not a mere man (Colossians 2:9), God chose a virgin to give birth to Him (Luke 1:34-35).</p>
                                    </div>
                                    <div className='aboutMaster'>
                                        <img src={require('../../pic/The-Parable-of-the-Lost-Sheep.jpg')}/>
                                        <h4>4. JESUS CHRIST IS THE SAVIOR OF THE WORLD.</h4>
                                        <p>Anytime we disobey God is called sin. The penalty for sin is death, but God in his love wants us to live. Therefore, he sent the promised Messiah (also called Christ) to save the world (John 1:41). The Son of God, Jesus Christ, came to earth to die in our place. Because He lived a life without sin, only He was qualified to pay for our sins by His death on a cross. He then demonstrated His power over death when He rose from the grave three days later. Only through Jesus can our sins can be forgiven and we can come to God (Acts 4:12). Jesus Christ is the Savior of everyone in the world (John 3:16).</p>
                                    </div>
                                    <div className='aboutMaster'>
                                        <img src={require('../../pic/maxresdefault (1).jpg')}/>
                                        <h4>5. JESUS PERFORMS MIRACLES.</h4>
                                        <p>All through his time on earth, Jesus performed miracles. He healed the sick (Matthew 8:16 among many other instances), controlled the weather (Mark 4:39), multiplied food (Matthew 14:14-21), and provided money when needed (Matthew 17:24-27). Even after leaving the earth, He still does miracles in people’s lives (Acts 3:12-16).</p>
                                    </div>
                                    <div className='aboutMaster'>
                                        <img src={require('../../pic/guérison-lépreux-678x381.jpg')}/>
                                        <h4>6. JESUS CHANGES LIVES.</h4>
                                        <p>People who followed Jesus turned away from their sins. He cast seven demons out of Mary Magdalene (Luke 8:2) and she became a devoted follower who told others that Jesus had risen from the dead (John 20:16). Zaccheus, a tax collector, repaid people whom he cheated when collecting taxes and gave half of everything else to the poor (Luke 19:1-10). When followers were filled with the power of the Holy Spirit, they were able to declare the message of Jesus, perform miracles, and live free from sin (Luke 10:1-20).<br/>For nearly 2,000 years, Jesus Christ has been changing the lives of people all over the world. Therefore, if anyone is in Christ, he is a new creation. The old has passed away; behold, the new has come (2 Corinthians 5:17 ESV). He can change your life as well. Jesus will deliver you from sin’s addiction (Romans 6:22), renew your mind (Romans 12:2), and heal your hurts (2 Thessalonians 2:16-17).</p>
                                    </div>
                                    <div className='aboutMaster'>
                                        <img src={require('../../pic/8DF5DF25-0526-4C28-9CCC-ABF92B4A368D.jpeg')}/>
                                        <h4>7. JESUS LIVES IN HEAVEN AT FATHER GOD’S RIGHT HAND.</h4>
                                        <p>After Jesus rose from the dead, He ascended to heaven to the place where he was before becoming human. From there he is able to hear our prayers (Romans 8:34).</p>
                                    </div>
                                    <div className='aboutMaster'>
                                        <img src={require('../../pic/unnamed.jpg')}/>
                                        <h4>8. JESUS WILL RETURN TO JUDGE ALL HUMANITY.</h4>
                                        <p>While he was still on this earth, Jesus said, Then will appear in heaven the sign of the Son of Man [a title Jesus used for Himself], and then all the tribes of the earth will mourn, and they will see the Son of Man coming on the clouds of heaven with power and great glory (Matthew 24:30 ESV). When Jesus returns, He will separate those who will live with Him forever in heaven from those who will be punished (Matthew 25:31-33).</p>
                                    </div>
                                    <div className='aboutMaster'>
                                        <img src={require('../../pic/jesus-and-the-lost-sheep.jpg')}/>
                                        <h4>9. JESUS CHRIST WILL RECEIVE YOU IF YOU COME TO HIM.</h4>
                                        <p>Jesus said, Whoever comes to me I will never cast out (John 6:37 ESV). This was why He came to earth—to seek and to save the lost (Luke 19:10 ESV). It does not matter what you have done, Jesus still wants you to come to Him. He said, I have not come to call the righteous but sinners to repentance (Luke 5:32 ESV).</p>
                                    </div>
                               </div>
                            </div>
                        </div>
                    </div>
                    <div className='otherInfo'>
                        <div className='infoReady'>
                            <div className='readyInfo'>
                                <h1>Ready to connect your passion with God’s heart?</h1>
                            </div>
                            <hr/>
                            <div className='otherInfoText'>
                                <p>If you desire to step out in faith and go above and beyond, to be a part of something more than yourself, and to allow God to use you in mighty ways, then we want to help you take the next steps on your journey. It’s time to connect your passion with God’s plan for redemption. This is God’s best for us. We can equip and support you, helping you find the intersection of your passion and God’s heart.</p>
                            </div>
                            <div className='infoWay'>
                                <div className='wayInfo'>
                                    <div className='wayImg wayImg1 forward'>
                                        <img src={require('../../pic/0_Uy3xyzERde8KOp9Q.jpg')}/>
                                        <h3>Your journey continues here!</h3>
                                    </div>
                                    <div className='wayImg wayImg2'>
                                        <img src={require('../../pic/guidance.jpg')}/>
                                        <h3>Not sure? Let us guide you.<div className='fastImg'><img src={require('../../pic/fast-forward.svg')}/></div></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='weBelive'>
                        <div className='belive'>
                            <div className='beliveMe'>
                                <h1>WE BELIVE THE FOLLOWING</h1>
                            </div>
                            <hr/>
                            <div className='both'>
                                <div className='bothA'>
                                    <ul>
                                        <li><p>journey continues</p></li>
                                        <li><p>journey continues</p></li>
                                        <li><p>journey continues</p></li>
                                        <li><p>journey continues</p></li>
                                        <li><p>journey continues</p></li>
                                        <li><p>journey continues</p></li>
                                        <li><p>journey continues</p></li>
                                        <li><p>journey continues</p></li>
                                        <li><p>journey continues</p></li>
                                        <li><p>journey continues</p></li>
                                    </ul>
                                </div>
                                <div className='bothA'>
                                    <ul>
                                        <li><p>journey continues</p></li>
                                        <li><p>journey continues</p></li>
                                        <li><p>journey continues</p></li>
                                        <li><p>journey continues</p></li>
                                        <li><p>journey continues</p></li>
                                        <li><p>journey continues</p></li>
                                        <li><p>journey continues</p></li>
                                        <li><p>journey continues</p></li>
                                        <li><p>journey continues</p></li>
                                        <li><p>journey continues</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='finalMsg'>
                        <div className='lastMsg'>
                            <img src={require('../../pic/IMG-20200120-WA0006.jpg')}/>
                        </div>
                    </div>
                    <div className='finalMsg'>
                        <div className='lastMsg'>
                            <img src={require('../../pic/IMG-20200120-WA0007.jpg')}/>
                        </div>
                    </div>
                </div> 
            </div>
         );
    }
}
 
export default Home;