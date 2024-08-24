import Gallery from "../components/Gallery/Gallery";
import Hero from "../components/Hero/Hero";
import images from '../constants/galleryimages'

const GalleryPage = () => {
  return (
    <>
    <Hero><h1 className="headtext__montserrat">GALLERY</h1></Hero>
    <section className="container section__padding">
      <Gallery images={images}></Gallery>
    </section>
    </>);
    
}

export default GalleryPage;