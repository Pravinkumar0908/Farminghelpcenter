import React, { useState } from 'react';

const FarmerCourse = () => {
  const [activeTab, setActiveTab] = useState('info');

  const tabContent = {
    info: {
      title: 'किसान जानकारी',
      content: 'यहां किसानों के लिए महत्वपूर्ण जानकारी है जो उन्हें अपनी खेती में मदद करेगी।',
      image: 'https://play-lh.googleusercontent.com/iKjaC1HuXK85ypClYhXxiBY2yGde_LC_D-Ihs7veP-ypEEMpgYy9L6E84QAH-EyBFMU'
    },
    problems: {
      title: 'समस्या समाधान',
      content: 'यहां आम किसान समस्याओं और उनके समाधान की सूची है।',
      image: 'https://media.licdn.com/dms/image/D4D12AQGR6meWXW7WEg/article-inline_image-shrink_1000_1488/0/1682406331020?e=1726704000&v=beta&t=-Yo-jZCsiQokNw70xeRasDM6iOnOfELolxaR3ohP-E4'
    },
    course: {
      title: 'ऑनलाइन पाठ्यक्रम',
      content: `
        <h3>किसानों के लिए व्यापक ऑनलाइन पाठ्यक्रम</h3>
        <ol>
          <li><strong>मृदा प्रबंधन:</strong> मिट्टी की गुणवत्ता का परीक्षण, उर्वरक प्रबंधन, जैविक खेती</li>
          <li><strong>फसल चक्र:</strong> उचित फसल चक्र का महत्व, विभिन्न फसलों के लिए अनुशंसित चक्र</li>
          <li><strong>जल प्रबंधन:</strong> सिंचाई तकनीकें, जल संरक्षण, ड्रिप और स्प्रिंकलर सिंचाई</li>
          <li><strong>कीट और रोग प्रबंधन:</strong> एकीकृत कीट प्रबंधन, जैविक नियंत्रण विधियां</li>
          <li><strong>फसल विविधीकरण:</strong> नकदी फसलें, बागवानी, मिश्रित खेती</li>
          <li><strong>कृषि यंत्रीकरण:</strong> आधुनिक कृषि उपकरण और मशीनों का उपयोग</li>
          <li><strong>बाजार संबंध:</strong> उपज का विपणन, मूल्य निर्धारण, भंडारण तकनीकें</li>
          <li><strong>सरकारी योजनाएं:</strong> किसानों के लिए उपलब्ध विभिन्न सरकारी योजनाएं और सब्सिडी</li>
          <li><strong>जलवायु परिवर्तन अनुकूलन:</strong> जलवायु परिवर्तन के प्रभाव और अनुकूलन रणनीतियां</li>
          <li><strong>वित्तीय प्रबंधन:</strong> बजट बनाना, ऋण प्रबंधन, बीमा</li>
        </ol>
        <p>प्रत्येक मॉड्यूल में वीडियो व्याख्यान, पठन सामग्री, और व्यावहारिक अभ्यास शामिल होंगे।</p>
      `,
      image: 'https://www.shutterstock.com/image-photo/young-farmer-doing-apprenticeship-hydroponics-260nw-2052556082.jpg'
    },
    resources: {
      title: 'उपयोगी संसाधन',
      content: `
        <h3>किसानों के लिए महत्वपूर्ण संसाधन</h3>
        <ul>
          <li>कृषि विज्ञान केंद्रों की सूची और संपर्क जानकारी</li>
          <li>मौसम पूर्वानुमान और फसल सलाह सेवाएं</li>
          <li>कृषि विशेषज्ञों से ऑनलाइन परामर्श</li>
          <li>किसान समुदाय फोरम - अनुभव और ज्ञान साझा करें</li>
          <li>कृषि संबंधित मोबाइल ऐप्स की सूची</li>
          <li>ऑनलाइन बाजार मूल्य जानकारी</li>
          <li>कृषि विस्तार साहित्य और पुस्तिकाएं</li>
        </ul>
      `,
      image: 'https://extension.umd.edu/sites/extension.umd.edu/files/styles/optimized/public/2021-02/equipment.jpg?itok=0cNH4SQc'
    }
  };

  const styles = {
    farmerCourse: {
      maxWidth: '800px',
      margin: '0 auto',
      marginTop: '100px',  // यहां मार्जिन टॉप जोड़ा गया है
      fontFamily: 'Arial, sans-serif',
      padding: '20px',
      backgroundColor: '#f0f8ff',
      borderRadius: '10px',
      boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    },
    // बाकी स्टाइल्स यथावत रहेंगे...

    nav: {
      display: 'flex',
      justifyContent: 'space-around',
      marginBottom: '20px',
      backgroundColor: '#4CAF50',
      padding: '10px',
      borderRadius: '5px',
    },
    button: {
      padding: '10px 20px',
      fontSize: '16px',
      backgroundColor: '#4CAF50',
      color: 'white',
      border: 'none',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
      borderRadius: '5px',
    },
    activeButton: {
      backgroundColor: '#45a049',
      boxShadow: '0 0 5px rgba(0,0,0,0.2)',
    },
    content: {
      backgroundColor: 'white',
      padding: '20px',
      borderRadius: '5px',
      boxShadow: '0 0 5px rgba(0,0,0,0.1)',
    },
    image: {
      maxWidth: '100%',
      height: 'auto',
      display: 'block',
      margin: '20px auto',
      borderRadius: '5px',
      boxShadow: '0 0 5px rgba(0,0,0,0.2)',
    },
    heading: {
      color: '#333',
      borderBottom: '2px solid #4CAF50',
      paddingBottom: '10px',
    },
    paragraph: {
      lineHeight: '1.6',
      color: '#444',
    },
    list: {
      marginLeft: '20px',
      lineHeight: '1.6',
      color: '#444',
    },
  };

  return (
    <div style={styles.farmerCourse}>
      <nav style={styles.nav}>
        {Object.keys(tabContent).map((tab) => (
          <button
            key={tab}
            style={{
              ...styles.button,
              ...(activeTab === tab ? styles.activeButton : {}),
            }}
            onClick={() => setActiveTab(tab)}
          >
            {tabContent[tab].title}
          </button>
        ))}
      </nav>
      <div style={styles.content}>
        <h2 style={styles.heading}>{tabContent[activeTab].title}</h2>
        <div 
          dangerouslySetInnerHTML={{ __html: tabContent[activeTab].content }} 
          style={styles.paragraph}
        />
        <img
          src={tabContent[activeTab].image}
          alt={tabContent[activeTab].title}
          style={styles.image}
        />
      </div>
    </div>
  );
};

export default FarmerCourse;