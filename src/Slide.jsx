import React from 'react';
import './Slide.css';

const Slide = ({ image, text, onClose, tipClass, btnClass }) => {
  return (
    <div className="slide" style={{ backgroundImage: `url(${image})` }}>
      <div className="overlay">
        <button className={btnClass} onClick={onClose}></button>
        <div className={tipClass}>{text}</div>
      </div>
    </div>
  );
};

export default Slide;
