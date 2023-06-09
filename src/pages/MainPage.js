import React from 'react'
import ClockList from '../components/ClockList'
import { useApp } from "../contexts/AppContext"

import "../styles/MainPage.css"
import Sunrise_icon from "../attch/iPhone 13/iPhone 13/Sunrise_icon.svg"
import StopW_icon from "../attch/iPhone 13/iPhone 13/StopW_icon.svg"
import Timer_icon from "../attch/iPhone 13/iPhone 13/Timer.svg"
import World_icon from "../attch/iPhone 13/iPhone 13/World_icon.svg"
import Alarm_icon from "../attch/iPhone 13/iPhone 13/Alarm_icon.svg"
import { useNavigate } from 'react-router-dom'
import ClockAnimation from '../components/ClockAnimation'

export default function MainPage() {
    const { alarms } = useApp()

    const navigate = useNavigate()

    const handleToAddAlarm = () => {
        navigate('/add-alarm')
    }

    return (
        <div className='main-container'>
            <div className='main-page'>
                <div className='clock-board'>
                    <div className='board-header'>
                        <div className='board-bar'>
                            <button>Edit</button>
                            <button onClick={handleToAddAlarm}>Add</button>
                        </div>
                        <div className='board-title'>
                            Set Your Light Up!
                        </div>
                    </div>
                    <div className='list-of-clocks'>
                        {alarms[0] ?
                            <ClockList list={alarms} />
                            :
                            <ClockAnimation />
                        }
                    </div>
                </div>
                <div className='clock-footer'>
                    <button><img src={Sunrise_icon} alt='Sunrise_icon' /></button>
                    <button><img src={StopW_icon} alt='StopW_icon' /></button>
                    <button><img src={Timer_icon} alt='Timer_icon' /></button>
                    <button><img src={World_icon} alt='World_icon' /></button>
                    <button><img src={Alarm_icon} alt='Alarm_icon' /></button>
                </div>
            </div>
        </div>
    )
}
