import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const Market = () => {
  const [crops, setCrops] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetching crop data (dummy data used here instead)
    fetchCropData();
  }, []);

  const fetchCropData = async () => {
    // Replace with actual API call or backend data fetching
    const dummyData = [
      { id: 1, name_en: 'Wheat', name_hi: 'गेहूं', price: 2000, category_en: 'Grains', category_hi: 'अनाज', image: 'https://m.media-amazon.com/images/I/51RTBuWYwNL._AC_UF1000,1000_QL80_.jpg' },
      { id: 2, name_en: 'Rice', name_hi: 'चावल', price: 2500, category_en: 'Grains', category_hi: 'अनाज', image: 'https://5.imimg.com/data5/SELLER/Default/2022/1/IC/GH/PF/129803637/ut8nzvjxybdxxagofbxd-jpg-500x500.jpg' },
      { id: 3, name_en: 'Tomato', name_hi: 'टमाटर', price: 40, category_en: 'Vegetables', category_hi: 'सब्जियां', image: 'https://www.1mg.com/hi/patanjali/wp-content/uploads/2018/11/Tomatoes.png' },
      { id: 4, name_en: 'Potato', name_hi: 'आलू', price: 25, category_en: 'Vegetables', category_hi: 'सब्जियां', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoGK6-9LeXVqmxPtmi8cmtVQsFjD1UL4-VMA&s' },
      { id: 5, name_en: 'Apple', name_hi: 'सेब', price: 150, category_en: 'Fruits', category_hi: 'फल', image: 'https://images.unsplash.com/photo-1581090701329-3a1efb49d4f5' },
      { id: 6, name_en: 'Orange', name_hi: 'संतरा', price: 120, category_en: 'Fruits', category_hi: 'फल', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuIg-NlWsGyHPdsYHRMPHoynmyVvtx9GLNRA&s' },
      { id: 7, name_en: 'Banana', name_hi: 'केला', price: 40, category_en: 'Fruits', category_hi: 'फल', image: 'https://images.unsplash.com/photo-1576181850973-85f83e9b5c4e' },
      { id: 8, name_en: 'Mango', name_hi: 'आम', price: 300, category_en: 'Fruits', category_hi: 'फल', image: 'https://images.unsplash.com/photo-1594485816056-d61f8379b7d5' },
      { id: 9, name_en: 'Spinach', name_hi: 'पालक', price: 30, category_en: 'Vegetables', category_hi: 'सब्जियां', image: 'https://images.unsplash.com/photo-1560253023-72e023e27158' },
      { id: 10, name_en: 'Cabbage', name_hi: 'पत्ता गोभी', price: 25, category_en: 'Vegetables', category_hi: 'सब्जियां', image: 'https://images.unsplash.com/photo-1576175805736-65d2f8a33e11' },
      { id: 11, name_en: 'Broccoli', name_hi: 'ब्रोकोली', price: 50, category_en: 'Vegetables', category_hi: 'सब्जियां', image: 'https://images.unsplash.com/photo-1547496506-c91db1255c09' },
      { id: 12, name_en: 'Pumpkin', name_hi: 'कद्दू', price: 35, category_en: 'Vegetables', category_hi: 'सब्जियां', image: 'https://images.unsplash.com/photo-1600787679451-c3804f500dd0' },
      { id: 13, name_en: 'Raspberry', name_hi: 'रस्पबेरी', price: 500, category_en: 'Fruits', category_hi: 'फल', image: 'https://images.unsplash.com/photo-1560448203-799a640e83e1' },
      { id: 14, name_en: 'Blueberry', name_hi: 'ब्लूबेरी', price: 400, category_en: 'Fruits', category_hi: 'फल', image: 'https://images.unsplash.com/photo-1553816091-8fbc7b1e2d36' },
      { id: 15, name_en: 'Chickpeas', name_hi: 'चने', price: 80, category_en: 'Pulses', category_hi: 'दाल', image: 'https://images.unsplash.com/photo-1593720213426-e2891efb1180' },
      { id: 16, name_en: 'Lentils', name_hi: 'मसूर', price: 100, category_en: 'Pulses', category_hi: 'दाल', image: 'https://images.unsplash.com/photo-1611148628208-2754ceab2fb7' },
      // Add more pulses or daal as needed
    ];

    setCrops(dummyData);
    setCategories(['all', ...new Set(dummyData.map(crop => crop.category_hi))]);
  };

  const filteredCrops = crops.filter(crop =>
    (selectedCategory === 'all' || crop.category_hi === selectedCategory) &&
    (crop.name_en.toLowerCase().includes(searchTerm.toLowerCase()) || crop.name_hi.includes(searchTerm))
  );

  return (
    <MarketContainer>
      <Title>कृषि बाजार जानकारी</Title>

      <SearchBar
        type="text"
        placeholder="फसल खोजें..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <CategoryContainer>
        {categories.map(category => (
          <CategoryButton
            key={category}
            onClick={() => setSelectedCategory(category)}
            isSelected={category === selectedCategory}
          >
            {category}
          </CategoryButton>
        ))}
      </CategoryContainer>

      <CropGrid>
        {filteredCrops.map(crop => (
          <motion.div
            key={crop.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <CropCard>
              <CropImage src={crop.image} alt={crop.name_hi} />
              <CropInfo>
                <CropName>{crop.name_hi}</CropName>
                <CropPrice>₹{crop.price}/किलो</CropPrice>
              </CropInfo>
            </CropCard>
          </motion.div>
        ))}
      </CropGrid>
    </MarketContainer>
  );
};

// Styled Components (unchanged from previous code)
const MarketContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h1`
  text-align: center;
  color: #2c3e50;
`;

const SearchBar = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  margin-bottom: 20px;
  border: 2px solid #3498db;
  border-radius: 5px;
`;

const CategoryContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const CategoryButton = styled.button`
  margin: 0 10px;
  padding: 10px 20px;
  background-color: ${props => props.isSelected ? '#3498db' : '#ecf0f1'};
  color: ${props => props.isSelected ? 'white' : '#2c3e50'};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #2980b9;
    color: white;
  }
`;

const CropGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
`;

const CropCard = styled.div`
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const CropImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

const CropInfo = styled.div`
  padding: 15px;
`;

const CropName = styled.h3`
  margin: 0;
  color: #2c3e50;
`;

const CropPrice = styled.p`
  margin: 5px 0 0;
  color: #27ae60;
  font-weight: bold;
`;

export default Market;
