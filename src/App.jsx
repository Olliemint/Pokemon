
import './App.css'
import Navbar from './components/Navbar'

import Home from './components/Home'
import { Routes,Route } from 'react-router-dom';
import Pokemon from './components/Pokemon';

function App() {
  

  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact="true" path="/" element={<Home />} />
        <Route path="/pokemon" element={<Pokemon />} />
      </Routes>
    </div>
  );
}

export default App
