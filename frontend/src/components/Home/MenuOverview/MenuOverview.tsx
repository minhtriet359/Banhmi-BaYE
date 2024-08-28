import { Link } from "react-router-dom";
import banhmi from '../../../assets/menu-banhmi.jpg'
import drinks from '../../../assets/menu-coffee.jpeg'
import pastries from '../../../assets/menu-pastries.webp'
import './MenuOverview.css'

const MenuOverview = () => {
  return (<section className="container app__menu-overview">
      <p className="p__montserrat">OUR MENU</p>
      <div className="app__menu-overview-container flex__center">
        <Link to='/menu' className="app__menu-overview-item flex__center">
          <img src={banhmi} alt='banhmi'/>
          <p className="p__montserrat flex__center">BANH MI</p>
        </Link>
        <Link to='/menu' className="app__menu-overview-item flex__center">
          <img src={drinks} alt='drinks'/>
          <p className="p__montserrat flex__center">DRINK</p>
        </Link>
        <Link to='/menu' className="app__menu-overview-item flex__center">
          <img src={pastries} alt='pastries'/>
          <p className="p__montserrat flex__center">PASTRIES</p>
        </Link>
      </div>
    </section>)
}

export default MenuOverview;