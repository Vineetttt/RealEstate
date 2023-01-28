import React from "react";

const Banner1 = ()=>{
    return(
    <>
<div className=" w-screen h-[400px] md:w-full md:h-[900px] lg:w-screen lg:h-screen bg-no-repeat bg-cover object-fill "
    style={{ backgroundImage: "url(https://thearchitectsdiary.com/wp-content/uploads/2020/06/Property-.jpg)" }}>
    <h1 className="text-[20px] md:text-[30px] lg:text-[40px] text-white font-extrabold font-sans text-center pt-32 md:pt-80 lg:pt-72">Find your Dream Properties</h1>
    <div className="w-[300px] h-[180px] md:w-[500px] md:h-[230px] lg:w-[900px] lg:h-[180px]
     bg-white items-center mt-3 pt-2 mx-auto md:mt-10 lg:mt-10 md:pt-5 lg:pt-5">
        <span className="font-semibold px-3 md:px-5 lg:px-5 text-[12px] md:text-[18px] lg:text-[18px] ">Search your properties</span>
        <div className="grid lg:grid-cols-4 grid-cols-2 md:justify-between lg:justify-between mt-2 md:mt-5 lg:mt-5">
            <span className="px-3 md:px-5 lg:px-5">
            <label  className="block mb-2 text-[12px] md:text-sm lg:text-sm font-medium text-gray-500">Property Type</label>
            <select className="border-2 w-28 h-8 md:w-44 lg:w-44 md:h-10 lg:h-10">
                <option  className="font-light">Select</option>
                <option value="1">Value1</option>
                <option value="2">Value2</option>
                <option value="3">Value3</option>
                <option value="4">Value4</option>
            </select>
            </span>
            <span className="px-3 md:px-5 lg:px-5">
                <label  className="block mb-2 text-[12px] md:text-sm lg:text-sm font-medium text-gray-500">Property Size</label>
                <select className="border-2 w-28 h-8 md:w-44 lg:w-44 md:h-10 lg:h-10">
                    <option  className="font-light px-5">Select</option>
                    <option value="1">Value1</option>
                    <option value="2">Value2</option>
                    <option value="3">Value3</option>
                    <option value="4">Value4</option>
                </select>
                </span>
            <span className="px-3 md:px-5 lg:px-5 pt-2 md:pt-0 lg:pt-0">
                    <label  className="block mb-2 text-[12px] md:text-sm lg:text-sm font-medium text-gray-500">Location</label>
                    <select className="border-2 w-28 h-8 md:w-44 lg:w-44 md:h-10 lg:h-10">
                        <option  className="font-light px-5">Select</option>
                        <option value="1">Value1</option>
                        <option value="2">Value2</option>
                        <option value="3">Value3</option>
                        <option value="4">Value4</option>
                    </select>
            </span>
            <span className="px-3 md:px-5 lg:px-5 pt-2 md:pt-0 lg:pt-0">
                    <label  className="block mb-2 text-sm invisible font-medium text-gray-500">Location</label>
                    <button type="button" className="text-white bg-blue-600 w-20 h-8 md:w-44 lg:w-44 md:h-10 lg:h-10">Search</button>
            </span>
        </div>
    </div>
    </div>
    </>
    )
}

export default Banner1;
