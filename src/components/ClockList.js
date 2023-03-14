import React, { useEffect, useState } from 'react'
import "../styles/ClockList.css"
import Switch from './Switch'

export default function ClockList({ list }) {
    const [toggle, setToggle] = useState(false)


    return (
        <ul>
            {
                list?.map((clockDisplay, index) =>
                    <li key={index}>
                        <div className='left-clock-display'>
                            <div className='time'>{clockDisplay.time}</div>
                            <div className='title'>{clockDisplay.title}</div>
                        </div>
                        <div className='right-clock-display'><Switch setToggle={setToggle} toggle={toggle} mode={clockDisplay.mode} clock={clockDisplay} /></div>

                    </li>)
            }
        </ul>
    )
}
