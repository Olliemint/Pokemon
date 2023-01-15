
import './App.css'
import Navbar from './components/Navbar'

import Home from './components/Home'
import { Routes,Route } from 'react-router-dom';
import Pokemon from './components/Pokemon';
import VideoGames from './components/VideoGames';
import TradingCards from './components/TradingCards';
import PokemonTV from './components/PokemonTV';
import PokemonEvents from './components/PokemonEvents';
import News from './components/News';

function App() {
  

  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact="true" path="/" element={<Home />} />
        <Route path="/pokemon" element={<Pokemon />} />
        <Route path="/video-games" element={<VideoGames />} />
        <Route path="/trading-cards" element={<TradingCards />} />
        <Route path="/pokemon-tv" element={<PokemonTV />} />
        <Route path="/pokemon-events" element={<PokemonEvents />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </div>
  );
}

export default App
