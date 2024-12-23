import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Navigation from './components/Navbar';
import Hero from './components/Hero';
import Tutorial from './components/Tutorial';
import Press from './components/Press';
import Header from './subcomponents1/Header';
import Features from './subcomponents1/Features';
import Cards from './subcomponents1/Cards';
import ScreenMirroringTabs from './subcomponents2/ScreenMirroring';
import BroadcastSteps from './subcomponents2/BroadCast';
import PlatformDetails from './subcomponents2/PlatformDetails';
import FAQSection from './subcomponents2/FAQSection';
import Footer from './subcomponents2/Footer';
import { useRef } from 'react';


export default function App() {
  const featuresRef = useRef(null);
  const guideRef = useRef(null);
  const topicRef = useRef(null);
  return (
    <div className="bg-light min-vh-100 app-container">
      {/* Navigation always visible */}
      <section className="navbar-section sticky-top">
        <Navigation refs={{
          features: featuresRef,
          guide: guideRef,
          topic: topicRef,
        }} />
      </section>

      {/* Page Content */}
      <div className='bg-grad customdiv1'>
        <section className="hero-section py-md-4">
          <div className="container">
            <Hero />
          </div>
        </section>

        <section className="tutorial-section py-4">
          <div className="container">
            <Tutorial />
          </div>
        </section>

        <section className="press-section">
          <div className="container">
            <Press />
          </div>
        </section>

        <div className='forspace'></div>
      </div>

      <div className='bg-grad2 customdiv2'>
        <div className='forspace'></div>
        <section className="header-section py-md-4">
          <div className="container">
            <Header />
          </div>
        </section>

        <section className="features-section py-md-4">
          <div className="container" ref={featuresRef}>
            <Features />
          </div>
        </section>

        <section className="cards-section py-md-4">
          <div className="container">
            <Cards />
          </div>
        </section>
      </div>

      <div className='bg-grad3 customdiv3'>
        <section className="screenmirroring-section py-md-4">
          <div className="container">
            <ScreenMirroringTabs />
          </div>
        </section>
        <section className="broadcaststeps-section" ref={guideRef}>
          <div className="container">
            <BroadcastSteps />
          </div>
        </section>
        <section className="platformdetails-section py-md-4">
          <div className="container">
            <PlatformDetails />
          </div>
        </section>
        <section className="faq-section py-md-4" ref={topicRef}>
          <div className="container">
            <FAQSection />
          </div>
        </section>
        <section className="footer-section">
          <Footer />
        </section>
      </div>
    </div>
  );
}
