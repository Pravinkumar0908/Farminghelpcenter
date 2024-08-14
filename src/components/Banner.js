import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import downloadImage from '../images/banner4.jpeg'; 
import downloadImage1 from '../images/banner2.jpeg'; 
import downloadImage2 from '../images/banner3.jpeg'; 
import downloadImage3 from '../images/banner4.jpeg';
import downloadImage4 from '../images/banner5.jpeg'; 
import downloadImage5 from '../images/banner6.jpeg'; 



const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  // Array of imported images
  const items = [
    downloadImage,
    downloadImage1,
    downloadImage2,
    downloadImage3,
    downloadImage4,
    downloadImage5
  ];

  return (
    <div className="banner-container">
      <Slider {...settings}>
        {items.map((item, index) => (
          <div key={index}>
            <img src={item} alt={`Carousel Image ${index + 1}`} className="banner-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
