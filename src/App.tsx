import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
// import Features from './components/Features';
import BuilderJourney from './components/BuilderJourney';
import Testimonials from './components/Testimonials';
import Community from './components/Community';
import CTA from './components/CTA';
import Footer from './components/Footer';
import BackgroundParticles from './components/BackgroundParticles';

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <BackgroundParticles />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          {/* <Features /> */}
          <BuilderJourney />
          <Testimonials />
          {/* <Community /> */}
          <CTA />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;