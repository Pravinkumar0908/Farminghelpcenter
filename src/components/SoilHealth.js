import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  margin-top: 100px;
  padding: 30px;
  background: linear-gradient(45deg, #1a1a1a, #2a2a2a);
  border-radius: 15px;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.7);
  color: #fff;
  animation: ${fadeIn} 1.5s ease-in;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const Title = styled.h1`
  font-size: 3em;
  text-align: center;
  margin-bottom: 30px;
  text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.5);
  color: #ffd700;
`;

const InfoSection = styled.div`
  margin-bottom: 40px;
  padding: 25px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 0 20px rgba(255, 215, 0, 0.3);
  }
`;

const SubTitle = styled.h2`
  font-size: 2em;
  color: #ffd700;
  margin-bottom: 15px;
`;

const Paragraph = styled.p`
  font-size: 1.1em;
  color: #cca;
  line-height: 1.6;
  margin-bottom: 15px;
`;

const List = styled.ul`
  margin-left: 20px;
  margin-bottom: 15px;
`;

const ListItem = styled.li`
  margin-bottom: 10px;
`;

const SoilHealth = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <Container style={{ opacity: isVisible ? 1 : 0 }}>
      <Title>मिट्टी स्वास्थ्य: समग्र मार्गदर्शिका</Title>
      
      <InfoSection>
        <SubTitle>1. मिट्टी की जांच और विश्लेषण</SubTitle>
        <Paragraph>
          नियमित मिट्टी परीक्षण आपकी मिट्टी की स्थिति को समझने की कुंजी है। यह आपको मिट्टी के pH, पोषक तत्वों की उपलब्धता, और संरचना के बारे में महत्वपूर्ण जानकारी प्रदान करता है।
        </Paragraph>
        <List>
          <ListItem>वर्ष में कम से कम एक बार मिट्टी का परीक्षण करें।</ListItem>
          <ListItem>pH स्तर, नाइट्रोजन, फास्फोरस, पोटैशियम, और अन्य सूक्ष्म पोषक तत्वों की जांच करें।</ListItem>
          <ListItem>मिट्टी की संरचना (रेत, गाद, मिट्टी का अनुपात) का विश्लेषण करें।</ListItem>
          <ListItem>परीक्षण परिणामों के आधार पर उर्वरक और संशोधन योजना विकसित करें।</ListItem>
        </List>
      </InfoSection>

      <InfoSection>
        <SubTitle>2. जैविक पदार्थ प्रबंधन</SubTitle>
        <Paragraph>
          जैविक पदार्थ मिट्टी के स्वास्थ्य का आधार हैं। वे मिट्टी की संरचना में सुधार करते हैं, पानी धारण क्षमता बढ़ाते हैं, और सूक्ष्मजीवों के लिए भोजन प्रदान करते हैं।
        </Paragraph>
        <List>
          <ListItem>कंपोस्ट: अपने खेत के अवशेषों से कंपोस्ट बनाएं और इसे नियमित रूप से मिट्टी में मिलाएं।</ListItem>
          <ListItem>हरी खाद: मौसम के अनुसार हरी खाद की फसलें उगाएं और उन्हें मिट्टी में मिला दें।</ListItem>
          <ListItem>फसल अवशेष: फसल के अवशेषों को मिट्टी में ही छोड़ दें, इससे कार्बनिक पदार्थ बढ़ेंगे।</ListItem>
          <ListItem>गोबर की खाद: यदि उपलब्ध हो तो गोबर की खाद का उपयोग करें, यह पोषक तत्वों का एक समृद्ध स्रोत है।</ListItem>
        </List>
      </InfoSection>

      <InfoSection>
        <SubTitle>3. फसल चक्र और विविधीकरण</SubTitle>
        <Paragraph>
          फसल चक्र मिट्टी के स्वास्थ्य को बनाए रखने का एक महत्वपूर्ण तरीका है। यह कीट और रोग चक्रों को तोड़ता है, पोषक तत्वों के संतुलन को बनाए रखता है, और मिट्टी की उर्वरता में सुधार करता है।
        </Paragraph>
        <List>
          <ListItem>दलहनी फसलों को शामिल करें जो नाइट्रोजन को स्थिर करती हैं।</ListItem>
          <ListItem>गहरी और उथली जड़ वाली फसलों का चक्र बनाएं।</ListItem>
          <ListItem>अलग-अलग पोषक तत्व आवश्यकताओं वाली फसलों का चयन करें।</ListItem>
          <ListItem>कवर क्रॉप्स का उपयोग करें जब खेत खाली हो।</ListItem>
        </List>
      </InfoSection>

      <InfoSection>
        <SubTitle>4. पानी प्रबंधन</SubTitle>
        <Paragraph>
          उचित पानी प्रबंधन मिट्टी के स्वास्थ्य के लिए महत्वपूर्ण है। यह न केवल पौधों की वृद्धि को प्रभावित करता है, बल्कि मिट्टी के भौतिक और रासायनिक गुणों को भी प्रभावित करता है।
        </Paragraph>
        <List>
          <ListItem>ड्रिप सिंचाई या स्प्रिंकलर सिस्टम जैसी कुशल सिंचाई तकनीकों का उपयोग करें।</ListItem>
          <ListItem>मिट्टी की नमी की निगरानी करें और केवल आवश्यकता पड़ने पर ही सिंचाई करें।</ListItem>
          <ListItem>मल्चिंग का उपयोग करें ताकि मिट्टी की नमी बरकरार रहे और वाष्पीकरण कम हो।</ListItem>
          <ListItem>अपवाह को कम करने के लिए कंटूर बांध या टेरेसिंग जैसी तकनीकों का उपयोग करें।</ListItem>
        </List>
      </InfoSection>

      <InfoSection>
        <SubTitle>5. न्यूनतम जुताई प्रथाएं</SubTitle>
        <Paragraph>
          कम जुताई या शून्य जुताई प्रथाएं मिट्टी की संरचना को बनाए रखने, कार्बनिक पदार्थों को संरक्षित करने और मिट्टी के जीवों की गतिविधि को बढ़ावा देने में मदद करती हैं।
        </Paragraph>
        <List>
          <ListItem>सीधी बुवाई या न्यूनतम जुताई तकनीकों का उपयोग करें।</ListItem>
          <ListItem>फसल अवशेषों को सतह पर छोड़ दें ताकि मिट्टी की सुरक्षा हो।</ListItem>
          <ListItem>कवर क्रॉप्स का उपयोग करें ताकि मिट्टी की सतह हमेशा ढकी रहे।</ListItem>
          <ListItem>रोटेशनल ग्रेजिंग का उपयोग करें यदि पशुधन शामिल है।</ListItem>
        </List>
      </InfoSection>

      <InfoSection>
        <SubTitle>6. पोषक तत्व प्रबंधन</SubTitle>
        <Paragraph>
          संतुलित पोषक तत्व प्रबंधन स्वस्थ फसल विकास और दीर्घकालिक मिट्टी की उर्वरता के लिए महत्वपूर्ण है।
        </Paragraph>
        <List>
          <ListItem>मिट्टी परीक्षण के आधार पर उर्वरकों का उपयोग करें।</ListItem>
          <ListItem>जैविक और अकार्बनिक उर्वरकों का संयोजन उपयोग करें।</ListItem>
          <ListItem>धीमी गति से रिलीज होने वाले उर्वरकों का उपयोग करें ताकि पोषक तत्वों का रिसाव कम हो।</ListItem>
          <ListItem>फसल की आवश्यकता के अनुसार उर्वरकों का समय और मात्रा निर्धारित करें।</ListItem>
        </List>
      </InfoSection>

      <InfoSection>
        <SubTitle>7. जैव विविधता को बढ़ावा देना</SubTitle>
        <Paragraph>
          मिट्टी में जैव विविधता को बढ़ावा देना मिट्टी के स्वास्थ्य को बेहतर बनाने का एक प्रभावी तरीका है। यह पोषक तत्व चक्रण, रोग नियंत्रण और मिट्टी की संरचना में सुधार करता है।
        </Paragraph>
        <List>
          <ListItem>विभिन्न प्रकार के सूक्ष्मजीवों को बढ़ावा देने के लिए कंपोस्ट चाय या जैव उर्वरकों का उपयोग करें।</ListItem>
          <ListItem>फसल विविधता बढ़ाएं, इंटरक्रॉपिंग और मिश्रित खेती का अभ्यास करें।</ListItem>
          <ListItem>खेत के किनारों पर स्थानीय पौधों और फूलों को उगाएं ताकि लाभदायक कीड़ों को आकर्षित किया जा सके।</ListItem>
          <ListItem>रासायनिक कीटनाशकों के उपयोग को कम करें जो मिट्टी के जीवों को नुकसान पहुंचा सकते हैं।</ListItem>
        </List>
      </InfoSection>

      <InfoSection>
        <SubTitle>8. pH संतुलन</SubTitle>
        <Paragraph>
          मिट्टी का सही pH स्तर पोषक तत्वों की उपलब्धता और सूक्ष्मजीवों की गतिविधि के लिए महत्वपूर्ण है।
        </Paragraph>
        <List>
          <ListItem>नियमित रूप से मिट्टी के pH की जांच करें।</ListItem>
          <ListItem>अम्लीय मिट्टी के लिए चूना या डोलोमाइट का उपयोग करें।</ListItem>
          <ListItem>क्षारीय मिट्टी के लिए जिप्सम या गंधक का उपयोग करें।</ListItem>
          <ListItem>pH को धीरे-धीरे समायोजित करें, अचानक बदलाव से बचें।</ListItem>
        </List>
      </InfoSection>

      <InfoSection>
        <SubTitle>9. मिट्टी का संरक्षण</SubTitle>
        <Paragraph>
          मिट्टी का संरक्षण करना मिट्टी के क्षरण को रोकने और उसकी गुणवत्ता को बनाए रखने के लिए आवश्यक है।
        </Paragraph>
        <List>
          <ListItem>कंटूर के अनुसार खेती करें ताकि पानी का बहाव कम हो।</ListItem>
          <ListItem>विंडब्रेक लगाएं ताकि हवा से होने वाले क्षरण को रोका जा सके।</ListItem>
          <ListItem>ढाल पर टेरेसिंग करें ताकि मिट्टी का कटाव कम हो।</ListItem>
          <ListItem>जल संग्रहण प्रणालियों का निर्माण करें ताकि वर्षा जल का पुन: उपयोग हो सके।</ListItem>
        </List>
      </InfoSection>
    </Container>
  );
};

export default SoilHealth;
