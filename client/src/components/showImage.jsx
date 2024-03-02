import React from 'react';
import { Html } from '@react-three/drei';
import flatImage from './flat.jpg';

const ShowImage = () => {
  return (
    <Html>
      <a href="https://www.google.com/search?sca_esv=2e3cbffe5a601d85&rlz=1C1CHBF_enIN914IN914&sxsrf=ACQVn08uSk23KaRNxmlH_upd4p5CWnTX2w:1709360319272&q=flat+interior+design&tbm=isch&source=lnms&sa=X&ved=2ahUKEwjK9P2099SEAxVS4zgGHeO9BxsQ0pQJegQIERAB&biw=1536&bih=695&dpr=1.25#imgrc=y1NPaMrHQYoOdM" target="_blank" rel="noopener noreferrer">
        <img src={flatImage} alt="Flat" className='w-64 h-64' />
      </a>
    </Html>
  );
};

export default ShowImage;
