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
                    <a href="http://localhost:3000/about" className="animation-delay-[0.2s]"> About </a>
                    <a href="http://localhost:3000/" className="animation-delay-[0.2s]"> K-Tour </a>
                    <a href="http://localhost:3000/subwaytour" className="animation-delay-[0.2s]"> Seoul Subway Map  </a>
                </nav>
            </div>
        </>
    )
}