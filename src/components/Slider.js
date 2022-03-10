import React , {useLayoutEffect} from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./Slider.css";
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
import $ from 'jquery';

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 75, itemsToShow: 2 },
    { width: 150, itemsToShow: 3 },
    { width: 225, itemsToShow: 4 },
  ];

//   <script>
//     var tag = document.createElement('script');
//     tag.src = "//www.youtube.com/iframe_api";
//     var firstScriptTag = document.getElementsByTagName('script')[0];
//     firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

//     function onYouTubeIframeAPIReady() {
//         var $ = jQuery;
//         var players = [];
//         $('iframe').filter(function(){return this.src.indexOf('http://www.youtube.com/') == 0}).each( function (k, v) {
//             if (!this.id) { this.id='embeddedvideoiframe' + k }
//             players.push(new YT.Player(this.id, {
//                 events: {
//                     'onStateChange': function(event) {
//                         if (event.data == YT.PlayerState.PLAYING) {
//                             $.each(players, function(k, v) {
//                                 if (this.getIframe().id != event.target.getIframe().id) {
//                                     this.pauseVideo();
//                                 }
//                             });
//                         }
//                     }
//                 }
//             }))
//         });
//     }
// </script>
  
  function Slider() {

    useLayoutEffect(() => {
      const script = document.querySelector("script[src*='youtube']");
      if (!script) {
          const newScript = document.createElement('script');
          newScript.src = '//www.youtube.com/iframe_api';
          document.body.appendChild(newScript);
      }
  }, []);

    // function onYouTubeIframeAPIReady() {
    //           var players = [];
    //           $('iframe').filter(function(){return this.src.indexOf('http://www.youtube.com/') == 0}).each( function (k, v) {
    //               if (!this.id) { this.id='embeddedvideoiframe' + k }
    //               players.push(new YT.Player(this.id, {
    //                   events: {
    //                       'onStateChange': function(event) {
    //                           if (event.data == YT.PlayerState.PLAYING) {
    //                               $.each(players, function(k, v) {
    //                                   if (this.getIframe().id != event.target.getIframe().id) {
    //                                       this.pauseVideo();
    //                                   }
    //                               });
    //                           }
    //                       }
    //                   }
    //               }))
    //           });
    //       }

    return (
      <>
        <div className="App">
          <Carousel breakPoints={breakPoints}>
            {/* <Item><iframe width="360" height="315" src="https://www.youtube.com/embed/333X9qN9Qg4?enablejsapi=1&amp" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></Item>
            <Item><iframe width="360" height="315" src="https://www.youtube.com/embed/v8RpfQ7oljw?enablejsapi=1&amp" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></Item>
            <Item><iframe width="360" height="315" src="https://www.youtube.com/embed/hzLDD8m2wFM?enablejsapi=1&amp" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></Item>
            <Item><iframe width="360" height="315" src="https://www.youtube.com/embed/6NcHmL73SPs?enablejsapi=1&amp" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></Item>
            <Item><iframe width="360" height="315" src="https://www.youtube.com/embed/5K5hCo5OPDw?enablejsapi=1&amp" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></Item>
            <Item><iframe width="360" height="315" src="https://www.youtube.com/embed/HBfnhCDDsc8?enablejsapi=1&amp" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></Item>
            <Item><iframe width="360" height="315" src="https://www.youtube.com/embed/2frem9yRM_Y?enablejsapi=1&amp" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></Item>
            <Item><iframe width="360" height="315" src="https://www.youtube.com/embed/JIAZ8ONNNkU?enablejsapi=1&amp" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></Item>
            <Item><iframe width="360" height="315" src="https://www.youtube.com/embed/VGkqa2HoH-M?enablejsapi=1&amp" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></Item>
            <Item><iframe width="360" height="315" src="https://www.youtube.com/embed/O1R4SDRXjsM?enablejsapi=1&amp" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></Item>
            <Item><iframe width="360" height="315" src="https://www.youtube.com/embed/j2qjCHyPijs?enablejsapi=1&amp" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></Item>
            <Item><iframe width="360" height="315" src="https://www.youtube.com/embed/gjVyBdAygDA?enablejsapi=1&amp" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></Item>
            <Item><iframe width="360" height="315" src="https://www.youtube.com/embed/mSSoK8QEmHI?enablejsapi=1&amp" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></Item>
            <Item><iframe width="360" height="315" src="https://www.youtube.com/embed/X4AsMrLIlek?enablejsapi=1&amp" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></Item>
            <Item><iframe width="360" height="315" src="https://www.youtube.com/embed/ucrmZRDt7Ng?enablejsapi=1&amp" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></Item>
            <Item><iframe width="360" height="315" src="https://www.youtube.com/embed/IyfPn4vKel4?enablejsapi=1&amp" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></Item>
            <Item><iframe width="360" height="315" src="https://www.youtube.com/embed/yZAnjfnxXkY?enablejsapi=1&amp" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></Item>
            <Item><iframe width="360" height="315" src="https://www.youtube.com/embed/CQMYtBXmKBA?enablejsapi=1&amp" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></Item>
            <Item><iframe width="360" height="315" src="https://www.youtube.com/embed/cK9g_7gMJmY?enablejsapi=1&amp" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></Item>
            <Item><iframe width="360" height="315" src="https://www.youtube.com/embed/Xe_1MEItWaw?enablejsapi=1&amp" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></Item>
            <Item><iframe width="360" height="315" src="https://www.youtube.com/embed/OXe3N2cwQcM?enablejsapi=1&amp" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></Item>
            <Item><iframe width="360" height="315" src="https://www.youtube.com/embed/s127Z9K9DVk?enablejsapi=1&amp" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></Item> */}
         <img style={{width: '150px', height: '180px' }} src={Episode1}/>
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
           
          </Carousel>
        </div>
      </>
    );
  }

  export default Slider