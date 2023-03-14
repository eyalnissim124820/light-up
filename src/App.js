import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';

import LandingPage from './pages/LandingPage';
import MainPage from './pages/MainPage';
import AddAlarm from './pages/AddAlarm';

function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='home' element={<MainPage />} />
          <Route path='add-alarm' element={<AddAlarm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
