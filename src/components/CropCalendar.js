import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const CalendarContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f0f8ff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
`;

const Title = styled.h2`
  text-align: center;
  color: #2c3e50;
  font-size: 2em;
  margin-bottom: 20px;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-bottom: 20px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const NavButton = styled.button`
  padding: 10px 20px;
  margin: 5px;
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

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const ContentContainer = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 5px rgba(0,0,0,0.1);
  animation: ${fadeIn} 0.5s ease-out;
`;

const ContentSection = styled.div`
  margin-bottom: 20px;

  h3 {
    color: #2c3e50;
    border-bottom: 2px solid #3498db;
    padding-bottom: 5px;
  }

  p {
    margin: 10px 0;
    color: #34495e;
  }
`;

const SeasonSelector = styled.select`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: 1px solid #3498db;
  font-size: 1em;
`;

const CropCalendar = ({ crops }) => {
  const [activeSeason, setActiveSeason] = useState('kharif');
  const [activeSection, setActiveSection] = useState('overview');

  const seasons = [
    { id: 'kharif', name: 'खरीफ' },
    { id: 'rabi', name: 'रबी' },
    { id: 'zaid', name: 'जायद' },
  ];

  const sections = [
    { id: 'overview', title: 'सामान्य जानकारी' },
    { id: 'sowing', title: 'बुवाई' },
    { id: 'growth', title: 'वृद्धि अवधि' },
    { id: 'harvest', title: 'कटाई' },
    { id: 'care', title: 'देखभाल' },
  ];

  const renderContent = () => {
    const crop = crops && crops[activeSeason];
    if (!crop) {
      return <ContentSection><p>विवरण उपलब्ध नहीं है</p></ContentSection>;
    }

    switch(activeSection) {
      case 'overview':
        return (
          <ContentSection>
            <h3>{crop.name} की सामान्य जानकारी</h3>
            <p>मौसम: {seasons.find(s => s.id === activeSeason)?.name || 'अनजान'}</p>
            <p>फसल अवधि: {crop.duration} दिन</p>
            <p>अनुकूल मौसम: {crop.suitableWeather}</p>
            <p>अपेक्षित उपज: {crop.expectedYield} प्रति एकड़</p>
          </ContentSection>
        );
      case 'sowing':
        return (
          <ContentSection>
            <h3>बुवाई की जानकारी</h3>
            <p>बुवाई का समय: {crop.sowingTime}</p>
            <p>बीज की मात्रा: {crop.seedQuantity} प्रति एकड़</p>
            <p>बुवाई की विधि: {crop.sowingMethod}</p>
          </ContentSection>
        );
      case 'growth':
        return (
          <ContentSection>
            <h3>वृद्धि अवधि की देखभाल</h3>
            <p>सिंचाई: {crop.irrigationSchedule}</p>
            <p>उर्वरक: {crop.fertilizationSchedule}</p>
            <p>कीट नियंत्रण: {crop.pestControlSchedule}</p>
          </ContentSection>
        );
      case 'harvest':
        return (
          <ContentSection>
            <h3>कटाई की जानकारी</h3>
            <p>कटाई का समय: {crop.harvestTime}</p>
            <p>कटाई के संकेत: {crop.harvestSigns}</p>
            <p>कटाई की विधि: {crop.harvestMethod}</p>
          </ContentSection>
        );
      case 'care':
        return (
          <ContentSection>
            <h3>विशेष देखभाल</h3>
            <p>मिट्टी की तैयारी: {crop.soilPreparation}</p>
            <p>रोग नियंत्रण: {crop.diseaseControl}</p>
            <p>खरपतवार प्रबंधन: {crop.weedManagement}</p>
          </ContentSection>
        );
      default:
        return null;
    }
  };

  return (
    <CalendarContainer>
      <Title>फसल कैलेंडर</Title>
      <SeasonSelector onChange={(e) => setActiveSeason(e.target.value)} value={activeSeason}>
        {seasons.map(season => (
          <option key={season.id} value={season.id}>{season.name}</option>
        ))}
      </SeasonSelector>
      <NavContainer>
        {sections.map(section => (
          <NavButton 
            key={section.id}
            active={activeSection === section.id}
            onClick={() => setActiveSection(section.id)}
          >
            {section.title}
          </NavButton>
        ))}
      </NavContainer>
      <ContentContainer>
        {renderContent()}
      </ContentContainer>
    </CalendarContainer>
  );
};

export default CropCalendar;
