import React from "react";
import DreamLogo from '../assets/images/logo.png';

const NavBar=()=>{
    return(
    <>
        <nav className="p-5 bg-white shadow md:flex md:items-center md:justify-between">
        <div className="flex justify-between items-center">
            <a href="#" className="text-2xl font-[Popp] cursor-pointer flex">
                <img src={DreamLogo} className="w-[30px] h-[40px] inline" alt=""></img>
                <h1 className="font-normal pt-1">DreamHome</h1>
            </a>
            <span className="text-3xl cursor-pointer md:hidden mx-2 block">
            </span>
        </div>
        <ul className="md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-0 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500">
            <li className="mx-4 my-6 md:my-0">
                <a href="#" className="text-[18px] text-blue-500">Home</a>
            </li>
            <li className="mx-4 my-6 md:my-0">
                <a href="#" className="text-[18px]">Property</a>
            </li>
            <li className="mx-4 my-6 md:my-0">
                <a href="#" className="text-[18px]">Blogs</a>
            </li>
            <li className="mx-4 my-6 md:my-0">
                <a href="#" className="text-[18px]">Agents</a>
            </li>
            <li className="mx-4 my-6 md:my-0">
                <a href="#" className="text-[18px]">FAQs</a>
            </li>
            <li className="mx-4 my-6 md:my-0">
            <a href="#" className="text-[18px]">Contact</a>
            </li>
        </ul>
        </nav>
        </>
    )
}
export default NavBar;