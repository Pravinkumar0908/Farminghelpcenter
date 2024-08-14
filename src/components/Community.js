import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  margin-top: 100px;
  padding: 2rem;
  font-family: 'Arial', sans-serif;
`;

const Title = styled(motion.h1)`
text-align: center;
color: #2c3e50;
font-size: 2em;
margin-bottom: 20px;
`;

const NavContainer = styled.nav`
  background-color: #f0f0f0;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 2rem;
`;

const NavList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const NavItem = styled(motion.li)`
  cursor: pointer;
  padding: 1rem;
  flex-grow: 1;
  text-align: center;
  background-color: #e0e0e0;
  &:hover {
    background-color: #d0d0d0;
  }
`;

const ContentContainer = styled(motion.div)`
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const CommunityAndServices = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const items = [
    {
      title: "सुविधायें",
      path: "/services",
      content: "हमारी समुदाय सुविधाओं में शामिल हैं:\n\n" +
        "1. आधुनिक सामुदायिक केंद्र\n" +
        "2. कृषि प्रशिक्षण केंद्र\n" +
        "3. किसान सहायता केंद्र\n" +
        "4. मौसम जानकारी केंद्र\n" +
        "5. कृषि उपकरण प्रदर्शनी क्षेत्र\n\n" +
        "इन सुविधाओं का उपयोग करने के लिए, कृपया हमारी वेबसाइट पर जाएँ और अपना समय आरक्षित करें।"
    },
    {
      title: "सफलता की कहानियाँ",
      content: "हमारे समुदाय के सदस्यों की कुछ प्रेरणादायक सफलता कहानियाँ:\n\n" +
        "1. बन्ना लाल : एक युवा किसान, जिन्होंने हमारी वेबसाइट की शुरुआत की। प्रवीण ने अपने गाँव के किसानों की समस्याओं को देखते हुए एक ऑनलाइन प्लेटफॉर्म बनाने का फैसला किया। उन्होंने खुद से सीखकर वेब डेवलपमेंट की और 6 महीने की कड़ी मेहनत के बाद 'किसान मित्र' नाम की वेबसाइट लॉन्च की। इस वेबसाइट के माध्यम से किसान आसानी से मौसम की जानकारी, फसल की कीमतें और कृषि विशेषज्ञों की सलाह प्राप्त कर सकते हैं।\n\n" +
        "2. रामदयाल बैरवा: एक किसान, जिन्होंने हमारे जैविक खेती कार्यक्रम में भाग लेकर अपनी उपज को दोगुना किया और अब वे अपने गाँव में अन्य महिला किसानों को प्रशिक्षित कर रही हैं।\n\n" +
        "3. रमेश यादव: एक पशुपालक, जिन्होंने हमारे पशु स्वास्थ्य शिविर में भाग लेकर अपने पशुधन की उत्पादकता में 40% की वृद्धि की।\n\n" +
        "इन कहानियों के बारे में अधिक जानने के लिए, हमारी वेबसाइट पर 'सफलता की कहानियाँ' अनुभाग देखें।"
    },
    {
      title: "नवीनतम कृषि तकनीक",
      content: "हमारे समुदाय केंद्र में हाल ही में जोड़ी गई नवीनतम कृषि तकनीकें:\n\n" +
        "1. ड्रोन तकनीक: फसलों की निगरानी और कीटनाशकों के छिड़काव के लिए\n" +
        "2. IoT आधारित सेंसर: मिट्टी की नमी और पोषक तत्वों की निगरानी के लिए\n" +
        "3. मोबाइल ऐप: किसानों को वास्तविक समय में मौसम और बाजार की जानकारी प्रदान करने के लिए\n" +
        "4. वर्टिकल फार्मिंग सेटअप: कम जगह में अधिक उत्पादन के लिए\n" +
        "5. सौर ऊर्जा संचालित सिंचाई प्रणाली: पानी और बिजली की बचत के लिए\n\n" +
        "इन तकनीकों के बारे में अधिक जानने और उनका उपयोग करने के लिए, आप हमारे समुदाय केंद्र में निःशुल्क प्रशिक्षण सत्रों में भाग ले सकते हैं।"
    }
  ];

  return (
    <Container>
      <Title
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        समुदाय और सेवाएँ
      </Title>
      <NavContainer>
        <NavList>
          {items.map((item, index) => (
            <NavItem
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedItem(item)}
            >
              {item.title}
            </NavItem>
          ))}
        </NavList>
      </NavContainer>
      <AnimatePresence mode="wait">
        {selectedItem && (
          <ContentContainer
            key={selectedItem.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <h2>{selectedItem.title}</h2>
            <p style={{ whiteSpace: 'pre-line' }}>{selectedItem.content}</p>
          </ContentContainer>
        )}
      </AnimatePresence>
    </Container>
  );
};

export default CommunityAndServices;