import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import downloadImage3 from '../images/dilkhush.jpeg';
import downloadImage from '../images/banner4.jpeg'; 
import downloadImage1 from '../images/banner2.jpeg'; 
import downloadImage2 from '../images/banner3.jpeg'; 


const Team = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const members = [
    { image: downloadImage, name: 'Member 1', details: 'Details about member 1' },
    { image: downloadImage1, name: 'Member 2', details: 'Details about member 2' },
    { image: downloadImage2, name: 'Member 3', details: 'Details about member 3' },
    { image: downloadImage3, name: 'Member 4', details: 'Dilkhush kumar Agriculter Studemnt' },

  ];

  return (

    <div className="team-carousel-container">
      <h1 className="headerline">Our Team</h1>
      <Slider {...settings}>
        {members.map((member, index) => (
          <div key={index} className="member-card">
            <img src={member.image} alt={member.name} className="member-image" />
            <h3>{member.name}</h3>
            <p>{member.details}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Team;
