import React from 'react';
import './Slide.css';

const Slide = ({ image, text, onClose, tipClass, btnClass }) => {
  return (
    <div className="slide" style={{ backgroundImage: `url(${image})` }}>
      <div className="overlay">
        <button className={`btn ${btnClass}`} onClick={onClose}></button>
        <div className={`tip ${tipClass}`}>{text}</div>
      </div>
    </div>
  );
};

export default Slide;
