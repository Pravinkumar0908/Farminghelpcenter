import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaPhoneAlt, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const ContactWrapper = styled.div`
  position: fixed;
  bottom: 20px;
  right: 10%;
  z-index: 1000;
`;

const ContactButton = styled.button`
  background-color: #25D366;
  color: white;
  border: none;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0,0,0,0.3);
  animation: ${pulse} 2s infinite;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 12px rgba(0,0,0,0.4);
  }

  svg {
    font-size: 24px;
    animation: ${rotate} 10s linear infinite;
  }
`;

const SocialIconsWrapper = styled.div`
  position: absolute;
  bottom: 70px;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;
`;

const SocialIcon = styled.a`
  background-color: ${props => props.color};
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  transition: all 0.3s ease;
  animation: ${fadeIn} 0.5s ease-out;
  animation-fill-mode: both;

  &:hover {
    transform: scale(1.1) rotate(10deg);
  }

  svg {
    font-size: 20px;
  }
`;

const AnimatedContact = () => {
  const [isOpen, setIsOpen] = useState(false);

  const socialMedia = [
    { icon: <FaFacebookF />, color: '#3b5998', link: 'https://facebook.com' },
    { icon: <FaTwitter />, color: '#1DA1F2', link: 'https://twitter.com' },
    { icon: <FaInstagram />, color: '#E1306C', link: 'https://instagram.com' },
    { icon: <FaLinkedinIn />, color: '#0077B5', link: 'https://linkedin.com' },
  ];

  return (
    <ContactWrapper>
      <ContactButton onClick={() => setIsOpen(!isOpen)}>
        <FaPhoneAlt />
      </ContactButton>
      {isOpen && (
        <SocialIconsWrapper>
          {socialMedia.map((social, index) => (
            <SocialIcon 
              key={index} 
              href={social.link} 
              target="_blank" 
              rel="noopener noreferrer"
              color={social.color}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {social.icon}
            </SocialIcon>
          ))}
        </SocialIconsWrapper>
      )}
    </ContactWrapper>
  );
};

export default AnimatedContact;