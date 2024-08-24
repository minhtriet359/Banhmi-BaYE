import Feature from "../components/Home/Feature/Feature";
import Gallery from "../components/Gallery/Gallery";
import MenuOverview from "../components/Home/MenuOverview/MenuOverview";
import ViewGallery from "../components/Home/ViewGallery/ViewGallery";
import img1 from '../assets/gallery-1.png';
import img2 from '../assets/gallery-2.png';
import img3 from '../assets/gallery-3.png';
import img4 from '../assets/gallery-4.png';
import img5 from '../assets/gallery-5.jpg';

const images = [
  {src: img1, alt: "gallery-photo-1"},
  {src: img2, alt: "gallery-photo-2"},
  {src: img3, alt: "gallery-photo-3"},
  {src: img4, alt: "gallery-photo-4"},
  {src: img5, alt: "gallery-photo-5"},
]

const HomePage = () => {
  return <>
    <Feature/>
    <ViewGallery/>
    <MenuOverview/>
    <Gallery images={images} overview={true}/>
  </>
}

export default HomePage;