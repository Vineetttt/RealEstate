import React from 'react';
import NavHeader from './components/NavHeader';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import DisplayTitle from './components/LoginRegister';
import LoginForm from './components/LoginForm';

const LoginPage=()=>{
    return(
    <React.StrictMode>
        <NavHeader />
        <NavBar />
        <DisplayTitle />
        <LoginForm/>
        <Footer />
    </React.StrictMode>
    )
}
export default LoginPage;