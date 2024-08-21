import './Hero.css';
import videoBg from '../../assets/611998_Bread Breakfast Sandwich Healthy_By_FACTORY16_Artlist_HD.mp4'
import { NavLink } from 'react-router-dom';

const Hero = () => {
  return (
  <section className='app__hero'>
    <video src={videoBg} autoPlay loop muted/>
    <div className='app__hero-overlay'></div>
    <div className='container app__hero-content'>
      <h2 className='p__greatvibes'>Every bite is a delight!!!</h2>
      <h1 className='headtext__montserrat'>BÁNH MÌ BA-YE</h1>
      <button className="custom__button app__hero-btn">
        <NavLink to="/" >VIEW OUR MENU</NavLink>
      </button>
    </div>
  </section>);
}

export default Hero;