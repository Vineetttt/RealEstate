import React from 'react'; 
import Message from '../assets/images/paperPlane.png';
import Phone from '../assets/images/phone.png';
import LoginLogo from '../assets/images/loginLogo.png';
const NavHeader=()=>{
    return(
        <>
        <div className="hidden md:flex bg-blue-500 h-12 lg:px-72 md:px-20 ">
            <span className="flex pt-3">
                <img className='object-scale-down w-[24px] h-[24px]' src={Message} alt="" />
                <h6 className="text-white px-2 text-[16px]">mail.uremail.com</h6>
            </span>
            <span className="flex pt-3 px-10">
                <img className='object-scale-down w-[24px] h-[24px]' src={Phone} alt="" />
                <h6 className="text-white px-2 text-[16px]">mail.uremail.com</h6> 
            </span>
            <span className="flex pt-3 lg:px-96 md:px-32">
                <img className='object-scale-down w-[24px] h-[24px]' src={LoginLogo} alt="" />
                <a href="#" className="text-white px-2 text-[16px] cursor-pointer">Login/Signup</a>
            </span>
        </div>
        </>
    )
}
export default NavHeader;