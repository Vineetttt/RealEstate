import React from "react";
import Family1 from '../assets/images/family1.jpg';
import Vector1 from '../assets/images/vector1.png'

const Banner2 = ()=>{
    return(
    <>
     <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-5">
            <div className="bg-no-repeat mx-16 md:mx-60 lg:mx-36 mt-20 md:mt-28 lg:mt-28 flex 
            h-[300px] w-[280px] md:h-[460px] md:w-[435px] lg:h-[460px] lg:w-[435px]">
                <img src={Family1} alt=""></img>
            </div>
            <div className="pt-20 md:pt-28 lg:pt-28 px-0 mx-16 md:mx-60 lg:mx-0">
                <h1 className="text-[22px] md:text-[30px] lg:text-[30px] font-semibold">Are You Looking Best Property <br/> Near You ? Contact Us</h1>
                <h3 className="text-blue-500 text-[12px] md:text-[16px] lg:text-[16px] pt-5">Who Are We ? </h3>
                <p className="text-[15px] md:text-[18px] lg:text-[18px] pt-5">It is a long established fact that a reader will be distracted by the <br/>
                     readable content of a page when looking at its layout. The point of <br/>
                      using Lorem Ipsum is that it has normal distribution.</p>
                <p className="text-[15px] md:text-[18px] lg:text-[18px] pt-5">It is a long established fact that a reader will be distracted by the <br/>
                     readable content of a page when looking at its layout.</p>
                <div className="grid lg:grid-cols-2 grid-cols-1">
                    <div className="flex pt-10">
                        <img src={Vector1} alt="" className="w-[55px] h-[55px] md:w-[70px] md:h-[70px] lg:w-[70px] lg:h-[70px]"></img>
                        <div>
                            <h1 className="text-[14px] md:text-[20px] lg:text-[20px] px-5 font-normal">332+</h1>
                            <p className="text-[14px] md:text-[20px] lg:text-[20px] px-5 font-normal">Properties Listed</p>
                        </div>
                    </div>
                    <div className="flex pt-10">
                        <img src={Vector1} alt="" className="w-[55px] h-[55px] md:w-[70px] md:h-[70px] lg:w-[70px] lg:h-[70px]"></img>
                        <div>
                            <h1 className="text-[14px] md:text-[20px] lg:text-[20px] px-5 font-normal">158+</h1>
                            <p className="text-[14px] md:text-[20px] lg:text-[20px] px-5 font-normal">Properties Sold</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default Banner2;