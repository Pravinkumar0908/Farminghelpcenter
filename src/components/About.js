import React from 'react';

const About = () => {
  return (
    
    <div className="about-container">
      {/* Welcome Section */}
      <h1 className="headerline">About Us</h1>
      <section className="welcome-section">
        <h2>Welcome to Kishan Mitra Farmers!</h2>
        <img src="https://i.pinimg.com/736x/71/c2/2d/71c22dcb20e1d22a8737839675f6f875.jpg" alt="Farmers working in a field" className="about-image"/>
        <p>
          We are dedicated to empowering farmers and fostering sustainable agriculture. At GreenHarvest Farms, we believe in the strength of our farming community and the power of traditional farming practices combined with modern techniques.
        </p>
      </section>

      {/* Mission and Vision Section */}
      <section className="mission-vision-section">
        <div className="mission">
        <h1 className="headerline">Our mission</h1>
          <p>
            To support farmers by providing high-quality seeds, fertilizers, and tools that enhance productivity and ensure sustainable farming.
          </p>
        </div>
        <div className="vision">
        <h1 className="headerline">Our vision</h1>
          <p>
            To create a thriving agricultural community where every farmer prospers and contributes to a greener, healthier planet.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section">
        <h1 className="headerline">Our story</h1>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiKFRgk4JcyEGsKIoimMv7q-HtuDI3on-B1uuZXUuqaaJ0SxEs-yi0b74qtbHFsEjGYbY&usqp=CAU" alt="Modern farming technology" className="about-image"/>
        <p>
          Founded by a group of passionate farmers, our journey began with the aim of making a positive impact on the lives of fellow farmers. We understand the challenges faced by farmers and are committed to providing solutions that make farming easier, more efficient, and profitable.
        </p>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us-section">
        <h1 className="headerline">Why Choose Us</h1>
        <div className="features-list">
          <div className="feature-item">High-quality products tailored to your needs</div>
          <div className="feature-item">Expert advice and guidance from experienced farmers</div>
          <div className="feature-item">Community-focused initiatives and support programs</div>
        </div>
      </section>
    </div>
  );
};

export default About;
