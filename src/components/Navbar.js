import React, { useState, useEffect } from 'react';
import styled, { keyframes, createGlobalStyle } from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { auth, signOut } from '../firebase'; // Ensure signOut is imported correctly

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideIn = keyframes`
  from { transform: translateY(-20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

const NavbarContainer = styled.nav`
  background-color: ${props => props.isDarkMode ? '#2c3e50' : (props.scrolled ? '#3d8b3d' : '#4CAF50')};
  padding: 15px 20px;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
`;

const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
`;

const Logo = styled.img`
  height: 40px;
  animation: ${fadeIn} 1s ease-in, ${slideIn} 1s ease-out;
  @media (max-width: 768px) {
    height: 30px;
  }
`;



const SearchPopup = styled.div`
  position: fixed;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  z-index: 1001;
  width: 90%;
  max-width: 800px;
  display: ${props => props.visible ? 'block' : 'none'};
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 15px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 18px;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 29px;
  cursor: pointer;
  color: #000;
  position: absolute;
  top: 20px;
  right: 20px;
  &:hover {
    color: #000;
  }
`;

const NavList = styled.ul`
  list-style-type: none;
  display: flex;
  padding: 0;
  margin: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: ${props => props.isDarkMode ? '#2c3e50' : '#4CAF50'};
    display: ${props => props.mobileMenuOpen ? 'flex' : 'none'};
    animation: ${slideIn} 0.3s ease-out;
  }
`;

const NavItem = styled.li`
  position: relative;
  margin: 0 10px;

  @media (max-width: 768px) {
    margin: 0;
    width: 100%;
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #ecf0f1;
  font-weight: bold;
  padding: 10px;
  display: inline-block;
  transition: all 0.3s ease;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 50%;
    background-color: #3498db;
    transition: all 0.3s ease;
  }

  &:hover:after {
    width: 100%;
    left: 0;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 15px;
  }
`;

const Dropdown = styled.ul`
  display: ${props => props.show ? 'block' : 'none'};
  position: absolute;
  top: 100%;
  right: 0;
  background-color: ${props => props.isDarkMode ? '#34495e' : '#4CAF50'};
  min-width: 200px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1001;
  animation: ${fadeIn} 0.3s ease-in;
  border-radius: 5px;
  overflow: hidden;

  @media (max-width: 768px) {
    position: static;
    box-shadow: none;
    width: 100%;
  }
`;

const DropdownItem = styled.li`
  color: #ecf0f1;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  transition: all 0.3s ease;

  &:hover {
    background-color: #3498db;
    color: #fff;
  }

  @media (max-width: 768px) {
    color: #ecf0f1;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #ecf0f1;
  font-size: 24px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
    color: #3498db;
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileSearchButton = styled(MobileMenuButton)`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
  }
`;

const ProfileContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const ProfileIcon = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  cursor: pointer;
  margin-left: 15px;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    height: 30px;
  }
`;

const ThemeToggle = styled.button`
  background: none;
  border: none;
  color: ${props => props.isDarkMode ? '#fff' : '#000'};
  font-size: 24px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-left: 15px;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const AnimatedIcon = styled.i`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
