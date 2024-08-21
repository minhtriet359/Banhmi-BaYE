import './Feature.css'
import FeatureCard from './FeatureCard';
import icon1 from '../../assets/feature-icon1.webp'
import icon2 from '../../assets/feature-icon2.webp'
import icon3 from '../../assets/feature-icon3.webp'

const CARD_CONTENT=[{
  img: icon1,
  title: 'Signature Dishes',
  description: 'Spotlight on our customer favorites and chef’s specials that keep customers satisified and coming back.'
},
{
  img: icon2,
  title: 'Order Online',
  description: 'Shop our online menu and pick as many or few meals as you need. We never want you to miss out.'
},
{
  img: icon3,
  title: 'Customizable Options',
  description: 'Emphasize the flexibility of our menu to cater to different dietary preferences including vegetarian, vegan, and halal choices.'
}];

const Feature = () => {
  return (
  <section className="app__home-feature">
    <h2 className="p__greatvibes">Tasty & Fresh</h2>
    <h1 className='p__montserrat'>EXPERIENCE THE AUTHENTIC TASTE OF VIETNAM</h1>
    <div className='flex__center app__home-feature_card_container'>
      {CARD_CONTENT.map((card, index)=>(
        <FeatureCard key={index} img={card.img} title={card.title} description={card.description}/>))}
    </div>
  </section>);
}

export default Feature;