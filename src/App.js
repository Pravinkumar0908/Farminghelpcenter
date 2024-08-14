import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import About from './components/About';
import Team from './components/Team';
import Profile from './components/Profile';
import Tutorial from './components/Tutorial';

import AnimatedContact from './components/AnimatedContact';
import Community from './components/Community';
import WeatherComponent from './components/WeatherComponent';
import Footer from './components/Footer';
import LoginPage from './components/Login'; // Adjusted import
import Market from './components/Market';
import HelpResources from './components/HelpResources';
import Services from './components/Services';
import GovtSchemes from './components/GovtSchemes';
import Farming from './components/Farming';
import CropCalendar from './components/CropCalendar';
import Disease from './components/Disease';
import FasalRotation from './components/FasalRotation';
import SoilHealth from './components/SoilHealth';
import FarmerCourse from './components/FarmerCourse';
import FarmerVideoTutorials from './components/FarmerVideoTutorials';
import ExpertAdvice from './components/ExpertAdvice';
import CropDiversification from './components/CropDiversification';
import IrrigationManagement from './components/IrrigationManagement';
import ProtectedRoute from './components/ProtectedRoute'; // Adjusted import

import './App.css';
import './Banner.css';
import './About.css';
import './Team.css';
import './Market.css';
import './WeatherComponent.css';
// Define your crops object here
const crops = {
  kharif: {
    name: 'धान',
    scientificName: 'Oryza sativa',
    image: '/images/rice.jpg',
    duration: '150 दिन',
    season: 'खरीफ',
    yield: '25-30 क्विंटल प्रति हेक्टेयर',
    suitableWeather: 'गर्म और आर्द्र जलवायु',
    expectedYield: '25-30 क्विंटल',
    sowingTime: 'जून-जुलाई',
    seedQuantity: '50 किग्रा',
    sowingMethod: 'सीड ड्रिल',
    irrigationSchedule: 'सप्ताह में एक बार',
    fertilizationSchedule: 'बुवाई के बाद 30 और 60 दिनों पर',
    pestControlSchedule: 'कीटनाशक का छिड़काव',
    harvestTime: 'सितंबर-अक्टूबर',
    harvestSigns: 'पत्तियों का पीला होना',
    harvestMethod: 'हथियार द्वारा कटाई',
    soilPreparation: 'गहरी जुताई',
    diseaseControl: 'रोग प्रतिरोधक दवाओं का छिड़काव',
    weedManagement: 'खरपतवारनाशी का प्रयोग',
    pests: [
      {
        name: 'तना छेदक',
        management: 'कार्टप हाइड्रोक्लोराइड 4% दाने का प्रयोग करें।',
        image: '/images/stem-borer.jpg'
      },
      {
        name: 'भूरा फुदका',
        management: 'बुप्रोफेजिन 25% एससी का छिड़काव करें।',
        image: '/images/brown-planthopper.jpg'
      },
    ],
    diseases: [
      {
        name: 'झोंका रोग',
        management: 'ट्राइसाइक्लाजोल 75% डब्ल्यूपी का छिड़काव करें।',
        image: '/images/blast-disease.jpg'
      },
      {
        name: 'खैरा रोग',
        management: 'जिंक सल्फेट का प्रयोग करें।',
        image: '/images/khaira-disease.jpg'
      },
    ],
  },
  rabi: {
    name: 'गेंहूँ',
    scientificName: 'Triticum aestivum',
    image: '/images/wheat.jpg',
    duration: '120 दिन',
    season: 'रबी',
    yield: '20-25 क्विंटल प्रति हेक्टेयर',
    suitableWeather: 'समशीतोष्ण और ठंडी जलवायु',
    expectedYield: '20-25 क्विंटल',
    sowingTime: 'नवंबर का पहला सप्ताह',
    seedQuantity: '100 किग्रा',
    sowingMethod: 'बोआई मशीन द्वारा',
    irrigationSchedule: '15-20 दिनों में एक बार',
    fertilizationSchedule: 'बुवाई के बाद 30 और 60 दिनों पर उर्वरक डालें',
    pestControlSchedule: 'समय-समय पर कीटनाशक का छिड़काव',
    harvestTime: 'फरवरी-मार्च',
    harvestSigns: 'पौधों का पीला होना और सूखना',
    harvestMethod: 'कम्बाइन हार्वेस्टर द्वारा कटाई',
    soilPreparation: 'खेत की गहरी जुताई और समतल करना',
    diseaseControl: 'रोग प्रतिरोधक दवाओं का छिड़काव',
    weedManagement: 'खरपतवारनाशी का प्रयोग',
    pests: [
      {
        name: 'दीमक',
        management: 'क्लोरपायरीफॉस 20% ईसी का प्रयोग करें।',
        image: '/images/termite.jpg'
      },
      {
        name: 'चूहे',
        management: 'जिंक फॉस्फाइड का प्रयोग करें।',
        image: '/images/rat.jpg'
      },
    ],
    diseases: [
      {
        name: 'गेहूं का रतुआ',
        management: 'प्रोपिकोनाजोल या टेबुकोनाजोल का छिड़काव करें।',
        image: '/images/wheat-rust.jpg'
      },
      {
        name: 'करनाल बंट',
        management: 'बीज उपचार के लिए कार्बेन्डाजिम का प्रयोग करें।',
        image: '/images/karnal-bunt.jpg'
      },
    ],
  },
  zaid: {
    name: 'कद्दू',
    scientificName: 'Cucurbita pepo',
    image: '/images/pumpkin.jpg',
    duration: '90 दिन',
    season: 'जायद',
    yield: '15-20 क्विंटल प्रति हेक्टेयर',
    suitableWeather: 'गर्म और धूप वाली जलवायु',
    expectedYield: '15-20 क्विंटल',
    sowingTime: 'मार्च-अप्रैल',
    seedQuantity: '10 किग्रा',
    sowingMethod: 'हाथ से बुवाई',
    irrigationSchedule: '10-15 दिनों में एक बार',
    fertilizationSchedule: 'बुवाई के बाद 20 और 50 दिनों पर',
    pestControlSchedule: 'कीटनाशक का छिड़काव',
    harvestTime: 'जुलाई-अगस्त',
    harvestSigns: 'फलों का आकार बढ़ना और रंग बदलना',
    harvestMethod: 'हाथ से काटना',
    soilPreparation: 'खेत की जुताई और समतल करना',
    diseaseControl: 'रोग प्रतिरोधक दवाओं का छिड़काव',
    weedManagement: 'खरपतवारनाशी का प्रयोग',
    pests: [
      {
        name: 'लाल कद्दू भृंग',
        management: 'मैलाथियान 50% ईसी का छिड़काव करें।',
        image: '/images/red-pumpkin-beetle.jpg'
      },
      {
        name: 'फल मक्खी',
        management: 'फेरोमोन ट्रैप का उपयोग करें।',
        image: '/images/fruit-fly.jpg'
      },
    ],
    diseases: [
      {
        name: 'पाउडरी मिल्ड्यू',
        management: 'गंधक या ट्राईडेमोर्फ का छिड़काव करें।',
        image: '/images/powdery-mildew.jpg'
      },
      {
        name: 'डाउनी मिल्ड्यू',
        management: 'मेटालैक्सिल + मैंकोजेब का छिड़काव करें।',
        image: '/images/downy-mildew.jpg'
      },
    ],
  }
};


