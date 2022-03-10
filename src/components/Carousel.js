import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Episode1 from '../images/Thumbnails/Episode1.jpg'
import Episode2 from '../images/Thumbnails/Episode2.jpg'
import Episode3 from '../images/Thumbnails/Episode3.jpg'
import Episode4 from '../images/Thumbnails/Episode4.jpg'
import Episode5 from '../images/Thumbnails/Episode5.jpg'
import Episode6 from '../images/Thumbnails/Episode6.jpg'
import Episode7 from '../images/Thumbnails/Episode7.jpg'
import Episode8 from '../images/Thumbnails/Episode8.jpg'
import Episode9 from '../images/Thumbnails/Episode9.jpg'
import Episode10 from '../images/Thumbnails/Episode10.jpg'
import Episode11 from '../images/Thumbnails/Episode11.jpg'
import Episode12 from '../images/Thumbnails/Episode12.jpg'
import Episode13 from '../images/Thumbnails/Episode13.jpg'
import Episode14 from '../images/Thumbnails/Episode14.jpg'
import Episode15 from '../images/Thumbnails/Episode15.jpg'
import Episode16 from '../images/Thumbnails/Episode16.jpg'
import Episode17 from '../images/Thumbnails/Episode17.jpg'
import Episode18 from '../images/Thumbnails/Episode18.jpg'
import Episode19 from '../images/Thumbnails/Episode19.jpg'


import './podcast.css';


class DemoCarousel extends Component {
    render() {
        return (
            <div style={{display: 'flex'}}>
            <Carousel width="700px" className="videoGraph" >
                <div ref="video">
                    {/* <video src={"https://www.youtube.com/embed/AVn-Yjr7kDc"}/> */}
                    <iframe ref="video" width="800" height="315" src="https://www.youtube.com/embed/333X9qN9Qg4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div>
                    {/* <img src={Episode1} /> */}
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/v8RpfQ7oljw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                </div>
                <div>
                    {/* <img src={Episode1} /> */}
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/hzLDD8m2wFM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                </div>
                <div>
                    {/* <img src={Episode1} /> */}
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/6NcHmL73SPs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                </div>
                <div>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/5K5hCo5OPDw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>  
                <div>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/HBfnhCDDsc8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>  
                <div>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/2frem9yRM_Y" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                 <div>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/JIAZ8ONNNkU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>  
                <div>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/VGkqa2HoH-M" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>  
                <div>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/O1R4SDRXjsM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>  
                <div>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/j2qjCHyPijs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>  
                <div>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/gjVyBdAygDA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>  
                <div>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/mSSoK8QEmHI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>  
                <div>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/X4AsMrLIlek" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>  
                <div>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/ucrmZRDt7Ng" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>  
                <div>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/IyfPn4vKel4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>  
                <div>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/yZAnjfnxXkY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>  
                <div>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/CQMYtBXmKBA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>  
                <div>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/cK9g_7gMJmY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>  
                <div>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/Xe_1MEItWaw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>  
                <div>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/OXe3N2cwQcM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/s127Z9K9DVk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div> 
            </Carousel>
                <div>
                    <img style={{width: '100px', height: '80px', cursor: 'pointer' }} src={Episode1}/>
                    {/* <img style={{width: '90px', height: '80px' }} src={Episode2}/> */}
                    <img style={{width: '100px', height: '80px' }} src={Episode3}/>
                    <img style={{width: '100px', height: '80px' }} src={Episode4}/>
                    <img style={{width: '100px', height: '80px' }} src={Episode5}/>
                    <img style={{width: '100px', height: '80px' }} src={Episode6}/>
                    <img style={{width: '100px', height: '80px' }} src={Episode7}/>
                    <img style={{width: '100px', height: '80px' }} src={Episode8}/>
                    <img style={{width: '100px', height: '80px' }} src={Episode9}/>
                    <img style={{width: '100px', height: '80px' }} src={Episode10}/>
                    <img style={{width: '100px', height: '80px' }} src={Episode11}/>
                    <img style={{width: '100px', height: '80px' }} src={Episode12}/>
                    <img style={{width: '100px', height: '80px' }} src={Episode13}/>
                    <img style={{width: '100px', height: '80px' }} src={Episode14}/>
                    <img style={{width: '100px', height: '80px' }} src={Episode15}/>
                    <img style={{width: '100px', height: '80px' }} src={Episode16}/>
                    <img style={{width: '100px', height: '80px' }} src={Episode17}/>
                    <img style={{width: '100px', height: '80px' }} src={Episode18}/>
                    <img style={{width: '100px', height: '80px' }} src={Episode19}/>


                    {/* <img style={{width: '120px', height: '100px' }} src={Episode1}/>
                    <img style={{width: '120px', height: '100px' }} src={Episode1}/>
                    <img style={{width: '120px', height: '100px' }} src={Episode1}/>
                    <img style={{width: '120px', height: '100px' }} src={Episode1}/>
                    <img style={{width: '120px', height: '100px' }} src={Episode1}/>
                    <img style={{width: '120px', height: '100px' }} src={Episode1}/>
                    <img style={{width: '120px', height: '100px' }} src={Episode1}/>
                    <img style={{width: '120px', height: '100px' }} src={Episode1}/>
                    <img style={{width: '120px', height: '100px' }} src={Episode1}/>
                    <img style={{width: '120px', height: '100px' }} src={Episode1}/>
                    <img style={{width: '120px', height: '100px' }} src={Episode1}/>
                    <img style={{width: '120px', height: '100px' }} src={Episode1}/>
                    <img style={{width: '120px', height: '100px' }} src={Episode1}/>
                    <img style={{width: '120px', height: '100px' }} src={Episode1}/> */}

                </div>
            </div>
        );
    }
}

export default DemoCarousel;