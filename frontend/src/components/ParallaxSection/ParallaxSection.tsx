import { ReactNode } from 'react';
import './ParallaxSection.css';

type Props = {
  children: ReactNode;
}

const ParallaxSection = ({children}: Props) => {
  return (
      <div className="app__parallax-section flex__center">
        {children}
      </div>
  );
};

export default ParallaxSection;