function Home() {
  return (
    <>
      <Banner />
      <About />
      <Team />
      <AnimatedContact />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/social" element={<AnimatedContact />} />
          
          {/* Protected Routes */}
          <Route path="/community" element={<ProtectedRoute element={Community} />} />
          <Route path="/weather" element={<ProtectedRoute element={WeatherComponent} />} />
          <Route path="/market" element={<ProtectedRoute element={Market} />} />
          <Route path="/helpresources" element={<ProtectedRoute element={HelpResources} />} />
          <Route path="/services" element={<ProtectedRoute element={Services} />} />
          <Route path="/govtschemes" element={<ProtectedRoute element={GovtSchemes} />} />
          <Route path="/farming" element={<ProtectedRoute element={Farming} />} />
          <Route path="/cropcalendar" element={<ProtectedRoute element={() => <CropCalendar crops={crops} />} />} />
          <Route path="/disease" element={<ProtectedRoute element={() => <Disease crops={crops} />} />} />
          <Route path="/fasalrotation" element={<ProtectedRoute element={FasalRotation} />} />
          <Route path="/soilhealth" element={<ProtectedRoute element={SoilHealth} />} />
          <Route path="/farmercourse" element={<ProtectedRoute element={FarmerCourse} />} />
          <Route path="/expertadvice" element={<ProtectedRoute element={ExpertAdvice} />} />
          <Route path="/farmervideotutorials" element={<FarmerVideoTutorials />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/tutorial" element={<Tutorial />} />
          <Route path="/cropdiversification" element={<ProtectedRoute element={CropDiversification} />} />
          <Route path="/irrigationmanagement" element={<ProtectedRoute element={IrrigationManagement} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;