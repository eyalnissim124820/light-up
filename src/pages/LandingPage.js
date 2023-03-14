import React from 'react'
import logo from '../attch/iPhone 13/Rectangle 129.svg';
import title from '../attch/iPhone 13/LightUp.svg'

import "../styles/LandingPage.css"
import { useNavigate } from 'react-router-dom';

export default function LandingPage() {
    const navigate = useNavigate()

    const handleStart = () => {
        navigate('/home')
    }

    return (
        <div className='main-container'>
            <div className='landing-page'>
                <div className='logo-title-container'>
                    <img src={logo} alt='logo' id='logo' />
                    <img src={title} alt='title' id='title' />
                </div>
                <button className='button-start' onClick={handleStart}><p>Start</p></button>
            </div>
        </div>
    )
}

