import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Horoscope from './components/horoscope/horoscope'
import MainPage from './components/mainPage/mainPage';
import Education from './components/education/education';
import './App.css';
import Layout from './components/layout/layout';
import Blog from './components/blog/blog';
import Profile from './components/profile/profile';
import SearchPage from './components/searchPage/searchPage';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Layout />
      <Routes>
        <Route path="/mainPage" element={<MainPage/>}/>
        <Route path="/education" element={<Education/>}/>
        <Route path="/searchPage" element={<SearchPage/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
