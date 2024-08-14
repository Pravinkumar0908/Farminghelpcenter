import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FarmerVideoTutorials = () => {
  const [videos, setVideos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [playerSize, setPlayerSize] = useState({ width: '640px', height: '360px' });

  const API_KEY = 'AIzaSyDUKcLwSmQ3bHMN8jZU4-5bm2DpeVOh0E8'; // अपनी YouTube API key यहाँ डालें

  const categories = [
    { id: 'all', name: 'सभी' },
    { id: 'soil', name: 'मृदा प्रबंधन' },
    { id: 'crops', name: 'फसल प्रबंधन' },
    { id: 'pests', name: 'कीट नियंत्रण' },
    { id: 'irrigation', name: 'सिंचाई' },
    { id: 'marketing', name: 'कृषि विपणन' },
  ];

  useEffect(() => {
    fetchVideos();
  }, [selectedCategory]);

  const fetchVideos = async () => {
    try {
      const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          part: 'snippet',
          q: `किसान शिक्षा ${selectedCategory !== 'all' ? categories.find(cat => cat.id === selectedCategory).name : ''}`,
          type: 'video',
          maxResults: 10,
          key: API_KEY,
        },
      });
      setVideos(response.data.items);
    } catch (error) {
      console.error('Error fetching videos:', error);
    }
  };

  const handleSearch = async () => {
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
  };

  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  const handleCloseVideo = () => {
    setSelectedVideo(null);
  };

  const handleSizeChange = (e) => {
    const { name, value } = e.target;
    setPlayerSize(prevSize => ({ ...prevSize, [name]: `${value}px` }));
  };

  const styles = {
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      marginTop: '100px',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
    },
    header: {
      textAlign: 'center',
      color: '#4CAF50',
      marginBottom: '20px',
    },
    categoriesContainer: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      marginBottom: '20px',
    },
    categoryButton: {
      margin: '5px',
      padding: '10px 15px',
      backgroundColor: '#4CAF50',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
    searchContainer: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: '20px',
    },
    searchInput: {
      padding: '10px',
      width: '300px',
      fontSize: '16px',
    },
    searchButton: {
      padding: '10px 20px',
      backgroundColor: '#4CAF50',
      color: 'white',
      border: 'none',
      cursor: 'pointer',
    },
    videoGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '20px',
    },
    videoCard: {
      border: '1px solid #ddd',
      borderRadius: '5px',
      overflow: 'hidden',
      cursor: 'pointer',
    },
    videoThumbnail: {
      width: '100%',
      height: 'auto',
    },
    videoTitle: {
      padding: '10px',
      fontSize: '14px',
      fontWeight: 'bold',
    },
    videoPlayer: {
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      padding: '20px',
      zIndex: 1000,
    },
    closeButton: {
      position: 'absolute',
      top: '10px',
      right: '10px',
      background: 'none',
      border: 'none',
      color: 'white',
      fontSize: '24px',
      cursor: 'pointer',
    },
    sizeControls: {
      marginTop: '10px',
      display: 'flex',
      justifyContent: 'center',
      gap: '10px',
    },
    sizeInput: {
      width: '60px',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>किसान वीडियो ट्यूटोरियल</h1>
      
      <div style={styles.categoriesContainer}>
        {categories.map((category) => (
          <button
            key={category.id}
            style={{
              ...styles.categoryButton,
              backgroundColor: selectedCategory === category.id ? '#45a049' : '#4CAF50',
            }}
            onClick={() => setSelectedCategory(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div style={styles.searchContainer}>
        <input
          type="text"
          placeholder="वीडियो खोजें..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={styles.searchInput}
        />
        <button onClick={handleSearch} style={styles.searchButton}>खोजें</button>
      </div>

      <div style={styles.videoGrid}>
        {videos.map((video) => (
          <div key={video.id.videoId} style={styles.videoCard} onClick={() => handleVideoSelect(video)}>
            <img
              src={video.snippet.thumbnails.medium.url}
              alt={video.snippet.title}
              style={styles.videoThumbnail}
            />
            <div style={styles.videoTitle}>{video.snippet.title}</div>
          </div>
        ))}
      </div>

      {selectedVideo && (
        <div style={styles.videoPlayer}>
          <button style={styles.closeButton} onClick={handleCloseVideo}>&times;</button>
          <iframe
            width={playerSize.width}
            height={playerSize.height}
            src={`https://www.youtube.com/embed/${selectedVideo.id.videoId}`}
            title={selectedVideo.snippet.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <div style={styles.sizeControls}>
            <input
              type="number"
              name="width"
              value={parseInt(playerSize.width)}
              onChange={handleSizeChange}
              style={styles.sizeInput}
            />
            <span>x</span>
            <input
              type="number"
              name="height"
              value={parseInt(playerSize.height)}
              onChange={handleSizeChange}
              style={styles.sizeInput}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default FarmerVideoTutorials;