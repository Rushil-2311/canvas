import React from 'react'
import PodcastImg from '../images/Podcast.jpg';
import { Image } from 'react-bootstrap';
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import NavbarComp from './Navbar';
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
import Episode20 from '../images/Thumbnails/Episode20.jpg'
import Episode21 from '../images/Thumbnails/Episode21.jpg'

import './podcast.css';
import Slider from './Slider';
import './Slider.css';


export default function PodCast() {

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 75, itemsToShow: 2 },
        { width: 150, itemsToShow: 3 },
        { width: 225, itemsToShow: 4 },
      ];

    function videoUrl(hmmmmm){
        document.getElementById('slider').src = hmmmmm;
    }

    return (
        <div className="imgBackground">
            <NavbarComp/>
            <div className="App" style={{position: 'relative'}}>
                <section className="main">
                <iframe id="slider" width="560" height="315" src="https://www.youtube.com/embed/333X9qN9Qg4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <ul className="navigation">
                        <Carousel breakPoints={breakPoints}>
                            <li onClick={() => videoUrl('https://www.youtube.com/embed/v8RpfQ7oljw')}><img src={Episode1}/></li>
                            <li onClick={() => videoUrl('https://www.youtube.com/embed/hzLDD8m2wFM')}><img src={Episode2}/></li>
                            <li onClick={() => videoUrl('https://www.youtube.com/embed/6NcHmL73SPs')}><img src={Episode3}/></li> 
                            <li onClick={() => videoUrl('https://www.youtube.com/embed/5K5hCo5OPDw')}><img src={Episode4}/></li> 
                            <li onClick={() => videoUrl('https://www.youtube.com/embed/HBfnhCDDsc8')}><img src={Episode5}/></li> 
                            <li onClick={() => videoUrl('https://www.youtube.com/embed/2frem9yRM_Y')}><img src={Episode6}/></li> 
                            <li onClick={() => videoUrl('https://www.youtube.com/embed/JIAZ8ONNNkU')}><img src={Episode7}/></li> 
                            <li onClick={() => videoUrl('https://www.youtube.com/embed/VGkqa2HoH-M')}><img src={Episode8}/></li> 
                            <li onClick={() => videoUrl('https://www.youtube.com/embed/O1R4SDRXjsM')}><img src={Episode9}/></li> 
                            <li onClick={() => videoUrl('https://www.youtube.com/embed/j2qjCHyPijs')}><img src={Episode10}/></li> 
                            <li onClick={() => videoUrl('https://www.youtube.com/embed/gjVyBdAygDA')}><img src={Episode11}/></li> 
                            <li onClick={() => videoUrl('https://www.youtube.com/embed/mSSoK8QEmHI')}><img src={Episode12}/></li> 
                            <li onClick={() => videoUrl('https://www.youtube.com/embed/X4AsMrLIlek')}><img src={Episode13}/></li> 
                            <li onClick={() => videoUrl('https://www.youtube.com/embed/ucrmZRDt7Ng')}><img src={Episode14}/></li> 
                            <li onClick={() => videoUrl('https://www.youtube.com/embed/IyfPn4vKel4')}><img src={Episode15}/></li> 
                            <li onClick={() => videoUrl('https://www.youtube.com/embed/yZAnjfnxXkY')}><img src={Episode16}/></li> 
                            <li onClick={() => videoUrl('https://www.youtube.com/embed/CQMYtBXmKBA')}><img src={Episode17}/></li> 
                            <li onClick={() => videoUrl('https://www.youtube.com/embed/cK9g_7gMJmY')}><img src={Episode18}/></li> 
                            <li onClick={() => videoUrl('https://www.youtube.com/embed/Xe_1MEItWaw')}><img src={Episode19}/></li> 
                            <li onClick={() => videoUrl('https://www.youtube.com/embed/OXe3N2cwQcM')}><img src={Episode20}/></li> 
                            <li onClick={() => videoUrl('https://www.youtube.com/embed/s127Z9K9DVk')}><img src={Episode21}/></li>                    
                        </Carousel>
                    </ul>
                </section>
            </div>
        </div>
    )
}
