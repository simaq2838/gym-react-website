import React,{useRef, useEffect} from 'react'
import "./Gallery.css"
import Swiper from 'swiper';
import image_1 from "../images/gallery_1.jpg"
import image_2 from "../images/gallery_2.jpg"
import image_3 from "../images/gallery_3.jpg"
import image_4 from "../images/gallery_4.jpg"
import image_5 from "../images/gallery_5.jpg"
import image_6 from "../images/gallery_6.jpg"
import image_7 from "../images/gallery_7.jpg"
const Gallery = () => 
{
    const swiperContainerRef = useRef(null);
    //Swiper Tool
  useEffect(() => {
    const swiper = new Swiper(swiperContainerRef.current, {
      spaceBetween: 20,
      grabCursor: true,
      loop: true,
      autoplay: {
        delay: 7500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        991: {
          slidesPerView: 3,
        },
      },
    });

    return () => {
      swiper.destroy();
    };
  }, []);
  return (
    <div>
        <section className="gallery" id="gallery">

<h1 className="heading"> <span>Gallery</span> </h1>
 {/* Image Display with Swiper */}
<div className="swiper gallery-slider" ref = {swiperContainerRef}>

    <div className="swiper-wrapper">

        <div className="swiper-slide slide">
            <div className="image">
                <img src={image_1} alt=""/>
            </div>
        </div>
        
        <div className="swiper-slide slide">
            <div className="image">
                <img src={image_2} alt=""/>
            </div>
        </div>

        <div className="swiper-slide slide">
            <div className="image">
                <img src={image_3} alt=""/>
            </div>
        
        </div>

        <div className="swiper-slide slide">
            <div className="image">
                <img src={image_4} alt=""/>
            </div>
        </div>

        <div className="swiper-slide slide">
            <div className="image">
                <img src={image_5} alt=""/>
            </div>
        </div>
        <div className="swiper-slide slide">
            <div className="image">
                <img src={image_6} alt=""/>
            </div>
        </div>
        <div className="swiper-slide slide">
            <div className="image">
                <img src={image_7} alt=""/>
            </div>
        </div>

    </div>

    <div className="swiper-pagination"></div>

</div>

</section>
    </div>
  )
}

export default Gallery