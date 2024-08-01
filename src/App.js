import React, { useState } from 'react';
import Slide from './Slide';
import './App.css';

import image1 from './assets/slide1.png';
import image2 from './assets/slide2.png';
import image3 from './assets/slide3.png';

const slidesData = [
  { image: image1, text: 'Отримав листа? Натискай на це посилання! (Click here)', tipClass: 'tip1', btnClass: 'btn1' },
  { image: image2, text: 'Змінюй пароль! Натискай "Reset"', tipClass: 'tip2', btnClass: 'btn2' },
  { image: image3, text: 'Щоб увійти в систему, натискай "Log in"', tipClass: 'tip3', btnClass: 'btn3' },
  
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSlideClose = () => {
    setCurrentIndex(currentIndex + 1);
  };

  return (
    <div className="App">
      {slidesData.slice(currentIndex, currentIndex + 1).map((slide, index) => (
        <Slide
          key={index}
          image={slide.image}
          text={slide.text}
          onClose={handleSlideClose}
          tipClass={slide.tipClass}
          btnClass={slide.btnClass}
        />
      ))}
      {currentIndex === slidesData.length && (
        <button onClick={() => setCurrentIndex(0)} className="restart-button">
          Повторити
        </button>
      )}
    </div>
  );
}

export default App;
