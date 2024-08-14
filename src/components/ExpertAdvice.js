import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const ExpertAdvice = () => {
  const [activeTab, setActiveTab] = useState('info');
  const [searchTerm, setSearchTerm] = useState('');
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [expandedInfo, setExpandedInfo] = useState(null);

  const API_KEY = 'AIzaSyDUKcLwSmQ3bHMN8jZU4-5bm2DpeVOh0E8'; // Replace with your actual YouTube API key

  const farmerInfo = [
    {
      title: 'मृदा स्वास्थ्य प्रबंधन',
      content: 'मिट्टी की जांच करवाएं और उचित उर्वरक का उपयोग करें।',
      details: [
        'नियमित रूप से मिट्टी की जांच करवाएं (हर 2-3 साल में)',
        'जैविक पदार्थों को मिट्टी में मिलाएं (जैसे कंपोस्ट, गोबर की खाद)',
        'फसल चक्र का पालन करें',
        'मिट्टी के pH स्तर को संतुलित रखें',
        'मिट्टी की संरचना सुधारने के लिए हरी खाद का उपयोग करें'
      ],
      image: 'https://example.com/soil-health-management.jpg'
    },
    {
      title: 'जल प्रबंधन',
      content: 'डिप इरिगेशन या स्प्रिंकलर सिस्टम का उपयोग करें।',
      details: [
        'डिप इरिगेशन: पानी की बचत और फसल की बेहतर वृद्धि',
        'स्प्रिंकलर सिस्टम: समान वितरण और श्रम की बचत',
        'रेनवाटर हार्वेस्टिंग तकनीकों को अपनाएं',
        'फसल के अनुसार सिंचाई का समय निर्धारित करें',
        'मल्चिंग का उपयोग करके मिट्टी की नमी बनाए रखें'
      ],
      image: 'https://example.com/water-management.jpg'
    },
    {
      title: 'फसल चक्र',
      content: 'फसलों का रोटेशन करें ताकि मिट्टी की उर्वरता बनी रहे।'
    },
    {
      title: 'कीट नियंत्रण',
      content: 'एकीकृत कीट प्रबंधन (IPM) तकनीकों का उपयोग करें।'
    },
    {
      title: 'जैविक खेती',
      content: 'जैविक खाद और प्राकृतिक कीटनाशकों का उपयोग करें।'
    },
  ];

  const courses = [
    {
      title: 'आधुनिक कृषि तकनीक',
      duration: '4 सप्ताह',
      description: 'इस कोर्स में आप सीखेंगे:',
      topics: [
        'प्रिसिजन फार्मिंग',
        'हाइड्रोपोनिक्स और एरोपोनिक्स',
        'ड्रोन का कृषि में उपयोग',
        'IoT आधारित खेती प्रबंधन'
      ]
    },
    {
      title: 'जैविक खेती का परिचय',
      duration: '3 सप्ताह',
      description: 'इस कोर्स में शामिल हैं:',
      topics: [
        'जैविक खाद बनाना',
        'प्राकृतिक कीट नियंत्रण',
        'जैविक प्रमाणीकरण प्रक्रिया',
        'जैविक उत्पादों का विपणन'
      ]
    },
    { title: 'कृषि विपणन रणनीतियाँ', duration: '2 सप्ताह' },
    { title: 'सिंचाई प्रबंधन', duration: '3 सप्ताह' },
    { title: 'फसल सुरक्षा', duration: '4 सप्ताह' },
  ];

  useEffect(() => {
    if (activeTab === 'videos' && searchTerm) {
      searchVideos();
    }
  }, [activeTab, searchTerm]);

  const searchVideos = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          part: 'snippet',
          q: `किसान ${searchTerm}`,
          type: 'video',
          maxResults: 10,
          key: API_KEY,
        },
      });
      setVideos(response.data.items);
    } catch (error) {
      console.error('Error searching videos:', error);
    }
    setLoading(false);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'info':
        return (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            {farmerInfo.map((item, index) => (
              <motion.div key={index} className="info-item" whileHover={{ scale: 1.02 }} style={styles.infoItem}>
                <h3 style={styles.infoTitle}>{item.title}</h3>
                <p>{item.content}</p>
                <button onClick={() => setExpandedInfo(expandedInfo === index ? null : index)} style={styles.detailsButton}>
                  {expandedInfo === index ? 'विवरण छुपाएं' : 'और जानें'}
                </button>
                {expandedInfo === index && item.details && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                    <img src={item.image} alt={item.title} style={styles.infoImage} />
                    <ul>
                      {item.details.map((detail, i) => (
                        <li key={i}>{detail}</li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        );
      case 'courses':
        return (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            {courses.map((course, index) => (
              <motion.div key={index} className="course-item" whileHover={{ scale: 1.02 }} style={styles.courseItem}>
                <h3 style={styles.courseTitle}>{course.title}</h3>
                <p>अवधि: {course.duration}</p>
                <p>{course.description}</p>
                <ul>
                  {course.topics?.map((topic, i) => (
                    <li key={i}>{topic}</li>
                  ))}
                </ul>
                <button style={styles.enrollButton}>नामांकन करें</button>
              </motion.div>
            ))}
          </motion.div>
        );
      case 'videos':
        return (
          <div>
            <input
              type="text"
              placeholder="वीडियो खोजें..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
              style={styles.searchInput}
            />
            {loading ? (
              <p>लोड हो रहा है...</p>
            ) : (
              <div className="video-grid" style={styles.videoGrid}>
                {videos.map((video) => (
                  <motion.div key={video.id.videoId} className="video-item" whileHover={{ scale: 1.05 }} style={styles.videoItem}>
                    <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} style={styles.videoItemImg} />
                    <h3 style={styles.videoItemH3}>{video.snippet.title}</h3>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="expert-advice" style={styles.expertAdvice}>
      <h1 style={styles.h1}>किसान मित्र: विशेषज्ञ सलाह</h1>
      <div className="tab-container" style={styles.tabContainer}>
        <button onClick={() => setActiveTab('info')} style={activeTab === 'info' ? {...styles.tabButton, ...styles.activeTab} : styles.tabButton}>जानकारी</button>
        <button onClick={() => setActiveTab('courses')} style={activeTab === 'courses' ? {...styles.tabButton, ...styles.activeTab} : styles.tabButton}>पाठ्यक्रम</button>
        <button onClick={() => setActiveTab('videos')} style={activeTab === 'videos' ? {...styles.tabButton, ...styles.activeTab} : styles.tabButton}>वीडियो</button>
      </div>
      <div className="content-container" style={styles.contentContainer}>
        {renderContent()}
      </div>
    </div>
  );
};

const styles = {
  expertAdvice: {
    maxWidth: '1200px',
    margin: '0 auto',
    marginTop: '100px',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  h1: {
    textAlign: 'center',
    color: '#4CAF50',
  },
  tabContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px',
  },
  tabButton: {
    backgroundColor: '#4CAF50',
    border: 'none',
    color: 'white',
    padding: '10px 20px',
    margin: '0 5px',
    cursor: 'pointer',
    borderRadius: '5px',
    transition: 'background-color 0.3s',
  },
  activeTab: {
    backgroundColor: '#45a049',
  },
  contentContainer: {
    backgroundColor: '#f9f9f9',
    padding: '20px',
    borderRadius: '5px',
  },
  infoItem: {
    backgroundColor: 'white',
    marginBottom: '10px',
    padding: '15px',
    borderRadius: '5px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  },
  courseItem: {
    backgroundColor: 'white',
    marginBottom: '10px',
    padding: '15px',
    borderRadius: '5px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  },
  searchInput: {
    width: '100%',
    padding: '10px',
    marginBottom: '20px',
    fontSize: '16px',
  },
  videoGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
  },
  videoItem: {
    backgroundColor: 'white',
    padding: '10px',
    borderRadius: '5px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  },
  videoItemImg: {
    width: '100%',
    borderRadius: '5px',
  },
  videoItemH3: {
    marginTop: '10px',
    fontSize: '14px',
  },
  infoTitle: {
    color: '#2E7D32',
    borderBottom: '2px solid #2E7D32',
    paddingBottom: '5px',
  },
  detailsButton: {
    backgroundColor: '#81C784',
    color: 'white',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '10px',
  },
  infoImage: {
    width: '100%',
    maxWidth: '300px',
    borderRadius: '5px',
    marginTop: '10px',
  },
  courseTitle: {
    color: '#1565C0',
    borderBottom: '2px solid #1565C0',
    paddingBottom: '5px',
  },
  enrollButton: {
    backgroundColor: '#1E88E5',
    color: 'white',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '15px',
  },
};

export default ExpertAdvice;
 