`;

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.isDarkMode ? '#1a1a1a' : '#ffffff'};
    color: ${props => props.isDarkMode ? '#ffffff' : '#000000'};
  }

  .app {
    color: ${props => props.isDarkMode ? '#fff' : '#000'};
    display: flex;
    background-image: ${props => props.isDarkMode 
      ? 'linear-gradient(to top, #1a1a1a 0%, #2c2c2c 81%, #3c3c3c 100%)'
      : 'linear-gradient(to top, #3f762b 0%, #24b81f 81%, #62f30f 100%)'};
    overflow: hidden;
  }

  .app__content {
    margin-left: 80px;
    padding: 20px;
    width: 100%;
    margin-top: 150px;
    @media (max-width: 768px) {
      margin-left: 0;
      margin-top: 100px;
    }
  }

  .status-bar {
    position: fixed;
    bottom: 0;
    width: 100%;
    text-align: center;
    padding: 10px 0;
    color: white;
  }

  .status-bar.online {
    background-color: green;
  }

  .status-bar.offline {
    background-color: red;
  }

  .loginbtn {
    color: ${props => props.isDarkMode ? '#ff6b6b' : '#ff0000'};
  }
`;

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchPopupVisible, setSearchPopupVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [user, setUser] = useState(null);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = (index) => {
    setShowDropdown(index);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setSearchPopupVisible(false);
  };

  const toggleSearchPopup = () => {
    setSearchPopupVisible(!searchPopupVisible);
    setMobileMenuOpen(false);
  };

  const handleSignOut = () => {
    signOut().then(() => {
      setUser(null);
    }).catch((error) => {
      console.error("Sign out error:", error);
    });
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  const navItems = [
    {
      title: "होम",
      items: [
        { title: "होम", path: "/" },
      ],
    },
    {
      title: "मौसम और फसल प्रबंधन",
      items: [
        { title: "मौसम पूर्वानुमान", path: "/weather" },
        { title: "ऑर्गेनिक खेती", path: "/farming" },
        { title: "फसल कैलेंडर", path: "/cropcalendar" },
        { title: "फसल रोटेशन", path: "/FasalRotation" },
        { title: "कीट और रोग प्रबंधन", path: "/Disease" },
        { title: "मिट्टी स्वास्थ्य", path: "/SoilHealth" },
        { title: "सिंचाई प्रबंधन", path: "/IrrigationManagement" },
      ],
    },
    {
      title: "बाजार और वित्तीय सेवाएँ",
      items: [
        { title: "फसल मूल्य", path: "/market" },
        { title: "बाजार रुझान", path: "/MarketTrends" },
        { title: "ऑनलाइन बिक्री", path: "/OnlineSales" },
        { title: "कृषि ऋण", path: "/AgricultureLoan" },
        { title: "बीमा योजनाएँ", path: "/govtschemes" },
      ],
    },
    {
      title: "ज्ञान और शिक्षा",
      items: [
        { title: "ऑनलाइन पाठ्यक्रम", path: "/FarmerCourse" },
        { title: "वीडियो ट्यूटोरियल", path: "/FarmerVideoTutorials" },
        { title: "विशेषज्ञ सलाह", path: "/ExpertAdvice" },
        { title: "फसल विविधीकरण", path: "/CropDiversification" },
        { title: "नवीनतम तकनीक", path: "/Community" },
        { title: "प्रश्न-उत्तर फोरम", path: "/#" },
      ],
    },
    {
      title: "समुदाय और सेवाएँ",
      items: [
        { title: "सुविधायें", path: "/Community" },
        { title: "सफलता की कहानियाँ", path: "/Community" },
        { title: "नवीनतम उपकरण", path: "/Community" },
      ],
    },
    {
      title: "सहायता और संसाधन",
      items: [
        { title: "मोबाइल ऐप", path: "HelpResources" },
        { title: "संपर्क करें", path: "/HelpResources" },
      ],
    },
  ];

  return (
    <>
      <GlobalStyle isDarkMode={isDarkMode} />
      <NavbarContainer scrolled={scrolled} isDarkMode={isDarkMode}>
        <NavContent>
          <Logo src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoS9jUKrgg2A9GHL_oDySi1MxZKAM6fV8fkw&s" alt="Farming World Logo" />
          <SearchPopup visible={searchPopupVisible}>
            <CloseButton onClick={toggleSearchPopup}>&times;</CloseButton>
            <form>
              <SearchInput placeholder="खोजें..." />
            </form>
          </SearchPopup>
          <NavList mobileMenuOpen={mobileMenuOpen}>
            {navItems.map((item, index) => (
              <NavItem
                key={index}
                onMouseEnter={() => toggleDropdown(index)}
                onMouseLeave={() => toggleDropdown(null)}
              >
                <NavLink to="#">{item.title}</NavLink>
                <Dropdown show={showDropdown === index}>
                  {item.items.map((subItem, subIndex) => (
                    <DropdownItem key={subIndex}>
                      <NavLink to={subItem.path}>{subItem.title}</NavLink>
                    </DropdownItem>
                  ))}
                </Dropdown>
              </NavItem>
            ))}
          </NavList>
          <MobileSearchButton onClick={toggleSearchPopup}>
            <i className="bi bi-search"></i>
          </MobileSearchButton>
          <MobileMenuButton onClick={toggleMobileMenu}>☰</MobileMenuButton>
          <ThemeToggle onClick={toggleTheme} isDarkMode={isDarkMode}>
            <AnimatedIcon className={isDarkMode ? "bi bi-moon-fill" : "bi bi-sun-fill"} />
          </ThemeToggle>
          <ProfileContainer>
            {user ? (
              <>
                <ProfileIcon
                  src={user.photoURL || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp7AB-zB8xF4RqnUZMXfdUVq6CfSGOJ19lOw&s'}
                  alt="Profile"
                  onClick={() => setProfileMenuOpen(!profileMenuOpen)}
                />
               {profileMenuOpen && (
                  <Dropdown show={profileMenuOpen} style={{ top: '100%', right: 0 }}>
                    <DropdownItem onClick={() => navigate('/profile')}>View Profile</DropdownItem>
                    <DropdownItem onClick={handleSignOut}>Logout</DropdownItem>
                  </Dropdown>
                )}
              </>
            ) : (
              <NavLink className="loginbtn" to="/login">Login</NavLink>
            )}
          </ProfileContainer>
        </NavContent>
      </NavbarContainer>
    </>
  );
};

export default Navbar;