import React from 'react';
import NavigationMenu from '../components/NavigationMenu';
import ConceptToCreation from '../components/ConceptToCreation';
import AscendBotInterface from '../components/AscendBotInterface';
import BusinessHeader from '../components/BusinessHeader';
import DataInsights from '../components/DataInsights';
import BusinessModels from '../components/BusinessModels';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="home-page">
      <NavigationMenu />
      <ConceptToCreation />
      <AscendBotInterface />
      <BusinessHeader />
      <div className="content-container">
        <DataInsights />
        <div className="models-container">
          <BusinessModels 
            icon="model-icon"
            title="Model which tells about end to end about business idea"
            description="Business consultants can assist clients in developing long-term strategic plans to achieve their goals."
          />
          <BusinessModels 
            icon="team-icon"
            title="co-Founder and team suggestion according to requirement of founder and business idea"
            description="Conduct thorough market research to provide insights into market trends, customer behaviors, and others."
          />
        </div>
        <WhyChooseUs />
        <Testimonials />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
