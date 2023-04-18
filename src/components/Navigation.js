import React from "react";

export default function Navigation(){
    const toggleMenu = () => {
        document.body.classList.toggle("open");
    }

    return(
        <>
            <button className="side-menu-button" onClick={toggleMenu}/>
            <div className="side-background"/>

            <div className="side-menu">
                <nav> 
                    <a href="" className="animation-delay-[0.2s]"> About </a>
                    <a href="" className="animation-delay-[0.2s]"> K-Tour </a>
                    <a href="" className="animation-delay-[0.2s]"> Seoul Subway Map  </a>
                </nav>
            </div>
        </>
    )
}