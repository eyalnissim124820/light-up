import React, { useContext, useState } from 'react';
import useLocalStorage from '../useLocalStorage';
import { v4 as uuid } from 'uuid';

// import axios from 'axios';

const AppContext = React.createContext();

export function useApp() {
  return useContext(AppContext);
}


export function AppContextProvider({ children }) {


  // async function getAllPets() {
  //     const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/pets`);
  //     setAllPets(response.data)
  // }

  const [alarms, setAlarms] = useLocalStorage('alarms', []);

  const addToLocalStorage = (input) => {
    const date = new Date()
    const newAlarm = {
      id: uuid(),
      time: input.time,
      title: input.title,
      mode: true,
      date: date.toLocaleString()
    }
    console.log(newAlarm);
    setAlarms([...alarms, newAlarm])
  }

  const value = {
    alarms,
    addToLocalStorage
  }

  return (
    <>
      <AppContext.Provider value={value}>
        {children}
      </AppContext.Provider>
    </>
  )
}




