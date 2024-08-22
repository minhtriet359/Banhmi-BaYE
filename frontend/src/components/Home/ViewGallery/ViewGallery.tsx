import './ViewGallery.css';
import gallery1 from '../../../assets/gallery-1.png';
import gallery2 from '../../../assets/gallery-2.png';
import { Link } from 'react-router-dom';

const ViewGallery = () => {
  return (
    <section className="app__home-view-gallery flex__center">
      <div className='container app__home-view-gallery-container flex__center'>
        <div className="app__home-view-gallery-box">
          <img src={gallery1} alt="gallery photo 1"/>
        </div>
        <Link to='/gallery' className="app__home-view-gallery-link flex__center">
          <p className="p__greatvibes">View our</p>
          <p className="headtext__montserrat">Gallery</p>
        </Link>
        <div className="app__home-view-gallery-box">
          <img src={gallery2} alt="gallery photo 2"/>
        </div>
      </div>
    </section>
  );
}

export default ViewGallery;
