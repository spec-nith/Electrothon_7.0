import React from 'react';
import bg from '../assets/background.png';
import Image from 'next/image';
import Faqs from '../components/Faq/faq.jsx'; // Corrected path

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
      <Faqs /> {/* Render Faqs component */}
    </div>
  );
};

export default MainPg;
