import React, { useState } from 'react';
import Slide from './Slide';
import './App.css';
import image1 from './assets/slide1.png';
import image2 from './assets/slide2.png';
import image3 from './assets/slide3.png';
import image4 from './assets/slide4.png';
import image6 from './assets/slide6.png';
import image7 from './assets/slide7.png';
import image8 from './assets/slide8.png';
import image9 from './assets/slide9.png';
import image10 from './assets/slide10.png';
import image12 from './assets/slide12.png';
import image13 from './assets/slide13.png';
import image15 from './assets/slide15.png';
import image16 from './assets/slide16.png';
import image17 from './assets/slide17.png';
import image18 from './assets/slide18.png';
import image20 from './assets/slide20.png';
import image22 from './assets/slide22.png';
import image23 from './assets/slide23.png';
import image24 from './assets/slide24.png';
import image25 from './assets/slide25.png';
import image26 from './assets/slide26.png';
import image27 from './assets/slide27.png';
import image28 from './assets/slide28.png';
import image29 from './assets/slide29.png';
import image31 from './assets/slide31.png';
import image33 from './assets/slide33.png';
import image34 from './assets/slide34.png';
import image35 from './assets/slide35.png';


const slidesData = [
  { image: image1, text: 'Отримав листа? Натискай на це посилання! (Click here)', tipClass: 'tip1', btnClass: 'btn1' },
  { image: image2, text: 'Змінюй пароль! Натискай "Reset"', tipClass: 'tip2', btnClass: 'btn2' },
  { image: image3, text: 'Щоб увійти в систему, натискай "Log in"', tipClass: 'tip3', btnClass: 'btn3' },
  { image: image4, text: 'Вводь змінену пошту та пароль. Натискай "Log in"', tipClass: 'tip4', btnClass: 'btn4' },
  { image: image6, text: 'Щоб змінити дані ментора, натискай на олівець поряд з іменем ментора', tipClass: 'tip6', btnClass: 'btn6' },
  { image: image7, text: 'Введи дані нового користувача і його роль, щоб створити', tipClass: 'tip7', btnClass: 'btn7' },
  { image: image8, text: 'Відредагуй дані і натисни "Save". Щоб призначити курс, натисни "Courses"', tipClass: 'tip8', btnClass: 'btn8' },
  { image: image9, text: 'Відміть курси, які веде ментор і вкажи напрямок (софт, тех чи ультімейт)', tipClass: 'tip9', btnClass: 'btn9' },
  { image: image10, text: 'Призначення софт', tipClass: 'tip10', btnClass: 'btn10' },
  { image: image12, text: 'Це сторінка курсів. Щоб додати новий, натисни "New"', tipClass: 'tip12', btnClass: 'btn12' },
  { image: image13, text: 'Через швидкий пошук знайдеш курс по назві', tipClass: 'tip13', btnClass: 'btn13' },
  { image: image15, text: 'Заповни дані новго курсу і клікни "Save"', tipClass: 'tip15', btnClass: 'btn15' },
  { image: image16, text: 'Курс створився в кінці списку', tipClass: 'tip16', btnClass: 'btn16' },
  { image: image17, text: 'Сторінка уроків. Щоб виставити заміну, натисни "Replace"', tipClass: 'tip17', btnClass: 'btn17' },
  { image: image18, text: 'Фільтр по курсах і даті', tipClass: 'tip18', btnClass: 'btn18' },
  { image: image20, text: 'Фільтр "Курс" - виставляється автоматично. Фільтр "Тип уроку" - обери тип уроку. Обери потрібний час в табличці і натисни "Create"', tipClass: 'tip20', btnClass: 'btn20' },
  // { image: image22, text: 'БАГ', tipClass: 'tip22', btnClass: 'btn22' },
  // { image: image23, text: 'БАГ', tipClass: 'tip23', btnClass: 'btn23' },
  // { image: image24, text: 'БАГ', tipClass: 'tip24', btnClass: 'btn24' },
  { image: image25, text: 'Зараз перед тобою сторінка призначення. Введи всі потрібні дані: Курс, Тип (група, індив, група для малих). Введи дату старту і кінця існування потоку (у груп заняття рік+, у індивів рік (уточнити))', tipClass: 'tip25', btnClass: 'btn25' },
  { image: image26, text: 'Обери потрібі слоти (група - обереться три слоти, індив - два, джуніор група - два) і натисни "Create". Якщо слоти обрано неправильно, натисни "Clear"', tipClass: 'tip26', btnClass: 'btn26' },
  { image: image27, text: 'Обери ментора, призначення, посилання на чат групи, потік, на який призначається вчитель. Курс, дати і розклад заповнюються автоматично', tipClass: 'tip27', btnClass: 'btn27' },
  { image: image28, text: 'Cторінка доступних менторів. Можна шукати по курсах, типу уроку, даті', tipClass: 'tip28', btnClass: 'btn28' },
  { image: image29, text: 'Cторінка потоків. Є фільтрація по курсу та назві. Для стоврення нового потоку натисни "New"', tipClass: 'tip29', btnClass: 'btn29' },
  { image: image31, text: 'Введи потрібні дані: наву, курс і опис. Натисни "Save"', tipClass: 'tip31', btnClass: 'btn31' },
  { image: image33, text: 'Cторінка з замінами', tipClass: 'tip33', btnClass: 'btn33' },
  { image: image34, text: 'Це наш зворотній відгук! Якщо тобою було знайдено якусь помилку в роботі, або є ідеї нового функціоналу, то натискай "Знайдено баг!" або "Є ідея!" відповідно', tipClass: 'tip34', btnClass: 'btn34' },
  { image: image35, text: 'Заповнюй дані і надсилай, ми розглянемо усі фідбеки :)', tipClass: 'tip35', btnClass: 'btn35' }
];

console.log(slidesData);


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
