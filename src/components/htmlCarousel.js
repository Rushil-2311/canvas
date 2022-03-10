import React from 'react'
import './carouselhtml.css';
import { Carousel, YoutubeSlide } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

// export default function HtmlCarouselDemo() {
//     return (
//         <section>
//            {/* <video controls="controls" id="slider" autoplay muted loop> */}
//                {/* <source src="https://www.youtube.com/watch?v=7gEJTwsH6kw&ab_channel=OnlineTutorials&html5=True" type="video/mp4"/> */}
//                <iframe width="560" height="315" src="https://www.youtube.com/embed/7gEJTwsH6kw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
//            </video>
//         </section>
//     )
// }
export default function HtmlCarouselDemo () {
    const customRenderItem = (item, props) => <item.type {...item.props} {...props} />;

    const getVideoThumb = (videoId) => `https://img.youtube.com/vi/${videoId}/default.jpg`;

    const getVideoId = (url) => url.substr('https://www.youtube.com/embed/'.length, url.length);

    const customRenderThumb = (children) =>
        children.map((item) => {
            const videoId = getVideoId(item.props.url);
            return <img src={getVideoThumb(videoId)} />;
        });

    return (
        <Carousel renderItem={customRenderItem} renderThumbs={customRenderThumb}>
            <YoutubeSlide key="youtube-1" url="https://www.youtube.com/embed/AVn-Yjr7kDc" />
            <YoutubeSlide key="youtube-2" url="https://www.youtube.com/embed/mOdmi9SVeWY" />
            <YoutubeSlide key="youtube-3" url="https://www.youtube.com/embed/n0F6hSpxaFc" />
            <YoutubeSlide key="youtube-4" url="https://www.youtube.com/embed/0uGETVnkujA" />
        </Carousel>
    );
};
 