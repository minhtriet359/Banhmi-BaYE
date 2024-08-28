import './Footer.css';
import bayeLogo from '../../assets/logo-with-slogan.png';
import phoneIcon from '../../assets/phone-icon.png';
import emailIcon from '../../assets/email-icon.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (<section className='app__footer'>
      <div className='app__footer-upper'>
        <div className='container flex__center' style={{justifyContent:'space-between'}}>
          <div className='app__footer-upper-section flex__center'>
            <img className='app__footer-upper-section-logo' src={bayeLogo} alt='baye-logo'/>
            <div className='app__footer-section-content'>
              <p className='p__montserrat'><strong>BÁNH MÌ BA-YE</strong></p>
              <p className='p__montserrat'>Try one of our signature selections and see what everyone’s talking about!</p>
            </div>
          </div>
          <div className='app__footer-upper-section flex__center' style={{alignItems:'flex-start'}}>
            <img src={phoneIcon} alt='phone-icon'/>
            <div className='app__footer-section-content'>
              <p className='p__montserrat'><strong>CALL US</strong></p>
              <p className='p__montserrat'>720-883-7420</p>
            </div>
          </div>
          <div className='app__footer-upper-section flex__center'>
            <img src={emailIcon} alt='phone-icon'/>
            <div className='app__footer-section-content'>
              <p className='p__montserrat'><strong>EMAIL</strong></p>
              <p className='p__montserrat'>Service@banhmiba-ye.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className='app__footer-lower p__montserrat'>
        Copyright {currentYear} © <strong>BANH MI BA-YE</strong>
      </div>
    </section>)
}

export default Footer; 