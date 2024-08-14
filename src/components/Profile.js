import React, { useState, useEffect } from 'react';
import styled, { keyframes, createGlobalStyle } from 'styled-components';
import { auth, firestore } from '../firebase';
import { FaSeedling, FaTractor, FaCloudSun, FaLeaf, FaTree, FaCarrot } from 'react-icons/fa';

const GlobalStyle = createGlobalStyle`
  body {
    background: #87CEEB;
    overflow-x: hidden;
  }
`;

const cloudFloat = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100vw); }
`;

const tractorMove = keyframes`
  0% { transform: translateX(-120%); }
  100% { transform: translateX(120%); }
`;

const growPlant = keyframes`
  0% { transform: scale(0); }
  100% { transform: scale(1); }
`;

const sunRotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const ProfileContainer = styled.div`
  max-width: 800px;
  margin: 40px auto;
  padding: 30px;
  background: linear-gradient(135deg, #76c893, #52b69a);
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
  transform: perspective(1000px) rotateX(5deg);
  transition: transform 0.3s ease;

  &:hover {
    transform: perspective(1000px) rotateX(0deg);
  }
`;

const Cloud = styled.div`
  position: absolute;
  top: ${props => props.top}%;
  font-size: 3em;
  color: white;
  animation: ${cloudFloat} ${props => 20 + props.speed}s linear infinite;
  opacity: 0.7;
`;

const Tractor = styled(FaTractor)`
  position: absolute;
  bottom: 10px;
  font-size: 3em;
  color: #d62828;
  animation: ${tractorMove} 15s linear infinite;
`;

const Sun = styled(FaCloudSun)`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 4em;
  color: #ffb703;
  animation: ${sunRotate} 20s linear infinite;
`;

const Tree = styled(FaTree)`
  position: absolute;
  bottom: 20px;
  right: 20px;
  font-size: 5em;
  color: #2d6a4f;
  transform-origin: bottom center;
  animation: ${growPlant} 3s ease-out;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 30px;
  color: #fff;
  font-size: 3em;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;

const FormGroup = styled.div`
  margin-bottom: 25px;
  position: relative;
  z-index: 1;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
  color: #fff;
  font-size: 1.2em;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 8px;
  font-size: 1em;
  background: rgba(255, 255, 255, 0.8);
  transition: all 0.3s ease;

  &:focus {
    background: rgba(255, 255, 255, 1);
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.5);
  }
`;

const Button = styled.button`
  background-color: #ff9f1c;
  color: #fff;
  border: none;
  padding: 12px 25px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1.2em;
  display: block;
  margin: 30px auto;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #f77f00;
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
  }
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 30px;
`;

const AnimatedIcon = styled.div`
  font-size: 2.5em;
  color: #fff;
  animation: ${growPlant} 1s ease-out;
`;

const Profile = () => {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState({
    displayName: '',
    farmName: '',
    mainCrops: '',
    farmSize: '',
    equipment: '',
  });

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        firestore.collection('farmers').doc(user.uid).get().then((doc) => {
          if (doc.exists) {
            setProfile(doc.data());
          }
        });
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user) {
      firestore.collection('farmers').doc(user.uid).update(profile)
        .then(() => {
          alert('Your farm profile has been updated successfully!');
        }).catch((error) => {
          console.error('Error updating profile:', error);
        });
    }
  };

  if (!user) {
    return <div>Please log in to view your farmer profile.</div>;
  }

  return (
    <>
      <GlobalStyle />
      <ProfileContainer>
        <Title>🌾 Farmer's Paradise 🌾</Title>
        <Cloud top={10} speed={2}><FaCloudSun /></Cloud>
        <Cloud top={30} speed={-1}><FaCloudSun /></Cloud>
        <Cloud top={50} speed={3}><FaCloudSun /></Cloud>
        <Tractor />
        <Sun />
        <Tree />
        <IconWrapper>
          <AnimatedIcon><FaSeedling /></AnimatedIcon>
          <AnimatedIcon><FaLeaf /></AnimatedIcon>
          <AnimatedIcon><FaCarrot /></AnimatedIcon>
        </IconWrapper>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="displayName">Farmer's Name</Label>
            <Input
              type="text"
              id="displayName"
              name="displayName"
              value={profile.displayName}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="farmName">Farm Name</Label>
            <Input
              type="text"
              id="farmName"
              name="farmName"
              value={profile.farmName}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="mainCrops">Main Crops</Label>
            <Input
              type="text"
              id="mainCrops"
              name="mainCrops"
              value={profile.mainCrops}
              onChange={handleChange}
              placeholder="e.g., Wheat, Corn, Soybeans"
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="farmSize">Farm Size (in acres)</Label>
            <Input
              type="number"
              id="farmSize"
              name="farmSize"
              value={profile.farmSize}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="equipment">Main Equipment</Label>
            <Input
              type="text"
              id="equipment"
              name="equipment"
              value={profile.equipment}
              onChange={handleChange}
              placeholder="e.g., Tractor, Harvester, Irrigation System"
            />
          </FormGroup>
          <Button type="submit">Update Farm Profile</Button>
        </form>
      </ProfileContainer>
    </>
  );
};

export default Profile;