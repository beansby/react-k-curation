import React, { useEffect } from "react";
import Navigation from "../../components/Navigation";

function Korea() {

  useEffect(()=>{
    const translate = document.querySelectorAll('.movement'); 

    window.addEventListener('scroll', ()=>{
      let y = window.pageYOffset;
      // console.log(y);

      translate.forEach(element => {
        let speed = element.dataset.speed;
        // console.log(speed);
        element.style.transform = `translateY(${y*speed}px)`;
        console.log("움직이는중");
      })
    })
  },[]);

  return (
    <header className="">
      
      <h1 className="main-title movement" data-speed="0.1"> KOREA </h1>
      <img src="/img-right.png" alt="" className="seoul-right movement" data-speed="-0.10"/>
      <img src="/img-left.png" alt="" className="seoul-left movement" data-speed="-0.15"/>
      <img src="/background.png" alt="" className="seoul-bg movement" data-speed="0.5"/>

    </header>
  )
}

export default Korea;
