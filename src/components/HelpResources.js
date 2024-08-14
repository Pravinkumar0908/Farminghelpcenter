import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';

const NavContainer = styled.nav`
  background-color: #f0f0f0;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`;

const NavList = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-around;
  padding: 0;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const NavItem = styled(motion.li)`
  cursor: pointer;
  padding: 0.5rem;
  margin: 0.25rem;
  border-radius: 4px;
  background-color: #ffffff;
  &:hover {
    background-color: #e0e0e0;
  }
`;

const ContentContainer = styled(motion.div)`
  background-color: #ffffff;
  padding: 1rem;
  margin-top: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const ImagePlaceholder = styled.div`
  background-color: #e0e0e0;
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  border-radius: 8px;
`;

const HelpResources = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const navItems = [
 
    {
      title: "उपयोगकर्ता मार्गदर्शिका",
      content: `हमारी विस्तृत उपयोगकर्ता मार्गदर्शिका आपको हमारी सेवाओं का अधिकतम लाभ उठाने में मदद करेगी। यह सभी सुविधाओं और प्रक्रियाओं को कवर करती है।
      \n\nअध्याय शामिल हैं:
      \n1. **परिचय:** हमारी सेवाओं और उनके लाभों का संक्षिप्त अवलोकन।
      \n2. **प्रारंभ करें:** एक नया खाता कैसे बनाएं और अपना प्रोफ़ाइल सेट करें।
      \n3. **नेविगेशन:** हमारे प्लेटफ़ॉर्म के विभिन्न अनुभागों के माध्यम से नेविगेट करने के तरीके।
      \n4. **विशेषताएं:** सभी प्रमुख विशेषताओं और उनका उपयोग कैसे करें का विस्तृत विवरण।
      \n5. **समस्या निवारण:** सामान्य समस्याओं और उनके समाधान।
      \n\nअधिक जानकारी के लिए हमारी [उपयोगकर्ता मार्गदर्शिका](https://example.com/user-guide) देखें।`
    },
    {
      title: "संपर्क करें",
      content: `हमसे संपर्क करने के लिए, कृपया support@example.com पर ईमेल करें या +91 1234567890 पर कॉल करें। हम 24/7 उपलब्ध हैं।
      \n\nआप हमारी सेवाओं, शिकायतों, या सुझावों के बारे में किसी भी प्रकार की सहायता के लिए हमसे संपर्क कर सकते हैं।
      \n\nहमारा पता:
      \n**मुख्य कार्यालय:**
      \n123, सेवा मार्ग, नई दिल्ली, भारत
      \n\n**कॉल सेंटर:**
      \n- सोमवार से शुक्रवार: 9:00 AM - 6:00 PM
      \n- सप्ताहांत और सार्वजनिक छुट्टियाँ: बंद
      \n\nहमारे सोशल मीडिया हैंडल:
      \n- [फेसबुक](https://facebook.com)
      \n- [ट्विटर](https://twitter.com)
      \n- [लिंक्डइन](https://linkedin.com)`
    },
    {
      title: "हमारे बारे में",
      content: `हम एक प्रतिबद्ध टीम हैं जो उच्च गुणवत्ता वाली सेवाएं प्रदान करने के लिए काम करती है। हमारा मिशन हमारे ग्राहकों की जरूरतों को पूरा करना है।
      \n\nहमारी टीम में विशेषज्ञों की एक विविध श्रेणी शामिल है, जिनके पास विभिन्न क्षेत्रों में अनुभव है। हम नवीनतम तकनीकों और प्रथाओं का उपयोग करते हुए उत्कृष्ट सेवाएं प्रदान करने के लिए समर्पित हैं।
      \n\nहमारा मिशन:
      \n1. **ग्राहक संतुष्टि:** हमारे ग्राहकों की संतुष्टि हमारी प्राथमिकता है।
      \n2. **नवाचार:** नवीनतम तकनीकों का उपयोग करके उन्नत समाधान प्रदान करना।
      \n3. **सततता:** पर्यावरणीय स्थिरता के साथ जिम्मेदार व्यावसायिक प्रथाओं को बढ़ावा देना।
      \n4. **समुदाय:** हमारे समुदायों में योगदान और उन्हें सशक्त बनाना।
      \n\nहमारे बारे में अधिक जानने के लिए हमारी [वेबसाइट](https://example.com/about) पर जाएं।`
    },
    {
      title: "सामान्य प्रश्न",
      content: `हमारे सामान्य प्रश्न अनुभाग में आपके अधिकांश प्रश्नों के उत्तर मिल जाएंगे। यदि आपको अतिरिक्त सहायता की आवश्यकता है, तो कृपया हमसे संपर्क करें।
      \n\n**सामान्य प्रश्न:**
      \n1. **मैं अपना खाता कैसे बनाऊं?**
      \n- आप हमारी वेबसाइट के होमपेज पर "साइन अप" बटन पर क्लिक करके एक नया खाता बना सकते हैं।
      \n2. **क्या मैं अपना पासवर्ड रीसेट कर सकता हूँ?**
      \n- हां, पासवर्ड रीसेट करने के लिए "पासवर्ड भूल गए" लिंक पर क्लिक करें और निर्देशों का पालन करें।
      \n3. **क्या आप 24/7 सहायता प्रदान करते हैं?**
      \n- हां, हमारा समर्थन केंद्र 24/7 उपलब्ध है।
      \n4. **क्या आपकी सेवाएं अंतरराष्ट्रीय स्तर पर उपलब्ध हैं?**
      \n- हां, हम वैश्विक ग्राहकों को सेवाएं प्रदान करते हैं।
      \n5. **मैं अपने खाते की सुरक्षा कैसे सुनिश्चित कर सकता हूँ?**
      \n- मजबूत पासवर्ड का उपयोग करें और इसे नियमित रूप से बदलें। कभी भी अपने लॉगिन विवरण को दूसरों के साथ साझा न करें।
      \n\nअधिक सामान्य प्रश्न देखने के लिए, कृपया हमारे [सामान्य प्रश्न पृष्ठ](https://example.com/faq) पर जाएं।`
    },
    {
      title: "कृषि मोबाइल ऐप आ रहा है",
      content: `
      हमारा कृषि मोबाइल ऐप जल्द ही लॉन्च होने वाला है! इस नए विभाग में आपको निम्नलिखित सुविधाएँ मिलेंगी:

      1. **मौसम पूर्वानुमान:** आपके क्षेत्र के लिए विशेष कृषि-संबंधित मौसम जानकारी।
      2. **फसल प्रबंधन:** अपनी फसलों की निगरानी और प्रबंधन के लिए उपकरण।
      3. **बाजार मूल्य:** वर्तमान बाजार मूल्यों और रुझानों की जानकारी।
      4. **किसान समुदाय:** अन्य किसानों से जुड़ने और अनुभव साझा करने का मंच।
      5. **विशेषज्ञ सलाह:** कृषि विशेषज्ञों से सीधे मार्गदर्शन।
      6. **सरकारी योजनाएँ:** किसानों के लिए उपलब्ध विभिन्न सरकारी योजनाओं की जानकारी।
      7. **प्रशिक्षण वीडियो:** आधुनिक कृषि तकनीकों पर शैक्षिक वीडियो।
      8. **उपज बीमा:** फसल बीमा और जोखिम प्रबंधन के विकल्प।

      कृपया इस नई सुविधा के शुभारंभ के लिए हमारे साथ बने रहें। अधिक जानकारी के लिए जल्द ही अपडेट किया जाएगा।
      `
    }
  ];

  return (
    <NavContainer>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        सहायता और संसाधन
      </motion.h2>
      <NavList>
        {navItems.map((item, index) => (
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
      <AnimatePresence mode="wait">
        {selectedItem && (
          <ContentContainer
            key={selectedItem.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <h3>{selectedItem.title}</h3>
            {selectedItem.title === "कृषि मोबाइल ऐप" && (
              <ImagePlaceholder>
                कृषि इमेज प्लेसहोल्डर
              </ImagePlaceholder>
            )}
            <p>{selectedItem.content}</p>
          </ContentContainer>
        )}
      </AnimatePresence>
    </NavContainer>
  );
};

export default HelpResources;