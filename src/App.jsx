import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


import "./App.css";
import Navbar from "./components/Navbar";

import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Pokemon from "./components/Pokemon";
import VideoGames from "./components/VideoGames";
import TradingCards from "./components/TradingCards";
import PokemonTV from "./components/PokemonTV";
import PokemonEvents from "./components/PokemonEvents";
import News from "./components/News";
import Footer from "./components/Footer";
import PokemonDetails from "./components/PokemonDetails";

function App() {
  const [pokemons, Setpokemons] = useState([]);

  

  

  useEffect(() => {
    const FetchedPokemon = async () => {
      const Pokemonarray = await getPokemon();
      Setpokemons(Pokemonarray);
    };
    FetchedPokemon();
  }, []);


  const getPokemon = async () => {
    const response = await fetch("http://localhost:3000/pokemons");
    const data = response.json();
    return data;
  };
  
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact="true" path="/" element={<Home />} />
        <Route path="/pokemon" element={<Pokemon pokemons={pokemons} />} />
        <Route path="/video-games" element={<VideoGames />} />
        <Route path="/trading-cards" element={<TradingCards />} />
        <Route path="/pokemon-tv" element={<PokemonTV />} />
        <Route path="/pokemon-events" element={<PokemonEvents />} />
        <Route path="/news" element={<News />} />
        <Route
          path="/pokemon/:id"
          element={<PokemonDetails  />}
        />
      </Routes>
    </div>
  );
}

export default App;
