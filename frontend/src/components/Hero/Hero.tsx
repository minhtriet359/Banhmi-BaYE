import './Hero.css';
import videoBg from '../../assets/611998_Bread Breakfast Sandwich Healthy_By_FACTORY16_Artlist_HD.mp4';

type Props={
  isHomePage?: boolean;
  children: React.ReactNode;
}

const Hero = ({isHomePage = false, children} : Props) => {
  return (
    <section className={`app__hero custom-border ${isHomePage?'app__hero-homepage':''}`}>
      <div className='app__hero-video-container'>
        <video src={videoBg} autoPlay loop muted playsInline className="app__hero-video" />
      </div>
      <div className='app__hero-overlay custom-border'></div>
      <div className='container app__hero-content'>
        {children}
      </div>
    </section>
  );
}

export default Hero;
