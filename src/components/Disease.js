import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f0f8ff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
`;

const Title = styled.h1`
  text-align: center;
  color: #2c3e50;
  font-size: 2em;
  margin-bottom: 20px;
`;

const CropSelector = styled.select`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: 1px solid #3498db;
  font-size: 1em;
`;

const TabContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
`;

const TabButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  background-color: ${props => props.active ? '#2c3e50' : '#3498db'};
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #2980b9;
    transform: scale(1.05);
  }
`;

const ContentContainer = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 5px rgba(0,0,0,0.1);
  animation: ${fadeIn} 0.5s ease-out;
`;

const CropInfo = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const CropImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
  margin-right: 20px;
`;

const CropDetails = styled.div`
  flex: 1;
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ListItem = styled.li`
  margin-bottom: 15px;
  padding: 10px;
  background-color: #f1f8ff;
  border-radius: 5px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;

  &:hover {
    background-color: #d4e6f1;
    transform: translateX(10px);
  }
`;

const ItemImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 25px;
  margin-right: 10px;
`;

const ItemContent = styled.div`
  flex: 1;
`;

const CropPestDiseaseManagement = ({ crops }) => {
  const [selectedCrop, setSelectedCrop] = useState(Object.keys(crops)[0]);
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    const crop = crops[selectedCrop];

    switch(activeTab) {
      case 'overview':
        return (
          <CropInfo>
            <CropImage src={crop.image} alt={crop.name} />
            <CropDetails>
              <h2>{crop.name}</h2>
              <p><strong>वैज्ञानिक नाम:</strong> {crop.scientificName}</p>
              <p><strong>फसल की अवधि:</strong> {crop.duration}</p>
              <p><strong>उपयुक्त मौसम:</strong> {crop.season}</p>
              <p><strong>औसत उपज:</strong> {crop.yield}</p>
            </CropDetails>
          </CropInfo>
        );
      case 'pests':
      case 'diseases':
        const content = activeTab === 'pests' ? crop.pests : crop.diseases;
        return (
          <List>
            {content.map((item, index) => (
              <ListItem key={index}>
                <ItemImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoS9jUKrgg2A9GHL_oDySi1MxZKAM6fV8fkw&s" alt={item.name} />
                <ItemContent>
                  <strong>{item.name}:</strong> {item.management}
                </ItemContent>
              </ListItem>
            ))}
          </List>
        );
      default:
        return null;
    }
  };

  return (
    <Container>
      <Title>फसल प्रबंधन जानकारी</Title>
      <CropSelector onChange={(e) => setSelectedCrop(e.target.value)}>
        {Object.keys(crops).map(crop => (
          <option key={crop} value={crop}>{crops[crop].name}</option>
        ))}
      </CropSelector>
      <TabContainer>
        <TabButton active={activeTab === 'overview'} onClick={() => setActiveTab('overview')}>
          सामान्य जानकारी
        </TabButton>
        <TabButton active={activeTab === 'pests'} onClick={() => setActiveTab('pests')}>
          कीट प्रबंधन
        </TabButton>
        <TabButton active={activeTab === 'diseases'} onClick={() => setActiveTab('diseases')}>
          रोग प्रबंधन
        </TabButton>
      </TabContainer>
      <ContentContainer>
        {renderContent()}
      </ContentContainer>
    </Container>
  );
};

export default CropPestDiseaseManagement;