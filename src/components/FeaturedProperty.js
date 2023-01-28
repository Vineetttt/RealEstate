import React from "react";
import Location from '../assets/images/location.png';
import Bed from '../assets/images/bed.png';
import Shower from '../assets/images/shower.png';
import Rooms from '../assets/images/rooms.png';
import SqFt from '../assets/images/sqft.png';
import cardDetails from '../components/FeaturedPropData'


const Featured=()=>{
    return(
        <>
    <div>
            <h1 className="text-center pt-[120px] text-[28px] md:text-[38px] lg:text-[38px] font-semibold">Our Feature Property</h1>
            <p className="text-center text-[15px] md:text-[18px] lg:text-[18px]  pt-[16px]">There are many variations of passages of Lorem Ipsum available but the this in 
            <br/>majority have suffered alteration in some</p>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-5 lg:mt-20 lg:mx-36 md:mt-10 md:mx-24 mx-12  mt-10">
        {cardDetails.map(card=>(
            <div>
            <div className="w-[300px] h-[400px] md:w-[540px] md:h-[470px] lg:w-[540px] lg:h-[470px] shadow mx-auto mt-20 relative">
            <img src={card.img} alt=""></img>
            <div>
                <p className="text-[18px] md:text-[24px] lg:text-[24px] font-semibold px-4 pt-5">{card.title}</p>
                <p className="text-[15px] md:text-[16px] lg:text-[16px] px-5 pt-3">There are many variations of passages of lorem Ipsum available, but the majority have suffered alteration in some form injected.</p>
                <p className="flex px-4 pt-6"><img src={Location} alt="" className="w-[20px] h-[20px]"></img>779 6th Ave New York,NY 120400</p>
                <div className="grid grid-cols-2 md:flex lg:flex px-4 pt-6">
                    <h3 className="flex "><img src={Bed} alt="" className="w-[20px] h-[20px]"></img>4 Bed</h3>
                    <h3 className="flex md:px-4 lg:px-4"><img src={Shower} alt="" className="w-[20px] h-[20px]"></img>3 Bath</h3>
                    <h3 className="flex md:px-4 lg:px-4"><img src={Rooms} alt="" className="w-[20px] h-[20px]"></img>8 Rooms</h3>
                    <h3 className="flex md:px-4 lg:px-4"><img src={SqFt} alt="" className="w-[20px] h-[20px]"></img>1574 sq</h3>
                </div>
            </div> 
            <div className="bg-blue-500 text-white font-semibold absolute top-3 left-3 h-10 w-20 text-center pt-2">
                <span>$32000</span>
            </div>
        </div>
            </div>
        ))}
    </div>
    <div className="flex flex-col justify-center items-center pt-16">
        <button className="text-white bg-blue-500 w-40 h-14 font-bold mb-28">See More </button>
    </div>s
        </>
    )
}
export default Featured;