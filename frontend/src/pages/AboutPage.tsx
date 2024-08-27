import Hero from "../components/Hero/Hero";
import bayeLogo from '../assets/logo-with-slogan.png'
import './AboutPage.css'

const AboutPage = () => {
  return (
  <>
    <Hero><h1 className="headtext__montserrat">ABOUT US</h1></Hero>
    <section className="app__about-us container section__padding">
      <div className="app__about-us-left flex__center" style={{flexDirection:'column'}}>
        <p className="p__montserrat" style={{fontSize:'1.6rem', marginBottom:'2.5rem'}}><strong>Call now</strong></p>
        <p className="headtext__montserrat">720-883-7420</p>
        <img src={bayeLogo} alt="baye-logo"/>
        <button className="custom__button">ORDER ONLINE NOW</button>
      </div>
      <div className="app__about-us-right">
        <p className="p__montserrat" style={{fontSize:'1.8rem', marginBottom:'2.5rem'}}>
          <strong><em>Welcome to Bánh Mì Ba-Ye</em></strong>
        </p>
        <p className="p__montserrat">We are a unique traditional Vietnamese banh mi (sandwich) and coffee shop. Our line of extensive handcrafted products includes croissants and bun roll sandwiches to go along with our delicious Vietnamese coffee, slushes, milk tea and fresh tea that are made fresh to order.</p>
        <br></br>
        <p className="p__montserrat">Not only do we offer great sandwiches and drinks, but we also pride ourselves in offering fresh baked French baguettes, cakes and pastry that are crafted every day. The freshness of our products is the key to our success.</p>
        <br></br>
        <p className="p__montserrat">At Bánh Mì Ba-Ye, we take pride in serving our customers with a friendly smile, professional attitude and strive to bring our customers the very best products possible by paying attention to every detail, so our customer has a lasting impression of our people, products and cultures.</p>
        <br></br>
        <p className="p__montserrat">Our mission is very simple: to satisfy our guests with the very best food quality, excellent customer service and great value. Let’s take your taste buds to the next level and try many of our freshly handmade and daily prepped items.</p>
      </div>
    </section>
  </>
);
}

export default AboutPage;