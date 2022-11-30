import Horoscope from './components/horoscope/horoscope'
import Menu from './components/menu/menu';
import './App.css';
import MainPage from './components/mainPage/mainPage';
import Header from './components/header/header';

function App() {
  return (
    <div className="App">
      <Header />
      <MainPage />
      <Menu />
      {/* <Horoscope /> */}
    </div>
  );
}

export default App;
