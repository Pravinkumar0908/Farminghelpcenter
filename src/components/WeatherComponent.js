import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import axios from 'axios';

// Animation for sky color change
const skyColorChange = keyframes`
  0% { background: linear-gradient(to top, #ff7e00, #ffa700, #48c3eb, #002bff); }
  25% { background: linear-gradient(to top, #ffd700, #48c3eb, #002bff, #001f3f); }
  50% { background: linear-gradient(to top, #48c3eb, #002bff, #001f3f, #000000); }
  75% { background: linear-gradient(to top, #002bff, #001f3f, #000000, #ff7e00); }
  100% { background: linear-gradient(to top, #001f3f, #000000, #ff7e00, #ffa700); }
`;

// Get background image based on weather condition
const getBackgroundByWeather = (condition) => {
  const backgrounds = {
    'Clear': 'https://images.unsplash.com/photo-1622278647429-71bc97e904e8?auto=format&fit=crop&w=1920&q=80',
    'Partly Cloudy': 'https://images.unsplash.com/photo-1612208695882-02f2322b7fee?auto=format&fit=crop&w=1920&q=80',
    'Clouds': 'https://images.unsplash.com/photo-1534088568595-a066f410bcda?auto=format&fit=crop&w=1920&q=80',
    'Rain': 'https://images.unsplash.com/photo-1519692933481-e162a57d6721?auto=format&fit=crop&w=1920&q=80',
    'Thunderstorm': 'https://images.unsplash.com/photo-1605727216801-e27ce1d0cc28?auto=format&fit=crop&w=1920&q=80',
    'Snow': 'https://images.unsplash.com/photo-1611273426858-450e7f08d886?auto=format&fit=crop&w=1920&q=80',
    'Mist': 'https://images.unsplash.com/photo-1603794067602-9feaa4f70e0c?auto=format&fit=crop&w=1920&q=80',
  };
  return backgrounds[condition] || backgrounds['Partly Cloudy'];
};

// Get weather icon based on weather condition
const getWeatherIcon = (condition) => {
  const icons = {
    'Clear': '01d',
    'Partly Cloudy': '02d',
    'Clouds': '03d',
    'Rain': '10d',
    'Thunderstorm': '11d',
    'Snow': '13d',
    'Mist': '50d',
  };
  return icons[condition] || '02d';
};

const WeatherContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin-top: 100px;
  background: ${props => `url(${getBackgroundByWeather(props.condition)}) no-repeat center center fixed`};
  background-size: cover;
  color: #fff;
  font-family: 'Roboto', sans-serif;
  min-height: 100vh;
  width: 100%;
  transition: background 0.5s ease-in-out;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  padding-left: 10px;
  padding-right: 10px;
`;

const SkyOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  animation: ${skyColorChange} 60s linear infinite;
  opacity: 0.7;
  z-index: -1;
`;

const MainWeatherCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  max-width: 800px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 20px;
  margin: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Temperature = styled.h1`
  font-size: 4rem;
  margin: 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);

  @media (min-width: 768px) {
    font-size: 6rem;
  }
`;

const WeatherIcon = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    width: 150px;
    height: 150px;
  }
`;

const WeatherInfo = styled.div`
  text-align: center;
  margin-top: 10px;

  @media (min-width: 768px) {
    margin-top: 0;
    margin-left: 20px;
    text-align: left;
  }
`;

const CityName = styled.h2`
  font-size: 2rem;
  margin: 5px 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Condition = styled.h2`
  font-size: 1.5rem;
  margin: 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

const InfoSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 90%;
  max-width: 800px;
  margin-top: 20px;

  @media (min-width: 768px) {
    flex-wrap: nowrap;
  }
`;

const InfoCard = styled.div`
  flex: 1 1 100%;
  margin: 10px;
  text-align: center;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    flex: 1;
    margin: 0 10px;
  }
`;

const ForecastContainer = styled.div`
  width: 90%;
  max-width: 800px;
  margin-top: 20px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ForecastTitle = styled.h3`
  margin-bottom: 15px;
  color: black;
  text-align: center;
`;

const ForecastScroller = styled.div`
  display: flex;
  overflow-x: auto;
  padding-bottom: 10px;

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 4px;
  }
`;

const ForecastCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 15px;
  min-width: 100px;
`;

const ForecastHour = styled.h4`
  margin: 5px 0;
  color: blue;
`;

const ForecastIcon = styled.img`
  width: 50px;
  height: 50px;
  margin: 5px 0;
`;

const ForecastTemp = styled.p`
  margin: 5px 0;
  font-size: 1.2rem;
  color: black;
`;

const FarmerTip = styled.div`
  width: 90%;
  max-width: 800px;
  margin-top: 20px;
  text-align: center;
  font-style: italic;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const SearchBar = styled.form`
  margin: 20px 0;
  display: flex;
  justify-content: center;
  width: 50%;

  input {
    padding: 10px;
    font-size: 1rem;
    border: 2px solid #fff;
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.3);
    color: #000;
    outline: none;
    flex: 1;
  }

  button {
    padding: 10px 20px;
    margin-left: 10px;
    font-size: 1rem;
    border: none;
    border-radius: 5px;
    background-color: #fff;
    color: #000;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #ddd;
    }
  }
