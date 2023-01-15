import { FaSearch } from "react-icons/fa";
import PokemonCard from "./.PokemonCard";
const Pokemon = () => {
  return (
    <div className="pokemon-list">
      <div className="my-pokemons">
        <div className="main-section">
          <div className="new-pokemon">
            <div className="add-pokemon">
              <p>Pokédex</p>
            </div>
          </div>
          <div className="search-section">
            <div className="search-form">
              <form>
                <label htmlFor="">Name or Number</label>
                <br />
                <input type="text" name="" id="" />
                <button type="submit">
                  <FaSearch />
                </button>
              </form>
            </div>
            <div className="search-details">
              <p>
                Search for a Pokémon by name or using its National Pokédex
                number.
              </p>
            </div>
          </div>
        </div>
        <div className="pokemon-groups">
          <div className="card-holder">
            <PokemonCard />
            <PokemonCard />
            <PokemonCard />
            <PokemonCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
