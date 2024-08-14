import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const growShrink = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
`;

const sway = keyframes`
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(5deg); }
`;

const rain = keyframes`
  0% { transform: translateY(-100vh); }
  100% { transform: translateY(100vh); }
`;

const lightning = keyframes`
  0%, 100% { opacity: 0; }
  10%, 90% { opacity: 0; }
  50% { opacity: 1; }
`;

const wind = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100vw); }
`;

const snow = keyframes`
  0% {
    transform: translateY(-10vh) translateX(0);
  }
  100% {
    transform: translateY(100vh) translateX(100px);
  }
`;

const fog = keyframes`
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.6; }
`;

const FooterContainer = styled.footer`
  background: linear-gradient(to bottom, #8BC34A, #4CAF50);
  color: #fff;
  padding: 2rem 0;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.2);
    z-index: 1;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  position: relative;
  z-index: 3;
`;

const Column = styled.div`
  flex: 1;
  min-width: 200px;
  margin: 1rem;
`;

const Title = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
`;

const Link = styled.a`
  color: #fff;
  text-decoration: none;
  display: block;
  margin-bottom: 0.5rem;
  transition: color 0.3s ease;
  &:hover {
    color: #FFC107;
  }
`;

const SocialIcon = styled.i`
  font-size: 1.5rem;
  margin-right: 1rem;
  cursor: pointer;
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-3px);
  }
`;

const Copyright = styled.p`
  text-align: center;
  margin-top: 2rem;
  font-size: 0.9rem;
  position: relative;
  z-index: 3;
  color: #fff;
`;

const Tree = styled.div`
  position: absolute;
  bottom: 0;
  left: 5%;
  width: 100px;
  height: 150px;
  background: url('https://i.imgur.com/7YTTkEO.png') no-repeat bottom center;
  background-size: contain;
  animation: ${sway} 5s ease-in-out infinite;
  z-index: 2;
`;

const Sun = styled.div`
  position: absolute;
  top: 10px;
  right: 10%;
  width: 60px;
  height: 60px;
  background: #FFC107;
  border-radius: 50%;
  box-shadow: 0 0 20px #FFC107;
  animation: ${growShrink} 4s ease-in-out infinite;
  z-index: 2;
`;

const Cloud = styled.div`
  position: absolute;
  top: ${props => props.top};
  ${props => props.left ? 'left' : 'right'}: ${props => props.position};
  width: 100px;
  height: 40px;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 20px;
  animation: ${sway} ${props => props.duration} ease-in-out infinite;
  z-index: 2;
  &:before,
  &:after {
    content: '';
    position: absolute;
    background: rgba(255, 255, 255, 0.6);
    border-radius: 50%;
  }
  &:before {
    width: 50px;
    height: 50px;
    top: -25px;
    left: 10px;
  }
  &:after {
    width: 30px;
    height: 30px;
    top: -15px;
    right: 10px;
  }
`;

const RainDrop = styled.div`
  position: absolute;
  width: 2px;
  height: 15px;
  background-color: #a0d2ff;
  opacity: 1;
  animation: ${rain} ${props => props.duration || '3s'} linear infinite;
  top: ${props => props.top};
  left: ${props => props.left};
  z-index: 2;
`;

const LightningBolt = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.3);
  animation: ${lightning} 5s infinite;
  z-index: 2;
`;

const Leaf = styled.div`
  position: absolute;
  width: 15px;
  height: 15px;
  background-color: #4CAF50;
  clip-path: ellipse(50% 100% at 50% 0%);
  animation: ${wind} ${props => props.duration || '10s'} linear infinite;
  top: ${props => props.top};
  left: -15px;
  z-index: 2;
`;

const Snowflake = styled.div`
  position: absolute;
  width: 8px;
  height: 8px;
  background-color: white;
  border-radius: 50%;
  animation: ${snow} ${props => props.duration || '5s'} linear infinite;
  top: -10px;
  left: ${props => props.left};
  z-index: 2;
`;

const FogLayer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.3);
  animation: ${fog} 10s ease-in-out infinite;
  z-index: 2;
`;

const Footer = () => {
  const [season, setSeason] = useState('spring');

  useEffect(() => {
    const seasons = ['spring', 'summer', 'autumn', 'winter'];
    let index = 0;
    const intervalId = setInterval(() => {
      index = (index + 1) % seasons.length;
      setSeason(seasons[index]);
    }, 10000); // Change season every 10 seconds

    return () => clearInterval(intervalId);
  }, []);

  const rainDrops = Array.from({ length: 50 }, (_, i) => (
    <RainDrop
      key={i}
      duration={`${Math.random() * 0.5 + 0.5}s`}
      top={`${Math.random() * 100}%`}
      left={`${Math.random() * 100}%`}
    />
  ));

  const leaves = Array.from({ length: 20 }, (_, i) => (
    <Leaf
      key={i}
      duration={`${Math.random() * 5 + 5}s`}
      top={`${Math.random() * 100}%`}
    />
  ));

  const snowflakes = Array.from({ length: 50 }, (_, i) => (
    <Snowflake
      key={i}
      duration={`${Math.random() * 3 + 2}s`}
      left={`${Math.random() * 100}%`}
    />
  ));

  return (
    <FooterContainer>
      <Sun style={{ opacity: season === 'winter' ? 0.3 : 1 }} />
      <Tree />
      <Cloud top="30%" left position="18%" duration="7s" />
      <Cloud top="30%" position="15%" duration="9s" />
      <Cloud top="50%" position="25%" duration="9s" />
      {season === 'spring' && rainDrops}
      {season === 'autumn' && leaves}
      {season === 'winter' && snowflakes}
      {season === 'winter' && <FogLayer />}
      {season === 'summer' && <LightningBolt />}
      <ContentWrapper>
        <Column>
          <Title>Quick Links</Title>
          <Link href="#">Home</Link>
          <Link href="#">About Us</Link>
          <Link href="#">Services</Link>
          <Link href="#">Contact</Link>
        </Column>
        <Column>
          <Title>Farming Resources</Title>
          <Link href="#">Crop Guide</Link>
          <Link href="#">Weather Forecast</Link>
          <Link href="#">Market Prices</Link>
          <Link href="#">Farming Tips</Link>
        </Column>
        <Column>
          <Title>Contact Us</Title>
          <p>123 Farm Road, Countryside</p>
          <p>Phone: (123) 456-7890</p>
          <p>Email: info@farmingsite.com</p>
        </Column>
        <Column>
          <Title>Follow Us</Title>
          <div>
            <SocialIcon className="fab fa-facebook" />
            <SocialIcon className="fab fa-twitter" />
            <SocialIcon className="fab fa-instagram" />
            <SocialIcon className="fab fa-youtube" />
          </div>
        </Column>
      </ContentWrapper>
      <Copyright>
        © {new Date().getFullYear()} Farming Site. All rights reserved.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;