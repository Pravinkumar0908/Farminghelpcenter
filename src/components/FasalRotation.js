import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideIn = keyframes`
  from { transform: translateY(50px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 100px;
  padding: 20px;
  font-family: 'Arial', sans-serif;
`;

const Title = styled.h1`
text-align: center;
color: #2c3e50;
font-size: 2em;
margin-bottom: 20px;
  animation: ${fadeIn} 1s ease-out;
`;

const Section = styled.section`
  margin-bottom: 40px;
  animation: ${slideIn} 1s ease-out;
  animation-fill-mode: both;
  animation-delay: ${props => props.delay}s;
`;

const SectionTitle = styled.h2`
  color: #3498db;
  border-bottom: 2px solid #3498db;
  padding-bottom: 10px;
`;

const Paragraph = styled.p`
  line-height: 1.6;
  color: #34495e;
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ListItem = styled.li`
  margin-bottom: 10px;
  padding-left: 20px;
  position: relative;

  &:before {
    content: '•';
    color: #3498db;
    position: absolute;
    left: 0;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const RotationDiagram = styled.div`
  width: 300px;
  height: 300px;
  margin: 0 auto;
  position: relative;
  animation: ${rotate} 20s linear infinite;
`;

const CropIcon = styled.div`
  position: absolute;
  width: 60px;
  height: 60px;
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
`;

const FasalRotation = () => {
  const [visibleSections, setVisibleSections] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleSections([0, 1, 2, 3, 4]);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const crops = [
    { name: 'गेहूं', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoS9jUKrgg2A9GHL_oDySi1MxZKAM6fV8fkw&s' },
    { name: 'धान', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp7AB-zB8xF4RqnUZMXfdUVq6CfSGOJ19lOw&s' },
    { name: 'दलहन', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD50kr4dKllaH4W_hkFdKaMTQ7zPNTdz-t8A&s' },
    { name: 'मक्का', icon: 'https://e7.pngegg.com/pngimages/394/656/png-clipart-maize-sweet-corn-others-natural-foods-food-thumbnail.png' }
  ];

  return (
    <Container>
      <Title>फसल रोटेशन</Title>

      {visibleSections.includes(0) && (
        <Section delay={0.2}>
          <SectionTitle>फसल रोटेशन क्या है?</SectionTitle>
          <Paragraph>
            फसल रोटेशन एक कृषि प्रथा है जिसमें एक ही खेत में अलग-अलग मौसमों या वर्षों में विभिन्न प्रकार की फसलों को उगाया जाता है। यह मिट्टी की उर्वरता बनाए रखने, कीट और रोग नियंत्रण में मदद करने, और समग्र उत्पादकता बढ़ाने के लिए महत्वपूर्ण है।
          </Paragraph>
        </Section>
      )}

      {visibleSections.includes(1) && (
        <Section delay={0.4}>
          <SectionTitle>फसल रोटेशन के लाभ</SectionTitle>
          <List>
            <ListItem>मिट्टी की उर्वरता में सुधार</ListItem>
            <ListItem>कीट और रोग नियंत्रण</ListItem>
            <ListItem>मिट्टी की संरचना में सुधार</ListItem>
            <ListItem>जैव विविधता को बढ़ावा</ListItem>
            <ListItem>पोषक तत्वों का बेहतर उपयोग</ListItem>
            <ListItem>खरपतवार नियंत्रण में मदद</ListItem>
          </List>
        </Section>
      )}

      {visibleSections.includes(2) && (
        <Section delay={0.6}>
          <SectionTitle>फसल रोटेशन चक्र का उदाहरण</SectionTitle>
          <Paragraph>
            एक सामान्य फसल रोटेशन चक्र इस प्रकार हो सकता है:
          </Paragraph>
          <RotationDiagram>
            {crops.map((crop, index) => (
              <CropIcon
                key={index}
                style={{
                  backgroundImage: `url(${crop.icon})`,
                  top: `${50 - 50 * Math.cos(index * Math.PI / 2)}%`,
                  left: `${50 + 50 * Math.sin(index * Math.PI / 2)}%`
                }}
              />
            ))}
          </RotationDiagram>
          <List>
            <ListItem>वर्ष 1: गेहूं</ListItem>
            <ListItem>वर्ष 2: धान</ListItem>
            <ListItem>वर्ष 3: दलहन (मृदा में नाइट्रोजन जोड़ने के लिए)</ListItem>
            <ListItem>वर्ष 4: मक्का</ListItem>
          </List>
        </Section>
      )}

      {visibleSections.includes(3) && (
        <Section delay={0.8}>
          <SectionTitle>फसल रोटेशन की योजना बनाने के टिप्स</SectionTitle>
          <List>
            <ListItem>अपनी मिट्टी के प्रकार और जलवायु को समझें</ListItem>
            <ListItem>विभिन्न पोषक तत्व आवश्यकताओं वाली फसलों का चयन करें</ListItem>
            <ListItem>गहरी और उथली जड़ों वाली फसलों को बदलें</ListItem>
            <ListItem>नाइट्रोजन-फिक्सिंग फसलों को शामिल करें</ListItem>
            <ListItem>स्थानीय बाजार की मांग को ध्यान में रखें</ListItem>
          </List>
        </Section>
      )}

      {visibleSections.includes(4) && (
        <Section delay={1}>
          <SectionTitle>फसल रोटेशन का महत्व</SectionTitle>
          <ImageContainer>
            <Image src="crop-rotation-benefits.jpg" alt="फसल रोटेशन के लाभ" />
          </ImageContainer>
          <Paragraph>
            फसल रोटेशन टिकाऊ कृषि का एक महत्वपूर्ण हिस्सा है। यह न केवल मिट्टी की गुणवत्ता और उत्पादकता को बढ़ाता है, बल्कि पर्यावरण संरक्षण और दीर्घकालिक आर्थिक लाभ में भी योगदान देता है। नियमित फसल रोटेशन अपनाकर, किसान अपनी भूमि की उत्पादकता को लंबे समय तक बनाए रख सकते हैं और स्थायी कृषि प्रथाओं को बढ़ावा दे सकते हैं।
          </Paragraph>
        </Section>
      )}
    </Container>
  );
};

export default FasalRotation;