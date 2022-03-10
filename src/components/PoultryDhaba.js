import React from 'react'
import PodcastImg from '../images/Podcast.jpg';
import { Image } from 'react-bootstrap';
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import NavbarComp from './Navbar';
import Episode0 from '../images/dhaba/Episode0.jpeg'
import Episode1 from '../images/dhaba/Episode1.jpeg'
import Episode2 from '../images/dhaba/Episode2.jpeg'
import Episode3 from '../images/dhaba/Episode3.jpeg'
import Episode4 from '../images/dhaba/Episode4.jpeg'
import Episode5 from '../images/dhaba/Episode5.jpeg'
import Episode6 from '../images/dhaba/Episode6.jpeg'
import Episode7 from '../images/dhaba/Episode7.jpeg'
import Episode8 from '../images/dhaba/Episode8.jpeg'
import Episode9 from '../images/dhaba/Episode9.jpeg'
import Episode10 from '../images/dhaba/Episode10.jpeg'
import Episode11 from '../images/dhaba/Episode11.jpeg'
import Episode12 from '../images/dhaba/Episode12.jpeg'
import Thum1 from '../images/Thum1.jpeg';
import Thum2 from '../images/THum2.jpeg';
import Thum3 from '../images/THum3.jpg';

import './podcast.css';
import Slider from './Slider';
import './poultry.css';


export default function PoultryDhaba() {

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
        <div className="imgBackgroundNew">
            <NavbarComp/>
            <div className="App" style={{position: 'relative'}}>
                <section className="main">
                <iframe id="slider" width="560" height="315" src="https://www.youtube.com/embed/XMeNzUPEabk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <ul className="navigation">
                        <Carousel breakPoints={breakPoints}>
                        {/* <li onClick={() => videoUrl('https://www.youtube.com/watch?v=9ldm-4V6LnM&ab_channel=PoultryDhaba')}><img src={Thum1}/></li>
                        <li onClick={() => videoUrl('https://www.youtube.com/watch?v=OJal_xOePbU&t=25s&ab_channel=PoultryDhaba')}><img src={Thum2}/></li>
                        <li onClick={() => videoUrl('https://www.youtube.com/watch?v=vCom3fxACAE&ab_channel=PoultryDhaba')}><img src={Thum3}/></li> */}
                        <li onClick={() => videoUrl('https://www.youtube.com/embed/XMeNzUPEabk')}><img src={Episode0}/></li>
                        <li onClick={() => videoUrl('https://www.youtube.com/embed/Obs5M0d4T2Y')}><img src={Episode1}/></li>
                        <li onClick={() => videoUrl('https://www.youtube.com/embed/JCJp1ujR6Ik')}><img src={Episode2}/></li>
                        <li onClick={() => videoUrl('https://www.youtube.com/embed/_UCrpPPAilk')}><img src={Episode3}/></li>
                        <li onClick={() => videoUrl('https://www.youtube.com/embed/P8xC9s8foNc')}><img src={Episode4}/></li>
                        <li onClick={() => videoUrl('https://www.youtube.com/embed/t0pJdMe6N4M')}><img src={Episode5}/></li>
                        <li onClick={() => videoUrl('https://www.youtube.com/embed/RfjkG8gqAEc')}><img src={Episode6}/></li>
                        <li onClick={() => videoUrl('https://www.youtube.com/embed/SInrc_VlIWY')}><img src={Episode7}/></li>
                        <li onClick={() => videoUrl('https://www.youtube.com/embed/r1JEMnbCsUQ')}><img src={Episode8}/></li>
                        <li onClick={() => videoUrl('https://www.youtube.com/embed/URRV2QRwmoA')}><img src={Episode9}/></li>
                        <li onClick={() => videoUrl('https://www.youtube.com/embed/uI69kZ_Bxbw')}><img src={Episode10}/></li>
                        <li onClick={() => videoUrl('https://www.youtube.com/embed/r80zZPogdl0')}><img src={Episode11}/></li>
                        <li onClick={() => videoUrl('https://www.youtube.com/embed/0Am85jZyKQw')}><img src={Episode12}/></li>
                        </Carousel>
                    </ul>
                </section>
            </div>
        </div>
    )
}
