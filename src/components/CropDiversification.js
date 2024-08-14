import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const CropDiversification = () => {
  const [activeTab, setActiveTab] = useState('info');
  const [searchTerm, setSearchTerm] = useState('');
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [expandedInfo, setExpandedInfo] = useState(null);

  const API_KEY = 'AIzaSyDUKcLwSmQ3bHMN8jZU4-5bm2DpeVOh0E8'; // अपनी YouTube API key यहाँ डालें

  const diversificationInfo = [
    {
      title: 'फसल विविधीकरण का महत्व',
      content: 'फसल विविधीकरण किसानों के लिए कई लाभ प्रदान करता है।',
      details: [
        'मिट्टी की उर्वरता में सुधार',
        'कीट और रोग प्रबंधन में मदद',
        'आय के स्रोतों में विविधता',
        'बाजार जोखिम को कम करना',
        'पोषण सुरक्षा में वृद्धि'
      ],
      image: 'https://example.com/crop-diversification.jpg'
    },
    {
      title: 'विविधीकरण के तरीके',
      content: 'कई तरीके हैं जिनसे आप अपनी खेती में विविधता ला सकते हैं।',
      details: [
        'फसल रोटेशन',
        'मिश्रित फसल',
        'अंतर-फसल',
        'बहु-स्तरीय खेती',
        'एग्रोफोरेस्ट्री'
      ],
      image: 'https://example.com/diversification-methods.jpg'
    },
    {
      title: 'चुनौतियाँ और समाधान',
      content: 'फसल विविधीकरण में कुछ चुनौतियाँ हो सकती हैं, लेकिन उनके समाधान भी हैं।',
      details: [
        'चुनौती: नई फसलों की जानकारी की कमी - समाधान: प्रशिक्षण और शिक्षा',
        'चुनौती: बाजार की अनिश्चितता - समाधान: बाजार अध्ययन और अनुबंध खेती',
        'चुनौती: अतिरिक्त निवेश - समाधान: सरकारी योजनाओं का लाभ उठाना',
        'चुनौती: जल प्रबंधन - समाधान: कुशल सिंचाई तकनीकों का उपयोग',
        'चुनौती: श्रम की कमी - समाधान: मशीनीकरण और समुदाय-आधारित खेती'
      ],
      image: 'https://example.com/challenges-solutions.jpg'
    }
  ];

  const courses = [
    {
      title: 'फसल विविधीकरण का परिचय',
      duration: '2 सप्ताह',
      description: 'इस कोर्स में आप सीखेंगे:',
      topics: [
        'विविधीकरण के सिद्धांत',
        'विभिन्न फसल प्रणालियाँ',
        'मृदा स्वास्थ्य और विविधीकरण',
        'आर्थिक लाभ की गणना'
      ]
    },
    {
      title: 'उन्नत फसल विविधीकरण तकनीकें',
      duration: '3 सप्ताह',
      description: 'इस कोर्स में शामिल हैं:',
      topics: [
        'जलवायु-स्मार्ट विविधीकरण',
        'जैविक विविधीकरण पद्धतियाँ',
        'बाजार-उन्मुख फसल चयन',
        'रिस्क मैनेजमेंट स्ट्रेटेजीज'
      ]
    }
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
          q: `फसल विविधीकरण ${searchTerm}`,
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
            {diversificationInfo.map((item, index) => (
              <motion.div key={index} className="info-item" whileHover={{ scale: 1.02 }} style={styles.infoItem}>
                <h3 style={styles.infoTitle}>{item.title}</h3>
                <p>{item.content}</p>
                <button onClick={() => setExpandedInfo(expandedInfo === index ? null : index)} style={styles.detailsButton}>
                  {expandedInfo === index ? 'विवरण छुपाएं' : 'और जानें'}
                </button>
                {expandedInfo === index && (
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
                  {course.topics.map((topic, i) => (
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
              placeholder="फसल विविधीकरण वीडियो खोजें..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={styles.searchInput}
            />
            {loading ? (
              <p>लोड हो रहा है...</p>
            ) : (
              <div style={styles.videoGrid}>
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
    <div className="crop-diversification" style={styles.cropDiversification}>
      <h1 style={styles.h1}>फसल विविधीकरण: समृद्धि की कुंजी</h1>
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
  cropDiversification: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  h1: {
    textAlign: 'center',
    color: '#2E7D32',
    marginBottom: '20px',
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
    marginBottom: '20px',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  },
  infoTitle: {
    color: '#2E7D32',
    borderBottom: '2px solid #2E7D32',
    paddingBottom: '10px',
    marginBottom: '10px',
  },
  detailsButton: {
    backgroundColor: '#81C784',
    color: 'white',
    border: 'none',
    padding: '8px 15px',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '10px',
  },
  infoImage: {
    width: '100%',
    maxWidth: '400px',
    borderRadius: '5px',
    marginTop: '15px',
  },
  courseItem: {
    backgroundColor: 'white',
    marginBottom: '20px',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  },
  courseTitle: {
    color: '#1565C0',
    borderBottom: '2px solid #1565C0',
    paddingBottom: '10px',
    marginBottom: '10px',
  },
  enrollButton: {
    backgroundColor: '#1E88E5',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '15px',
  },
  searchInput: {
    width: '100%',
    padding: '10px',
    marginBottom: '20px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ddd',
  },
  videoGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
  },
  videoItem: {
    backgroundColor: 'white',
    padding: '15px',
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
    color: '#333',
  },
};

export default CropDiversification;