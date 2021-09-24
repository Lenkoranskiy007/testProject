import React, { useState, useEffect } from 'react'
import './index.scss'
import OnPoin from './assets/1x/OnPoint.png'
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
import Resurs1Main2 from './assets/1x/Main2/Resurs1Main2.png'
import Resurs2Main2 from './assets/1x/Main2/Resurs2Main2.png'
import Resurs3Main2 from './assets/1x/Main2/Resurs3Main2.png'
import Resurs4Main2 from './assets/1x/Main2/Resurs4Main2.png'
import Resurs5Main2 from './assets/1x/Main2/Resurs5Main2.png'









function App() {
  //Главный компонент в котором отрисовываются дочерние компоненты  


let n = 0
let i = 0 
let x0 = null

function unify(e) {	return e.changedTouches ? e.changedTouches[0] : e }

function lock(e) { x0 = unify(e).clientX }

function move(e) {
  const _C = document.querySelector('.container') 
  if(x0 || x0 === 0) {
    console.log(x0)
  let dx = unify(e).clientX - x0, s = Math.sign(dx)

  if((i > 0 || s < 0) && (i < n - 1 || s > 0))
  _C.style.setProperty('--i', i -= s)
  x0 = null
   
  }
  
}


useEffect(() => {
  // Обновляем заголовок документа с помощью API браузера
  const _C = document.querySelector('.container') 
  
  n = _C.children.length
  
  _C.style.setProperty('--n', n)
})
  
  return (<div>
    <GlobalLogo/>
    <div className="container" 
      onTouchStart={lock}
      onMouseDown={lock}
      onMouseUp={move}
      onTouchEnd={move}
    >
   <Main1/>
   <Main2/>
   <Main3/>
   </div>
    </div>
  );
}



const Main1 = () => {
  //Отрисовка всех компонентов главной страницы
  return <div className="page">
  <div className="main1">
  <ImagesGroupMain1/>
  </div>
  
  
  </div>
}

const Main2 = () => {
  //Отрисовка всех компонентов главной страницы
  return <div className="page">
  <div className="main2">
    <ImagesGroupMain2/>
  </div>
  </div>
}

const Main3  = () => {
  return <div className="page">
    <div className="main3">
    </div>

  </div>
}

const GlobalLogo = () => {
  //Отрисовываю верхний и нижний логотип 
  return <div className="test__logo">
  <img className="logo__img" src={Logo} alt="logo_home"/>
  <img className="logo__shape" src={OnPoin} alt="logo_shape" />
  </div>
}



const Main1Title = () => {
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


const ImagesGroupMain1 = () => {
  // Отрисовываю изображения главной(1) страницы 
  return  <div className="test__main__body">
    <Main1Title />
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

const ImagesGroupMain2 = () => {
  return <div className="test__main2__body">
 <img className="resurs1" src={Resurs1Main2} alt=""/>
 <img className="resurs2" src={Resurs2Main2} alt=""/>
 {/* <img className="resurs3" src={Resurs3Main2} alt=""/>
 <img className="resurs4" src={Resurs4Main2} alt=""/>
 <img className="resurs5" src={Resurs5Main2} alt=""/> */}
  </div>
}





export default App;
