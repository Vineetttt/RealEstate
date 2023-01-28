import React from "react";
import Vector1 from '../assets/images/vector1.png';
const BuySell =()=>{
    return(
    <>
    <div className="hidden mx-60 mt-28 lg:grid lg:grid-cols-3 lg:gap-10">
        <div> 
            <div className="flex">
            <img src={Vector1} alt="" className="h-[50px] w-[50px]"></img>
            <h3 className="text-[20px] px-3 font-semibold">Buy and Sell Property</h3>
            </div>
            <p className="text-[18px] pt-8 font-normal">There are many variations of  passages of Lorem Ipsum available but the majority suffered.</p>
        </div>
        <div> 
            <span className="flex">
            <img src={Vector1} alt="" className="h-[50px] w-[50px]"></img>
            <h3 className="text-[20px] px-3 font-semibold">Buy and Sell Property</h3>
            </span>
            <p className="text-[18px] pt-8 font-normal">There are many variations of  passages of Lorem Ipsum available but the majority suffered.</p>
        </div>
        <div> 
            <span className="flex">
            <img src={Vector1} alt="" className="h-12 w-12"></img>
            <h3 className="text-[20px] px-3 font-semibold">Buy and Sell Property</h3>
            </span>
            <p className="text-[18px] pt-8 font-normal">There are many variations of  passages of Lorem Ipsum available but the majority suffered.</p>
        </div>
    </div>
    </>
    )
}
export default BuySell;