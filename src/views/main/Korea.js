import React from "react";
import Navigation from "../../components/Navigation";

function Korea() {

  const translate = document.querySelectorAll('.translate'); 
  window.addEventListener('scroll', ()=>{
    let scroll = window.pageYOffset;
    // console.log(scroll);

    translate.forEach(element => {
      let speed = element.dataset.speed;
      console.log(speed);
      element.style.transform = `translateY(${scroll*speed}px)`;
    })

  })
  return (
    <header className="">
      
      <Navigation/>

      <h1 className="main-title translate" data-speed="0.1"> KOREA </h1>
      <img src="/img-right.png" alt="" className="seoul-right translate" data-speed="-0.20"/>
      <img src="/img-left.png" alt="" className="seoul-left translate" data-speed="-0.25"/>
      <img src="/background.png" alt="" className="seoul-bg translate" data-speed="0.5"/>

    </header>
  )
}

export default Korea;
