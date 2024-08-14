import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideIn = keyframes`
  from { transform: translateY(-20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

const GuideContainer = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  max-width: 300px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  z-index: 1000;
  animation: ${slideIn} 0.5s ease-out;
`;

const Title = styled.h2`
  font-size: 20px;
  color: #333;
  margin-bottom: 10px;
`;

const Content = styled.p`
  font-size: 14px;
  color: #666;
  animation: ${fadeIn} 0.5s ease-in-out;
`;

const Navigation = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background-color: ${props => props.disabled ? '#ccc' : '#007bff'};
  color: white;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  font-size: 14px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: ${props => props.disabled ? '#ccc' : '#0056b3'};
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
  color: #666;
`;

const ProgressIndicator = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
`;

const ProgressDot = styled.div`
  width: 8px;
  height: 8px;
  margin: 0 3px;
  border-radius: 50%;
  background-color: ${props => props.active ? '#007bff' : '#ddd'};
`;

const TriggerButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  z-index: 1000;
`;

const Tutorial = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isTutorialVisible, setIsTutorialVisible] = useState(false);

  const tutorialSteps = [
    { title: 'स्वागत है', content: 'हमारी वेबसाइट पर आपका स्वागत है। यह गाइड आपको साइट के मुख्य फीचर्स से परिचित कराएगा।' },
    { title: 'होम पेज', content: 'यह हमारा होम पेज है। यहाँ आप हमारे नवीनतम उत्पादों और समाचारों को देख सकते हैं।' },
    { title: 'मौसम और फसल प्रबंधन', content: 'इस सेक्शन में हमारे सभी मौसम पूर्वानुमान,ऑर्गेनिक खेती, फसल कैलेंडर, फसल रोटेशन,कीट और रोग प्रबंधन, मिट्टी स्वास्थ्य हैं। आप फ़िल्टर का उपयोग करके अपनी पसंद  खोज सकते हैं।' },
    { title: 'कॉन्टैक्ट', content: 'किसी भी प्रश्न के लिए, कृपया हमारे कॉन्टैक्ट पेज पर जाएँ। हम आपकी सहायता के लिए तत्पर हैं।' },
    { title: 'बाजार और वित्तीय सेवाएँ', content: 'इस पेज पर आपको बाज़ार की फसल का भाव कृषि ऋण,के बारे में जानकारी मिलेगी ' },
    { title: 'ज्ञान और प्रशिक्षण', content: 'इस पेज में आपको कृषि सम्बंदित जानकारी मिलेगी जैसे ऑनलाइन कृषि पाठ्यक्रम,फसल में बीमारी की सुझाव के वीडियो जिससे बीमारियो आक इलाज हो सके   ' }

    

  ];

  useEffect(() => {
    const hasSeenTutorial = localStorage.getItem('hasSeenTutorial');
    if (!hasSeenTutorial) {
      setIsTutorialVisible(true);
      localStorage.setItem('hasSeenTutorial', 'true');
    }
  }, []);

  const nextStep = () => {
    if (currentStep < tutorialSteps.length - 1) {
      setCurrentStep(prevStep => prevStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(prevStep => prevStep - 1);
    }
  };

  const closeTutorial = () => {
    setIsTutorialVisible(false);
  };

  const showTutorial = () => {
    setIsTutorialVisible(true);
    setCurrentStep(0);
  };

  return (
    <>
      {!isTutorialVisible && (
        <TriggerButton onClick={showTutorial}>शुरू ट्यूटोरियल</TriggerButton>
      )}
      {isTutorialVisible && (
        <GuideContainer>
          <CloseButton onClick={closeTutorial}>&times;</CloseButton>
          <Title>{tutorialSteps[currentStep].title}</Title>
          <Content>{tutorialSteps[currentStep].content}</Content>
          <Navigation>
            <Button onClick={prevStep} disabled={currentStep === 0}>
              पिछला
            </Button>
            <Button onClick={nextStep} disabled={currentStep === tutorialSteps.length - 1}>
              अगला
            </Button>
          </Navigation>
          <ProgressIndicator>
            {tutorialSteps.map((_, index) => (
              <ProgressDot key={index} active={index === currentStep} />
            ))}
          </ProgressIndicator>
        </GuideContainer>
      )}
    </>
  );
};

export default Tutorial;