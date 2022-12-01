import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Horoscope from './components/horoscope/horoscope'
import MainPage from './components/mainPage/mainPage';
import './App.css';
import Layout from './components/layout/layout';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Layout />
      <Routes>
        <Route path="/mainPage" element={<MainPage/>}/>
        <Route path="/horoscope" element={<Horoscope/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
