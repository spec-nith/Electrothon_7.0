import React from 'react';
import bg from '../assets/background.png';
import Image from 'next/image';
import Prize from '../components/Prizes/Prizes.jsx'; // Corrected path

const MainPg = () => {
  return (
    <div className="relative">
      <Image
        className="h-screen w-screen"
        src={bg}
        alt="Background"
        fill  
        style={{ objectFit: 'cover' }} // Apply objectFit via style prop
      />
      <Prize /> {/* Render Faqs component */}
    </div>
  );
};

export default MainPg;
