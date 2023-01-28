import React from "react";
import Instagram from "../assets/images/instagram.png";
import Linkedin from "../assets/images/linkedin.png";
import Pintrest from "../assets/images/pintrest.png";
import AgentData from "../components/AgentData";

const Agent=()=>{
    return(
        <>
        <div className="pt-10">
        <h1 className="text-center pt-[120px] text-[24px] md:text-[38px] lg:text-[38px] font-semibold">Meet Our Popular Agents</h1>
        <p className="text-center text-[15px] md:text-[18px] lg:text-[18px] pt-[16px]">There are many variations of passages of Lorem Ipsum available but the this in <br/> majority have suffered alteration in some</p>
    </div>

    <div className="grid lg:grid-cols-3 md:grid-cols-1 lg:mx-36 lg:mt-10 lg:gap-3 md:mx-64 mx-8 mt-10">
        {AgentData.map(agent=>(
            <div className="w-[350px] h-[332px] shadow mt-8 lg:mt-0">
            <div className="px-28 pt-10">
                <img src={agent.agentImage} alt="" className="rounded-full"/>
            </div>
            <h1 className="text-[24px] font-semibold text-center pt-10">{agent.agentName}</h1>
            <p className="text-[18px] text-gray-500 text-center pt-3">Agents</p>
            <span className="flex px-28 pt-5 justify-between">
                <a href="#"><img src={Instagram} alt=""/></a>
                <a href="#"><img src={Linkedin} alt=""/></a>
                <a href="#"><img src={Pintrest} alt=""/></a>
            </span>
        </div>
        ))}
    </div> 

    <div className="flex flex-col justify-center items-center pt-16">
        <button className="text-white bg-blue-500 w-40 h-14 font-bold">See All Agents</button>
    </div>
        </>
    )
}
export default Agent;