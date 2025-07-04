import React, { lazy, Suspense } from 'react';
import LoadingSpinner from '../components/LoadingSpinner';

// Lazy load components for better performance
const HeroText = lazy(() => import('../components/HeroText'));
const HeroVideo = lazy(() => import('../components/HeroVideo'));
const Services = lazy(() => import('../components/Services'));
const FeatureSection = lazy(() => import('../components/FeatureSection'));
const BannerSection = lazy(() => import('../components/BannerSection'));
const TeamSection = lazy(() => import('../components/TeamSection'));
const ContactUs = lazy(() => import('../components/ContactUs'));
const Footer = lazy(() => import('../components/Footer'));

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Suspense fallback={<LoadingSpinner />}>
        <HeroText/>
        <HeroVideo/>
        <Services/>
        <FeatureSection/>
        <BannerSection/>
        <TeamSection/>
        <ContactUs/>
        <Footer/>
      </Suspense>
    </div>
  )
}

export default Home;