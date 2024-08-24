import Feature from "../components/Home/Feature/Feature";
import Gallery from "../components/Gallery/Gallery";
import MenuOverview from "../components/Home/MenuOverview/MenuOverview";
import ViewGallery from "../components/Home/ViewGallery/ViewGallery";
import ParallaxSection from "../components/ParallaxSection/ParallaxSection";
import ContactForm from "../components/ContactForm/ContactForm";
import images from '../constants/galleryimages';
import Hero from "../components/Hero/Hero";
import { NavLink } from "react-router-dom";


const HomePage = () => {
  const homeGalleryImages = images.slice(0,5);
  return <>
    <Hero isHomePage={true}>
      <h2 className='p__greatvibes'>Every bite is a delight!!!</h2>
      <h1 className='headtext__montserrat'>BÁNH MÌ BA-YE</h1>
      <button className="custom__button app__hero-btn">
        <NavLink to="/">VIEW OUR MENU</NavLink>
      </button>
    </Hero>
    <Feature/>
    <ViewGallery/>
    <MenuOverview/>
    <Gallery images={homeGalleryImages} isHomePage={true}/>
    <ParallaxSection>
      <ContactForm isHomePage={true}/>
    </ParallaxSection>
  </>
}

export default HomePage;