`;

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [city, setCity] = useState('indergarh'); // Default city

  const apiKey = 'openweathermap  go to site and take api';

  const fetchWeather = async () => {
    setLoading(true);
    try {
      const weatherResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      setWeatherData(weatherResponse.data);
    } catch (error) {
      console.error("मौसम का डेटा प्राप्त करने में त्रुटि: ", error);
    }
  };

  const fetchForecast = async () => {
    try {
      const forecastResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`
      );
      setForecastData(forecastResponse.data);
      setLoading(false);
    } catch (error) {
      console.error("पूर्वानुमान डेटा प्राप्त करने में त्रुटि: ", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather();
    fetchForecast();
  }, [city]);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchWeather();
    fetchForecast();
  };

  const getHour = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const hours = date.getHours();
    const period = hours >= 12 ? 'PM' : 'AM';
    const formattedHour = hours % 12 === 0 ? 12 : hours % 12;
    return `${formattedHour} ${period}`;
  };

  useEffect(() => {
    if (weatherData) {
      const cityName = weatherData.name;
      const temperature = Math.round(weatherData.main.temp);
      const weatherCondition = weatherData.weather[0].description; // Get detailed weather description
      const hindiWeatherCondition = translateWeatherToHindi(weatherCondition);

      const speech = new SpeechSynthesisUtterance(`मौसम रिपोर्ट: ${cityName} में वर्तमान तापमान ${temperature} डिग्री सेल्सियस है। और आज का मौसम ${hindiWeatherCondition}`);
      speech.lang = 'hi-IN'; // Set language to Hindi
      speech.volume = 1; // 0 to 1
      speech.rate = 1; // 0.1 to 10
      speech.pitch = 1; // 0 to 2
      window.speechSynthesis.speak(speech);
    }
  }, [weatherData]);

  const translateWeatherToHindi = (condition) => {
    const weatherConditions = {
      'clear sky': 'आसमान साफ है और धूप निकली रहेगी',
      'few clouds': 'कुछ बादल छाये रहेंगे',
      'scattered clouds': 'छिटपुट बादल रहेंगे',
      'broken clouds': 'हल्के से बादल छाये रहेंगे',
      'overcast clouds': 'पूरी तरह से बादल छाए रहेंगे',
      'light rain': 'हल्की बारिश हो सकती है',
      'moderate rain': 'मध्यम बारिश हो सकती है',
      'heavy intensity rain': 'तेज बारिश हो सकती है',
      'very heavy rain': 'बहुत तेज बारिश हो सकती है',
      'extreme rain': 'अत्यधिक तेज बारिश हो सकती है',
      'freezing rain': 'बर्फीली बारिश हो सकती है',
      'light intensity shower rain': 'हल्की बौछार हो सकती है',
      'shower rain': 'बौछार हो सकती है',
      'heavy intensity shower rain': 'तेज बौछार हो सकती है',
      'ragged shower rain': 'अनियमित बौछार हो सकती है',
      'thunderstorm': 'आंधी-तूफान आ सकता है',
      'thunderstorm with light rain': 'हल्की बारिश के साथ आंधी-तूफान आ सकता है',
      'thunderstorm with rain': 'बारिश के साथ आंधी-तूफान आ सकता है',
      'thunderstorm with heavy rain': 'तेज बारिश के साथ आंधी-तूफान आ सकता है',
      'light thunderstorm': 'हल्का आंधी-तूफान आ सकता है',
      'heavy thunderstorm': 'भारी आंधी-तूफान आ सकता है',
      'ragged thunderstorm': 'अनियमित आंधी-तूफान आ सकता है',
      'thunderstorm with light drizzle': 'हल्की बूंदाबांदी के साथ आंधी-तूफान आ सकता है',
    };
    return weatherConditions[condition] || condition;
  };

  return (
    <WeatherContainer condition={weatherData?.weather[0]?.main}>
      <SkyOverlay />
      <SearchBar onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="शहर का नाम दर्ज करें"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">खोजें</button>
      </SearchBar>
      {loading ? (
        <div>लोड हो रहा है...</div>
      ) : (
        <>
          {weatherData && (
            <MainWeatherCard>
              <WeatherIcon
                src={`http://openweathermap.org/img/wn/${getWeatherIcon(weatherData.weather[0].main)}@4x.png`}
                alt={weatherData.weather[0].description}
              />
              <WeatherInfo>
                <CityName>{weatherData.name}</CityName>
                <Temperature>{Math.round(weatherData.main.temp)}°C</Temperature>
                <Condition>{weatherData.weather[0].description}</Condition>
              </WeatherInfo>
            </MainWeatherCard>
          )}
          <InfoSection>
            <InfoCard>
              <h4>आर्द्रता</h4>
              <p>{weatherData?.main?.humidity}%</p>
            </InfoCard>
            <InfoCard>
              <h4>हवा की गति</h4>
              <p>{weatherData?.wind?.speed} मी/से</p>
            </InfoCard>
            <InfoCard>
              <h4>दृश्यता</h4>
              <p>{weatherData?.visibility / 1000} किमी</p>
            </InfoCard>
            <InfoCard>
              <h4>यूवी इंडेक्स</h4>
              <p>{weatherData?.uvi}</p>
            </InfoCard>
          </InfoSection>
          <ForecastContainer>
            <ForecastTitle>अगले 10 घंटे का पूर्वानुमान</ForecastTitle>
            <ForecastScroller>
              {forecastData?.list?.slice(0, 10).map((forecast, index) => (
                <ForecastCard key={index}>
                  <ForecastHour>{getHour(forecast.dt)}</ForecastHour>
                  <ForecastIcon
                    src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`}
                    alt={forecast.weather[0].description}
                  />
                  <ForecastTemp>{Math.round(forecast.main.temp)}°C</ForecastTemp>
                </ForecastCard>
              ))}
            </ForecastScroller>
          </ForecastContainer>
          <FarmerTip>
            अपनी फसलों की नमी के स्तर की निगरानी करें और उन्हें उचित मात्रा में सिंचाई करें।
          </FarmerTip>
        </>
      )}
    </WeatherContainer>
  );
};

export default App;
