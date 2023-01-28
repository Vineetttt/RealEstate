import React from "react";
import Call from "../assets/images/call.png";
import Message from "../assets/images/message.png";
import Location from "../assets/images/location.png";

const Footer=()=>{
    return(
        <>
    <footer>
    <div className="px-12 pt-24 md:px-36 md:pt-12 lg:px-36 lg:pt-12">
        <a href="index.html" className="flex text-2xl font-[Popp] cursor-pointer">
            <img src="img/logo.png" className="h-16 inline " alt=""/>
            <h1 className="text-[40px] pt-5 font-normal">DreamHome</h1>
        </a>
        <p className="text-[16px] md:text-[20px] lg:text-[20px] pt-[16px]">There are many variations of passages of Lorem Ipsum available but the this in <br/> majority have suffered alteration in some by injected humor of random</p>
    </div>

    <div className="block lg:flex">
        <div className="w-[445px] h-[435px] shadow bg-white md:mx-36 md:mt-20 lg:mx-36 lg:mt-20 mt-10 ">
            <div className="flex pt-10 px-10" >
                <div className="w-[60px] h-[60px] flex bg-blue-500 rounded-full items-center">
                    <img src={Call} alt="" className="h-[24px] w-[24px] mx-auto"/>
                </div>
                <div>
                    <p className="text-[15px] text-gray-500 px-5">Call Now</p>
                    <h3 className="text-[20px] px-5 font-medium">+123 456 789 000</h3>
                </div>
            </div>
            <div className="flex pt-12 px-10">
                <div className="w-[60px] h-[60px] flex bg-blue-500 rounded-full items-center">
                    <img src={Message} alt="" className="h-[24px] w-[24px] mx-auto"/>
                </div>
                <div>
                    <p className="text-[15px] text-gray-500 px-5">Email Us</p>
                    <h3 className="text-[20px] px-5 font-medium">Mail.urmail.com</h3>
                </div>
            </div>
            <div className="flex pt-12 px-10">
                <div className="w-[60px] h-[60px] flex bg-blue-500 rounded-full items-center">
                    <img src={Location} alt="" className="h-[24px] w-[24px] mx-auto"/>
                </div>
                <div>
                    <p className="text-[15px] text-gray-500 px-5">Our Office</p>
                    <h3 className="text-[20px] px-5 font-medium">2972 Westheimer, Illinois 85486 </h3>
                </div>
            </div>
        </div>
        <div className="mt-20 lg:block md:px-36 lg:px-0 px-12">
                <h1 className="text-[30px] font-semibold ">About Us</h1>
                <div className="block md:flex lg:block">
                    <a href="#"><p className="text-[18px] pt-5">How It Works</p></a>
                    <a href="#"><p className="text-[18px] pt-5 md:px-5 lg:px-0">Meet Our Team</p></a>
                    <a href="#"><p className="text-[18px] pt-5 md:px-5 lg:px-0">Help Desk</p></a>
                    <a href="#"><p className="text-[18px] pt-5 md:px-5 lg:px-0">Prices & Plannning</p></a>
                </div>
        </div>
            <div className="mt-20 lg:block px-12 md:px-36 lg:px-0 mx-auto" >
                <h1 className="text-[30px] font-semibold">Quick Links</h1>
                <div className="block md:flex lg:block">
                    <a href="#"><p className="text-[18px] pt-5">Home</p></a>
                    <a href="#"><p className="text-[18px] pt-5 md:px-5 lg:px-0">Our Services</p></a>
                    <a href="#"><p className="text-[18px] pt-5 md:px-5 lg:px-0">About Us</p></a>
                    <a href="#"><p className="text-[18px] pt-5 md:px-5 lg:px-0">Contact Us</p></a>
                </div>
        </div>
    </div>
    <p className="bg-blue-500 h-10 mt-12 pt-2 text-[16px] text-white text-center">
    All Rights Reserved by GDSC
    </p>
    </footer>
        </>
    )
}
export default Footer;