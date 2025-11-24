import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WorkspaceOptions from './components/WorkspaceOptions';
import SpaceSolutions from './components/SpaceSolutions';
import Features from './components/Features';
import SpacesGrid from './components/SpacesGrid';
import WhyChooseUs from './components/WhyChooseUs';
import BookTour from './components/BookTour';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <WorkspaceOptions />
      <SpaceSolutions />
      <Features />
      <SpacesGrid />
      <WhyChooseUs />
      <BookTour />
      <Footer />
    </div>
  );
}

export default App;
