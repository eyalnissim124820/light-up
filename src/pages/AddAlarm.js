import React, { useState } from 'react'
import { useApp } from '../contexts/AppContext'
import { useNavigate } from 'react-router-dom'

export default function AddAlarm() {

    const { addToLocalStorage } = useApp()
    const navigate = useNavigate()

    const [newAlarm, setNewAlarm] = useState({
        time: '',
        title: ''
    })

    const handleChange = (e) => {
        setNewAlarm({ ...newAlarm, [e.target.id]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(newAlarm)
        await addToLocalStorage(newAlarm)
        navigate('/home')
    }

    return (
        <div style={{ disply: 'flex', flexDirection: 'column' }}>
            <form onSubmit={handleSubmit}>
                <input type='time' id='time' placeholder='time' onChange={handleChange} />
                <input type='text' id='title' placeholder='title' onChange={handleChange} />
                <input type='submit' />
            </form>
        </div>
    )
}
