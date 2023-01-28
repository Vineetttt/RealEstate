import React, { useState } from "react";
import {auth} from '../Firebase';
import {useNavigate} from 'react-router-dom';
import {signInWithEmailAndPassword , createUserWithEmailAndPassword} from "firebase/auth";

function LoginForm (){
    const navigate = useNavigate();
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const signIn=()=>{
        signInWithEmailAndPassword(auth,email,password)
        .then(auth=>{navigate('/home')})
        .catch(error=>console.error(error))
    }
    const register=()=>{
        createUserWithEmailAndPassword(auth,email,password)
        .then(auth=>{navigate('/home')})
        .catch(error=>console.error(error))
    }
    return(
        <>
    <div className="pt-44">
        <h1 className="text-center text-[26px] font-semibold">Login Your Account</h1>
        <form className='max-w-[400px] w-full mx-auto -8 px-8 pt-12'>
                <div className='flex flex-col py-2'>
                    <label for='email'>Username</label>
                    <input onChange={(event)=>setEmail(event.target.value)} placeholder="User Name" className='border border-gray-300 mt-2 p-2 visible' type="text" />
                </div>
                <div className='flex flex-col  py-2'>
                    <label for='password'>Password</label>
                    <input onChange={(event)=>setPassword(event.target.value)} placeholder="Password" className='border border-gray-300 p-2 mt-2 ' type="password" />
                </div>
                <div className='flex justify-between  py-2'>
                    <p className='flex items-center'><input className='mr-2' type="checkbox" /> Remember Me</p>
                    <p>Forgot Password</p>
                </div>
                <button onClick={signIn} type="submit" class="text-black w-full bg-blue-500 h-[40px] mt-5">Login Account</button>
                <p class="mt-5 text-sm ">
                    Don&apos;t have an account yet? 
                    <button onClick={register} class="px-2 font-medium text-blue-500 hover:underline dark:text-primary-500">Sign In</button>
                </p>
                
            </form>
    </div>
        </>
    )
}
export default LoginForm;