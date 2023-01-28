import React from "react";
import Call from "../assets/images/call.png";
import Message from "../assets/images/message.png";
import Location from "../assets/images/location.png";
import loginBackground from "../assets/images/loginBackground.png";

const DisplayTitle=()=>{
    return(
        <>
    <div className="h-80"
    style={{ backgroundImage: `url(${loginBackground})` }}>
        <div>
            <div className="text-center">
                <p>
                    <h1 className="pt-[120px] text-[28px] md:text-[38px] lg:text-[38px] font-semibold">Account Login</h1>
                    <h3>Home</h3>
                    <h3>Login</h3>
                </p>
            </div>
        </div>
    </div>
        </>
    )
}
export default DisplayTitle;