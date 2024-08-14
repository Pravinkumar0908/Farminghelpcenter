import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaTractor, FaSeedling, FaWater, FaLeaf, FaWarehouse, FaHandsHelping } from 'react-icons/fa';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  margin-top:100px;
  padding: 50px 20px;
  font-family: 'Poppins', sans-serif;
`;

const Title = styled.h2`
  text-align: center;
  color: #2c3e50;
  font-size: 2.5rem;
  margin-bottom: 50px;
  animation: ${fadeIn} 1s ease-out;
`;

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
`;

const ServiceCard = styled.div`
  background: linear-gradient(145deg, #ffffff, #f0f0f0);
  border-radius: 15px;
  padding: 30px;
  box-shadow: 10px 10px 20px #d1d1d1, -10px -10px 20px #ffffff;
  transition: all 0.3s ease;
  animation: ${fadeIn} 1s ease-out;
  animation-delay: ${props => props.delay};
  opacity: 0;
  animation-fill-mode: forwards;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 15px 15px 30px #bebebe, -15px -15px 30px #ffffff;
  }
`;

const IconWrapper = styled.div`
  font-size: 3rem;
  color: #3498db;
  margin-bottom: 20px;
  text-align: center;
`;

const ServiceTitle = styled.h3`
  color: #2c3e50;
  font-size: 1.5rem;
  margin-bottom: 15px;
  text-align: center;
`;

const ServiceDescription = styled.p`
  color: #34495e;
  font-size: 1rem;
  line-height: 1.6;
  text-align: center;
`;

const services = [
  {
    icon: <FaTractor />,
    title: 'मशीनीकरण सेवाएँ',
    description: 'आधुनिक कृषि उपकरणों और मशीनों की किराये पर उपलब्धता।'
  },
  {
    icon: <FaSeedling />,
    title: 'बीज और पौध वितरण',
    description: 'गुणवत्तापूर्ण बीज और स्वस्थ पौधों की आपूर्ति।'
  },
  {
    icon: <FaWater />,
    title: 'सिंचाई सलाह',
    description: 'कुशल जल प्रबंधन और सिंचाई तकनीकों पर मार्गदर्शन।'
  },
  {
    icon: <FaLeaf />,
    title: 'कीट नियंत्रण',
    description: 'एकीकृत कीट प्रबंधन और जैविक नियंत्रण विधियाँ।'
  },
  {
    icon: <FaWarehouse />,
    title: 'भंडारण सुविधाएँ',
    description: 'फसल के बाद के नुकसान को कम करने के लिए आधुनिक भंडारण समाधान।'
  },
  {
    icon: <FaHandsHelping />,
    title: 'किसान सहायता',
    description: 'तकनीकी सलाह और वित्तीय मार्गदर्शन के लिए समर्पित सहायता।'
  }
];

const Services = () => {
  return (
    <Container>
      <Title>हमारी कृषि सेवाएँ</Title>
      <ServiceGrid>
        {services.map((service, index) => (
          <ServiceCard key={index} delay={`${index * 0.2}s`}>
            <IconWrapper>{service.icon}</IconWrapper>
            <ServiceTitle>{service.title}</ServiceTitle>
            <ServiceDescription>{service.description}</ServiceDescription>
          </ServiceCard>
        ))}
      </ServiceGrid>
    </Container>
  );
};

export default Services;