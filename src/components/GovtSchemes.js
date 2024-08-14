import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.0);
  }
  100% {
    transform: scale(1);
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 100px;
  padding: 20px;
  font-family: 'Poppins', sans-serif;
`;

const Title = styled.h1`
  text-align: center;
  color: #2c3e50;
  font-size: 2.5rem;
  margin-bottom: 30px;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
`;

const SchemeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
`;

const SchemeCard = styled.div`
  background: linear-gradient(145deg, #ffffff, #f0f0f0);
  border-radius: 15px;
  padding: 20px;
  // box-shadow: 10px 10px 20px #d1d1d1, -10px -10px 20px #ffffff;
  transition: all 0.3s ease;
  animation: ${slideIn} 0.5s ease-out;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 15px 15px 30px #bebebe, -15px -15px 30px #ffffff;
  }
`;

const SchemeImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 15px;
  animation: ${pulse} 2s infinite;
`;

const SchemeName = styled.h2`
  color: #3498db;
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const SchemeDescription = styled.p`
  color: #34495e;
  font-size: 1rem;
  line-height: 1.5;
`;

const ReadMoreButton = styled.button`
  background-color: #e74c3c;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 15px;

  &:hover {
    background-color: #c0392b;
    transform: scale(1.05);
  }
`;

const SchemeDetail = styled.div`
  background: #ffffff;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 10px 10px 20px #d1d1d1, -10px -10px 20px #ffffff;
  margin-top: 20px;
`;

const DetailTitle = styled.h2`
  color: #3498db;
  font-size: 2rem;
`;

const DetailDescription = styled.p`
  color: #34495e;
  font-size: 1rem;
  line-height: 1.5;
`;

const BackButton = styled.button`
  background-color: #3498db;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 15px;

  &:hover {
    background-color: #2980b9;
    transform: scale(1.05);
  }
`;
const ApplyButton = styled.a`
  display: inline-block;
  background-color: #2ecc71;
  color: white;
  text-align: center;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  margin-top: 15px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #27ae60;
    transform: scale(1.05);
  }
`;
const schemes = [
  {
    id: 1,
    name: 'प्रधानमंत्री किसान सम्मान निधि',
    description: 'इस योजना के तहत, किसानों को प्रति वर्ष ₹6,000 की वित्तीय सहायता दी जाती है।',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6012TSyohWhonedkP3gtodT63ZdCRLvUgrQ&s',
    details: `प्रधानमंत्री किसान सम्मान निधि योजना किसानों को प्रतिवर्ष ₹6,000 की वित्तीय सहायता प्रदान करती है। 
              यह सहायता सीधे किसानों के बैंक खातों में ट्रांसफर की जाती है। इस योजना का उद्देश्य किसानों की आय को दोगुना करना है और उन्हें कृषि में मदद करना है। 
              इस योजना के तहत लाभ प्राप्त करने के लिए किसानों को पात्रता मानदंडों को पूरा करना होगा।`,
    applyLink: 'https://pmkisan.gov.in/'
  },
  {
    id: 2,
    name: 'किसान क्रेडिट कार्ड',
    description: 'किसानों को आसान ऋण सुविधा प्रदान करने के लिए डिज़ाइन किया गया कार्ड।',
    image: 'https://akm-img-a-in.tosshub.com/lingo/ktak/images/story/202306/kcc_1-sixteen_nine.jpg?size=948:533',
    details: `किसान क्रेडिट कार्ड (KCC) योजना किसानों को आसान ऋण सुविधा प्रदान करती है। 
              यह कार्ड कृषि कार्यों, फसल की बुआई, और अन्य कृषि संबंधी खर्चों के लिए प्रयोग किया जा सकता है। 
              इस कार्ड की मदद से किसान आसानी से ऋण प्राप्त कर सकते हैं और अपनी फसलों की बेहतर देखभाल कर सकते हैं। 
              आवेदन करने के लिए किसानों को अपने नजदीकी बैंक या वित्तीय संस्थान से संपर्क करना होगा।`,
    applyLink: 'https://www.pnbindia.in/kisan-credit-card.html'
  },
  {
    id: 3,
    name: 'प्रधानमंत्री फसल बीमा योजना',
    description: 'फसल खराब होने की स्थिति में किसानों को वित्तीय सुरक्षा प्रदान करने वाली बीमा योजना।',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8iCdHxXwzV-o-arwT04NGiyvjnuwi7l0DJg&s',
    details: `प्रधानमंत्री फसल बीमा योजना (PMFBY) किसानों को फसल के खराब होने की स्थिति में वित्तीय सुरक्षा प्रदान करती है। 
              यह योजना प्राकृतिक आपदाओं, कीटों, और बीमारियों से होने वाले नुकसान की भरपाई करती है। 
              इस योजना के तहत, किसानों को बीमा प्रीमियम पर सब्सिडी भी प्रदान की जाती है। 
              आवेदन करने के लिए किसानों को अपने स्थानीय बीमा एजेंट या कृषि विभाग से संपर्क करना होगा।`,
    applyLink: 'https://pmfby.gov.in/'
  },
  {
    id: 4,
    name: 'मृदा स्वास्थ्य कार्ड योजना',
    description: 'किसानों को उनकी मिट्टी के स्वास्थ्य के बारे में जानकारी प्रदान करने वाली योजना।',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd2hyEM0CubaKJFSmBhElxrSYwKILrxVZ45w&s',
    details: `मृदा स्वास्थ्य कार्ड योजना किसानों को उनकी मिट्टी के स्वास्थ्य के बारे में जानकारी प्रदान करती है। 
              यह योजना मिट्टी की गुणवत्ता, पोषक तत्वों की कमी, और सही उर्वरक का सुझाव देती है। 
              इससे किसानों को अपनी फसलों की बेहतर देखभाल करने में मदद मिलती है। 
              आवेदन करने के लिए किसानों को अपने नजदीकी कृषि कार्यालय से संपर्क करना होगा।`,
    applyLink: 'https://www.npci.org.in/what-we-do/education-and-awareness/msoil'
  }
];


const GovtSchemes = () => {
  const [selectedScheme, setSelectedScheme] = useState(null);

  const handleCardClick = (scheme) => {
    setSelectedScheme(scheme);
  };

  const handleBackClick = () => {
    setSelectedScheme(null);
  };

  return (
    <Container>
      <Title>किसानों के लिए सरकारी योजनाएँ</Title>
      {selectedScheme ? (
        <SchemeDetail>
          <DetailTitle>{selectedScheme.name}</DetailTitle>
          <SchemeImage src={selectedScheme.image} alt={selectedScheme.name} />
          <DetailDescription>{selectedScheme.details}</DetailDescription>
          <ApplyButton href={selectedScheme.applyLink} target="_blank">आवेदन करें</ApplyButton>
          <BackButton onClick={handleBackClick}>वापस जाएं</BackButton>
        </SchemeDetail>
      ) : (
        <SchemeGrid>
          {schemes.map((scheme) => (
            <SchemeCard
              key={scheme.id}
              onClick={() => handleCardClick(scheme)}
            >
              <SchemeImage src={scheme.image} alt={scheme.name} />
              <SchemeName>{scheme.name}</SchemeName>
              <SchemeDescription>{scheme.description}</SchemeDescription>
              <ReadMoreButton>और जानें</ReadMoreButton>
            </SchemeCard>
          ))}
        </SchemeGrid>
      )}
    </Container>
  );
};

export default GovtSchemes;
