import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';

import LandingPage from './pages/LandingPage';
import MainPage from './pages/MainPage';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='home' element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
