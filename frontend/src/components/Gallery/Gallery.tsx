import {useState} from 'react';
import Lightbox from './Lightbox';

interface Image{
  src: string;
  alt: string;
}

type Props = {
  images: Image[];
  isHomePage?: boolean;
}

const Gallery = ({images, isHomePage = false}: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = ((index: number)=>{
    setCurrentIndex(index);
    setIsOpen(true);
  })

  const closeLightbox = ()=>setIsOpen(false);

  const goToPrev = ()=> setCurrentIndex((currentIndex-1+images.length)%images.length);

  const goToNext = ()=> setCurrentIndex((currentIndex+1)%images.length);

  return (
  <section className={`app__gallery ${isHomePage ? 'app__gallery-overview' : ''}`}>
    {images.map((image, index)=>(
      <div className='app__gallery-thumbnail-container'>
        <img key={index} src={image.src} alt={image.alt} onClick={()=>openLightbox(index)} className='app__gallery-thumbnail'/>
      </div>
    ))}
    <Lightbox images={images} isOpen={isOpen} currentIndex={currentIndex} onClose={closeLightbox} onNext={goToNext} onPrev={goToPrev}/>
  </section>)
}

export default Gallery;