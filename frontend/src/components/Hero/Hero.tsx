import './Hero.css';
import videoBg from '../../assets/611998_Bread Breakfast Sandwich Healthy_By_FACTORY16_Artlist_HD.mp4';
import { NavLink } from 'react-router-dom';

type Props={
  isHomePage?: boolean;
  children: React.ReactNode;
}

const Hero = ({isHomePage = false, children} : Props) => {
  return (
    <section className={`app__hero ${isHomePage?'app__hero-homepage':''}`}>
      <div className='app__hero-video-container'>
        <video src={videoBg} autoPlay loop muted className="app__hero-video" />
      </div>
      <div className='app__hero-overlay'></div>
      <div className='container app__hero-content'>
        {children}
      </div>
    </section>
  );
}

export default Hero;
