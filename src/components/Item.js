import React, { useEffect, useState } from "react";

export default function Item({item}){
    const [place, setPlace] = useState(item);

    const [traffics, setTraffics] = useState([]);
    useEffect(()=>{
        if(place.traffic != undefined && place.traffic.length > 0) {
            let trafficArr = place.traffic.split(',');
            trafficArr.forEach((line) => {
                let str = line.trim();
                console.log(str); 
                const number = str.substr(0, 3);
                const exit = str.substr(4);
                const traffic = {line: number, exit:exit};
                setTraffics(traffics => [...traffics, traffic]);
            })   
        }
    },[]);

    return (
        <div className="gridcell-container inline-block" role="gridcell">
            <div className="gridcell-item">
                <a className="gridcell-main">
                    <span className="seperate-line">  </span>
                    <div className="gridcell-main-image"> 
                        <img src={place.img} alt="" className="h-[200px] w-[250px] object-cover"/>
                    </div>
                    <div className="gridcell-main-text">
                        <h1 className="gridcell-main-text-title"> {place.place} </h1>
                        <p className="gridcell-main-text-content"> {place.description} </p>
                    </div>

                    <div className="gridcell-sub-text">
                        <p className="gridcell-sub-text-content"> {place.location} </p>
                        
                        {place.traffic != "" && 
                            <p className="gridcell-sub-text-content flex-col"> 
                                {/* <span className="inline-block bg-cpurple px-[2px] w-[33px] text-center text-offwhite rounded-md"> {traffic.line} </span> {traffic.exit} */}
                                {traffics.map((item)=>{
                                    console.log(traffics);
                                    return (
                                        <div className="my-[2px] inline-flex">
                                            <span className="inline-block bg-cpurple px-[2px] w-[33px] text-center text-offwhite rounded-md"> {item.line} </span> &nbsp; {item.exit} &nbsp;
                                        </div>
                                    )
                                })}
                            </p>
                        }
                        {place.url != "" && 
                            <div className="gridcell-sub-text-content">  
                                <a href={place.url}> {place.url} </a>
                            </div>
                        }
                    </div>
                </a>

                {/* <div className="gridcell-sub">
                    <a className="">
                        서브이미지
                        <div className="gridcell-sub-text">
                            <h1 className="gridcell-sub-text-title"> 서브 장소 </h1>
                            <span className="gridcell-sub-text-content"> 서브 장소설명 </span>
                        </div>
                    </a>
                </div> */}
            </div>
        </div>
    )
}