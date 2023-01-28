import React from "react";
import cityDetails from "../components/CitiesData";
import Vector from '../assets/images/locationVectorWhite.png'

const Cities=()=>{
    return(
        <>
    <div>
        <h1 className="text-center pt-[120px] text-[24px] md:text-[38px] lg:text-[38px] font-semibold">Find Properties in These Cities</h1>
        <p className="text-center text-[15px] md:text-[18px] lg:text-[18px] pt-[16px]">There are many variations of passages of Lorem Ipsum available but the this in <br/> majority have suffered alteration in some</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 lg:gap-8 lg:mt-20 lg:mx-36 md:mt-10 md:mx-24 mx-12 mt-10">
    {cityDetails.map(city=>(
        <div>
        <div className="relative">
            <img src={city.cityImage} alt=""/>
            <div className="text-white font-bold flex absolute bottom-5 left-3"> 
                <img src={Vector} alt="" />
                <p className="px-2">{city.cityName}</p>
            </div>
        </div>
        </div>
    ))}
    </div>

    <div className="flex flex-col justify-center items-center pt-16">
        <button className="text-white bg-blue-500 w-40 h-14 font-bold">See All Cities</button>
    </div>
        </>
    )
}
export default Cities;