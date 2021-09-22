import React from 'react'
import './index.scss'
import OnPoint from './assets/1x/OnPoint.png'
import Logo from './assets/1x/Logo.png'
import Resurs1 from './assets/1x/Resurs1.png'
import Resurs2 from './assets/1x/Resurs2.png'
import Resurs3 from './assets/1x/Resurs3.png'
import Resurs4 from './assets/1x/Resurs4.png'
import Resurs5 from './assets/1x/Resurs5.png'
import Resurs6 from './assets/1x/Resurs6.png'
import Resurs7 from './assets/1x/Resurs7.png'
import Resurs8 from './assets/1x/Resurs8.png'
import Resurs9 from './assets/1x/Resurs9.png'
import ButtonNext from './assets/1x/ButtonNext.png'
// import { Main2 } from './Components/Main2'





// const _C = document.querySelector('.container'),
// N = _C.children.length;


// let i = 0, 
// x0 = null;

// function unify(e) {	return e.changedTouches ? e.changedTouches[0] : e };

// function lock(e) { x0 = unify(e).clientX };

// function move(e) {
// if(x0 || x0 === 0) {
// let dx = unify(e).clientX - x0, s = Math.sign(dx);

// if((i > 0 || s < 0) && (i < N - 1 || s > 0))
// _C.style.setProperty('--i', i -= s);
// x0 = null
// }
// };

// _C.style.setProperty('--n', N);

// _C.addEventListener('mousedown', lock, false);
// _C.addEventListener('touchstart', lock, false);

// _C.addEventListener('touchmove', e => { e.preventDefault() }, false);

// _C.addEventListener('mouseup', move, false);
// _C.addEventListener('touchend', move, false);




function App() {
  //Главный компонент в котором отрисовываются дочерние компоненты  

  return (
    <div className="container">
   <Main1/>
    
    </div>
  );
}



const Main1 = () => {
  //Отрисовка всех компонентов главной страницы
  return <>
  <GlobalLogo/>
  <MainTitle/>
  <ImagesGroup/>
  
  </>
}


const GlobalLogo = () => {
  //Отрисовываю верхний и нижний логотип 
  return <div className="test__logo">
  <img className="logo__img" src={Logo} alt=""/>
  <img className="logo__shape" src={OnPoint} />
  </div>
}



const MainTitle = () => {
  //Отрисовываю контент главной(1) страницы 
  return   <div className="test__title">
  <div className="title__hi">ПРИВЕТ, </div>
   <div className="title__commerce">
   ЭТО НЕ КОММЕРЧЕСКОЕ ЗАДАНИЕ 
 <img src={ButtonNext} alt=""/>

   </div>
   <div>
     
   </div>
   
 </div>
}


const ImagesGroup = () => {
  // Отрисовываю изображения главной страницы 
  return  <div className="test__main__images">
  <img className="resurs1" src={Resurs1} alt=""/>  
  <img className="resurs2" src={Resurs2} alt=""/>  
  <img className="resurs3" src={Resurs3} alt=""/>  
  <img className="resurs4" src={Resurs4} alt=""/>  
  <img className="resurs5" src={Resurs5} alt=""/>  
  <img className="resurs6" src={Resurs6} alt=""/>  
  <img className="resurs7" src={Resurs7} alt=""/>  
  <img className="resurs8" src={Resurs8} alt=""/>  
  <img className="resurs9" src={Resurs9} alt=""/>  

  </div>  
}





export default App;
