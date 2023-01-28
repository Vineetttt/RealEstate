import React from "react";
import Location from '../assets/images/location.png';
import Bed from '../assets/images/bed.png';
import Shower from '../assets/images/shower.png';
import Rooms from '../assets/images/rooms.png';
import SqFt from '../assets/images/sqft.png';
import LivingRoom from '../assets/images/livingRoom.png'
const Recommendation=()=>{
    return(
        <>
        <div className="lg:flex text-center">
        <span>
        <h1 className="text-center mt-8 md:pt-20 lg:pt-20 text-[28px] md:text-[38px] lg:text-[38px] font-semibold">Recommended for you</h1>
            <p className="text-[15px] md:text-[18px] lg:text-[18px] px-24 pt-5">There are many variations of passages of lorem Ipsum available, but the <br/> majority have suffered alteration in some form injected.</p>
        </span>
        <span className="lg:pt-32 mx-auto">
            <button className="mt-10 lg:mt-0 text-white bg-blue-500 w-52 h-14 font-bold">See More Properties</button>
        </span>
    </div>

    <div className="lg:flex md:px-48 lg:px-0 px-12">
    <span className="lg:pt-28 lg:px-24 px-32">
        <h1 className="text-[20px] md:text-[30px] ld:text-[30px] font-semibold text-gray-600 pt-10">Bravo Apollo Appartments</h1>
        <h2 className="text-[30px] font-semibold text-gray-600 pt-5">$32000</h2>
        <p className="text-[18px] pt-5 leading-[30px]">There are many variations of passages of lorem Ipsum <br/>available, but the majority have suffered alteration in <br/> some form injected.</p>
        <span className="flex pt-6 text-[18px] text-gray-500"><img src={Location} alt="" className="w-[20px] h-[20px]"></img>&nbsp;&nbsp;779 6th Ave New York,NY 120400</span>
        <div className="grid grid-cols-2 md:flex lg:flex pt-6 text-gray-500">
            <span className="flex "><img src={Bed} alt="" className="w-[20px] h-[20px]"></img>4 Bed</span>
            <span className="flex md:px-4 lg:px-4"><img src={Shower} alt="" className="w-[20px] h-[20px]"></img>3 Bath</span>
            <span className="flex md:px-4 lg:px-4"><img src={Rooms} alt="" className="w-[20px] h-[20px]"></img>8 Rooms</span>
            <span className="flex md:px-4 lg:px-4"><img src={SqFt} alt="" className="w-[20px] h-[20px]"></img>1574 sq</span>
        </div>
    </span>
    <div className="pt-12 px-8 md:pt-28 md:px-36 lg:pt-28 lg:px-36">
        <img src={LivingRoom} alt="" className="w-[300px] h-[150px] lg:w-[600px] lg:h-[400px]"></img>
    </div>
    </div>
        </>
    )
}
export default Recommendation;