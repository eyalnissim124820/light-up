import React, { useContext, useState } from 'react';
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


  const clock_list = [
    {
      time: '8:00',
      title: 'Wake Up',
      mode: true
    },
    {
      time: '8:05',
      title: 'Wake Up',
      mode: false
    },
    {
      time: '8:10',
      title: 'Wake Up',
      mode: true
    },
    {
      time: '8:10',
      title: 'Wake Up',
      mode: true
    },
    {
      time: '8:10',
      title: 'Wake Up',
      mode: true
    },
    {
      time: '8:10',
      title: 'Wake Up',
      mode: true
    },
  ]

  const value = {
    clock_list
  }

  return (
    <>
      <AppContext.Provider value={value}>
        {children}
      </AppContext.Provider>
    </>
  )
}




