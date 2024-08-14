import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const waterFlow = keyframes`
  0% { background-position: 0 0; }
  100% { background-position: 100% 0; }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 100px;
  padding: 40px;
  background: linear-gradient(45deg, #00356B, #004D99);
  border-radius: 20px;
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.5);
  color: #fff;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const Title = styled.h1`
  font-size: 3.5em;
  text-align: center;
  margin-bottom: 40px;
  text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.5);
  color: #00BFFF;
  animation: ${fadeIn} 1.5s ease-out;
`;

const InfoSection = styled.div`
  margin-bottom: 50px;
  padding: 30px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  transition: all 0.3s ease;
  animation: ${fadeIn} 1.5s ease-out;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 0 25px rgba(0, 191, 255, 0.5);
  }
`;

const SubTitle = styled.h2`
  font-size: 2.5em;
  color: #00BFFF;
  margin-bottom: 20px;
`;

const Paragraph = styled.p`
  font-size: 1.2em;
  line-height: 1.8;
  margin-bottom: 20px;
`;

const List = styled.ul`
  margin-left: 25px;
  margin-bottom: 20px;
`;

const ListItem = styled.li`
  font-size: 1.1em;
  margin-bottom: 15px;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  overflow: hidden;
  border-radius: 15px;
  margin-bottom: 30px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const WaterOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 20%;
  background: linear-gradient(90deg, rgba(0,191,255,0.3), rgba(0,191,255,0.5));
  animation: ${waterFlow} 10s linear infinite;
`;

const IrrigationManagement = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Container style={{ opacity: isVisible ? 1 : 0 }}>
      <Title>सिंचाई प्रबंधन: आधुनिक खेती का आधार</Title>
      
      <ImageContainer>
        <Image src="https://www.rivulis.com/wp-content/uploads/2023/07/no-limits-1024x419.png" alt="सिंचाई प्रणाली" />
        <WaterOverlay />
      </ImageContainer>

      <InfoSection>
        <SubTitle>1. सिंचाई की आवश्यकता</SubTitle>
        <Paragraph>
          सही समय पर और सही मात्रा में सिंचाई फसल उत्पादन का एक महत्वपूर्ण पहलू है। यह न केवल पौधों की वृद्धि को सुनिश्चित करता है, बल्कि जल संसाधनों के कुशल उपयोग में भी मदद करता है।
        </Paragraph>
        <List>
          <ListItem>फसल की जल आवश्यकताओं को समझें।</ListItem>
          <ListItem>मिट्टी की नमी का नियमित निरीक्षण करें।</ListItem>
          <ListItem>मौसम की स्थिति के अनुसार सिंचाई योजना बनाएं।</ListItem>
        </List>
      </InfoSection>

      <InfoSection>
        <SubTitle>2. आधुनिक सिंचाई तकनीकें</SubTitle>
        <Paragraph>
          आधुनिक सिंचाई तकनीकें पानी के उपयोग को अधिकतम करती हैं और फसल की उत्पादकता बढ़ाती हैं।
        </Paragraph>
        <Slider {...settings}>
          <div>
            <ImageContainer>
              <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHJe1Iecq5RRlV7uXevvLkmsiwsn71C_fKYA&s" alt="ड्रिप सिंचाई" />
            </ImageContainer>
            <SubTitle>ड्रिप सिंचाई</SubTitle>
            <Paragraph>पौधों की जड़ों के पास सीधे पानी पहुंचाता है।</Paragraph>
          </div>
          <div>
            <ImageContainer>
              <Image src="https://images.tv9hindi.com/wp-content/uploads/2021/06/pjimage-2021-06-18T171441.389-1.jpg?w=1280&enlarge=true" alt="स्प्रिंकलर सिंचाई" />
            </ImageContainer>
            <SubTitle>स्प्रिंकलर सिंचाई</SubTitle>
            <Paragraph>बारिश की तरह पानी का छिड़काव करता है।</Paragraph>
          </div>
          <div>
            <ImageContainer>
              <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfXOeik5yVLCLfh2MaFx6Rp06eLhSi3JNg7A&s" alt="सबसरफेस ड्रिप सिंचाई" />
            </ImageContainer>
            <SubTitle>सबसरफेस ड्रिप सिंचाई</SubTitle>
            <Paragraph>जमीन के नीचे पानी पहुंचाता है।</Paragraph>
          </div>
          <div>
            <ImageContainer>
              <Image src="https://img.freepik.com/premium-photo/automated-irrigation-system-with-sensors-adjusting-water-distribution-based-realtime-weather-soil-data-concept-smart-irrigation-sensor-technology-realtime-data-water-efficiency_864588-58333.jpg" alt="सेंसर-आधारित सिंचाई" />
            </ImageContainer>
            <SubTitle>सेंसर-आधारित सिंचाई</SubTitle>
            <Paragraph>मिट्टी की नमी के आधार पर स्वचालित सिंचाई।</Paragraph>
          </div>
        </Slider>
      </InfoSection>

      <InfoSection>
        <SubTitle>3. जल संरक्षण तकनीकें</SubTitle>
        <Paragraph>
          पानी एक मूल्यवान संसाधन है। इसके संरक्षण के लिए विभिन्न तकनीकों का उपयोग किया जा सकता है।
        </Paragraph>
        <List>
          <ListItem>मल्चिंग: मिट्टी की सतह को ढककर वाष्पीकरण को कम करता है।</ListItem>
          <ListItem>कंटूर खेती: ढलान पर पानी के बहाव को कम करता है।</ListItem>
          <ListItem>रेनवाटर हार्वेस्टिंग: बारिश के पानी को संग्रहित करता है।</ListItem>
          <ListItem>फसल चक्र: कम पानी की आवश्यकता वाली फसलों का चयन।</ListItem>
        </List>
      </InfoSection>

      <InfoSection>
        <SubTitle>4. सिंचाई अनुसूची</SubTitle>
        <Paragraph>
          सही समय पर सिंचाई करना महत्वपूर्ण है। यह फसल की वृद्धि के चरणों और मौसम की स्थिति पर निर्भर करता है।
        </Paragraph>
        <List>
          <ListItem>प्रारंभिक वृद्धि चरण: हल्की लेकिन बार-बार सिंचाई।</ListItem>
          <ListItem>फूल आने का समय: मध्यम सिंचाई, तनाव से बचें।</ListItem>
          <ListItem>फल/दाना भरने का समय: पर्याप्त सिंचाई सुनिश्चित करें।</ListItem>
          <ListItem>पकने का समय: सिंचाई कम करें।</ListItem>
        </List>
      </InfoSection>

      <InfoSection>
        <SubTitle>5. सिंचाई प्रबंधन में तकनीकी नवाचार</SubTitle>
        <Paragraph>
          आधुनिक तकनीक सिंचाई प्रबंधन को और अधिक कुशल बना रही है।
        </Paragraph>
        <List>
          <ListItem>IoT सेंसर: मिट्टी की नमी और मौसम की निगरानी के लिए।</ListItem>
          <ListItem>ड्रोन: फसल स्वास्थ्य और सिंचाई आवश्यकताओं का आकलन।</ListItem>
          <ListItem>मोबाइल ऐप: दूर से सिंचाई प्रणालियों का नियंत्रण।</ListItem>
          <ListItem>AI और मशीन लर्निंग: सटीक सिंचाई अनुमान और निर्णय समर्थन।</ListItem>
        </List>
      </InfoSection>
    </Container>
  );
};

export default IrrigationManagement;
