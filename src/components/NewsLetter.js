import React from "react";
import News from '../assets/images/newsletter.png'

const NewsLetter =()=>{
    return(
        <>
        <div className="h-72 bg-no-repeat lg:flex hidden lg:visible"
        style={{ backgroundImage: `url(${News})` }}>
        <h1 className="font-bold text-white text-[30px] pt-24 px-24">Subscribe Our Email Addres<br/>For Future Updates and News</h1>
        <span className="pt-28"><input className="w-96 h-16 px-5" type="email" placeholder="Type Your Email Address"/>
        <button className="text-white bg-blue-600 w-36 h-16 mx-5 font-semibold text-[16px]">Submit</button></span>
    </div>
        </>
    )
}

export default NewsLetter;