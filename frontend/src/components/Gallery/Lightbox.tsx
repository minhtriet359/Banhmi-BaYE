import { FaTimes, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import './Gallery.css';

interface Image {
  src: string;
  alt: string;
}

type Props = {
  images: Image[];
  isOpen: boolean;
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
};

const Lightbox = ({ images, isOpen, currentIndex, onClose, onPrev, onNext }: Props) => {
  if (!isOpen || !images.length) return null;

  // Handle click outside to close the lightbox
  const handleOverlayClick = () => {
    // Close the lightbox when clicking on the overlay (outside the image)
    onClose();
  };

  // Stop event propagation to prevent closing when clicking on the content
  const handleContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <div className='gallery__lightbox-overlay' onClick={handleOverlayClick}>
      <button className='gallery__lightbox-close' onClick={onClose}><FaTimes /></button>
      <button className='gallery__lightbox-next' onClick={(e)=>{
        onNext();
        e.stopPropagation();}}>
          <FaArrowRight />
      </button>
      <button className='gallery__lightbox-prev' onClick={(e)=>{
        onPrev();
        e.stopPropagation();}}><FaArrowLeft /></button>
      <div className='gallery__lightbox-content' onClick={handleContentClick}>
        <img className='gallery__lightbox-image' src={images[currentIndex].src} alt={images[currentIndex].alt} />
        <div className='gallery__lightbox-index'>{currentIndex + 1} of {images.length}</div>
      </div>
    </div>
  );
};

export default Lightbox;
