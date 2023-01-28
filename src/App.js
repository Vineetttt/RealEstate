import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes ,Route} from 'react-router-dom';
import './index.css';
import HomePage from './Home';
import LoginPage from './Login';

function App(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path='/home' element={<HomePage/>}/>
            <Route path='/' element={<LoginPage/>}/>
        </Routes>
        </BrowserRouter>
    );
}
export default App;