import React from 'react'
import HeroText from '../components/HeroText'
import HeroVideo from '../components/HeroVideo'
import HeroImages from '../components/HeroImages'
import ContactUs from '../components/ContactUs'
import Footer from '../components/Footer'
import FeatureSection from '../components/FeatureSection'
import Services from '../components/Services'
import BannerSection from '../components/BannerSection'
import TeamSection from '../components/TeamSection'



const Home = () => {
  return (
    <div>
      <HeroText/>
      {/* <HeroImages/> */}
      <HeroVideo/>
      <Services/>
      <FeatureSection/>
      <BannerSection/>
      <TeamSection/>
      <ContactUs/>
      <Footer/>
    </div>
  )
}

export default Home
