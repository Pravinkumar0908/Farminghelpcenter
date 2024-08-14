import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 100px;
  padding: 50px 20px;
  font-family: 'Poppins', sans-serif;
`;

const Title = styled.h2`
  text-align: center;
  color: #2c3e50;
  font-size: 2.5rem;
  margin-bottom: 50px;
  animation: ${fadeIn} 1s ease-out;
`;

const FarmingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
`;

const FarmingCard = styled.div`
  background: ${props => props.bgColor};
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  animation: ${fadeIn} 1s ease-out;
  animation-delay: ${props => props.delay};
  opacity: 0;
  animation-fill-mode: forwards;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0,0,0,0.2);
  }
`;

const FarmingImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const FarmingTitle = styled.h3`
  color: #ffffff;
  font-size: 1.5rem;
  margin-bottom: 15px;
`;

const FarmingDescription = styled.p`
  color: #ffffff;
  font-size: 1rem;
  line-height: 1.6;
`;

const farmingContent = [
  {
    title: "फसल चक्र",
    description: "फसल चक्र मिट्टी की उर्वरता बनाए रखने और कीट नियंत्रण में मदद करता है। गेहूं-दलहन-मक्का एक अच्छा उदाहरण है।",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd7QXpTa-hGQdB962V6kNvQ9KJ1IiCKb4oXg&s",
    bgColor: "#27ae60"
  },
  {
    title: "जैविक खेती",
    description: "जैविक खेती रासायनिक उर्वरकों और कीटनाशकों के उपयोग को कम करती है। यह पर्यावरण के अनुकूल है और स्वस्थ उपज देती है।",
    image: "https://www.krishakjagat.org/wp-content/uploads/2022/02/organic-farming1.jpg",
    bgColor: "#2980b9"
  },
  {
    title: "सूक्ष्म सिंचाई",
    description: "ड्रिप और स्प्रिंकलर सिंचाई जैसी सूक्ष्म सिंचाई तकनीकें पानी की बचत करती हैं और फसल की उत्पादकता बढ़ाती हैं।",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmwBTnj_94rdrrnV1epq2dujJ_gZFok1utNg&s",
    bgColor: "#8e44ad"
  },
  {
    title: "संरक्षण कृषि",
    description: "कम या बिना जुताई के खेती, फसल अवशेष प्रबंधन, और फसल विविधीकरण मिट्टी के स्वास्थ्य को बढ़ावा देते हैं।",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUiFwrW00x81khtw_WFOsb4bu9RuTQyf1RPg&s",
    bgColor: "#c0392b"
  },
  {
    title: "एकीकृत कृषि",
    description: "फसल और पशुपालन को जोड़कर, किसान अपनी आय बढ़ा सकते हैं और प्राकृतिक संसाधनों का बेहतर उपयोग कर सकते हैं।",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwAJ2ooA0Dip0hapXBRTuMaX7TrivdLNGoiw&s",
    bgColor: "#d35400"
  },
  {
    title: "सटीक खेती",
    description: "GPS, सेंसर, और ड्रोन जैसी तकनीकों का उपयोग करके, किसान अपने खेतों का सटीक प्रबंधन कर सकते हैं और संसाधनों की बचत कर सकते हैं।",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg4gtvImjBgHD9p51dDKT7udqnstImewCouQ&s",
    bgColor: "#16a085"
  }
];

const Farming = () => {
  return (
    <Container>
      <Title>आधुनिक कृषि तकनीकें</Title>
      <FarmingGrid>
        {farmingContent.map((item, index) => (
          <FarmingCard key={index} delay={`${index * 0.2}s`} bgColor={item.bgColor}>
            <FarmingImage src={item.image} alt={item.title} />
            <FarmingTitle>{item.title}</FarmingTitle>
            <FarmingDescription>{item.description}</FarmingDescription>
          </FarmingCard>
        ))}
      </FarmingGrid>
    </Container>
  );
};

export default Farming;