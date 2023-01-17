import { FaSearch } from "react-icons/fa";
import PokemonCard from "./PokemonCard";
import { RiAddCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom"



const pokemontypes = ["Grass","Poison","Fire","Water","Bug","Flying"]

const pokemonweakness = ["Ice", "Pyschic", "Grass", "Electric", "Rock"]



const Pokemon = ({ pokemons }) => {
  return (
    <div className="pokemon-list">
      <div className="my-pokemons">
        <div className="main-section">
          <div className="new-pokemon">
            <div className="add-pokemon">
              <p>Pokédex</p>
              <button
                className="btn btn-success px-10"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                <span>
                  <RiAddCircleLine />
                </span>{" "}
                Pokemon
              </button>
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
            {pokemons.map((pokemon) => (
              <Link key={pokemon.id} to={`/pokemon/${pokemon.id}`}>
                <PokemonCard pokemon={pokemon} />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Add Pokemon
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="add-form">
                <form>
                  <label htmlFor="">
                    <strong>Pokemon name</strong>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name=""
                    id=""
                    placeholder="Enter Name"
                  />
                  <label htmlFor="">
                    <strong>Image url</strong>
                  </label>
                  <input
                    type="url"
                    className="form-control"
                    name=""
                    id=""
                    placeholder="e.g http://example.com"
                  />
                  <div className="mb-3">
                    <label
                      htmlFor="exampleFormControlTextarea1"
                      className="form-label"
                    >
                      <strong> Description</strong>
                    </label>
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                        placeholder="Enter description"                  
                    ></textarea>
                  </div>
                  <div className="types-select">
                    <label htmlFor="">
                      <strong>Type</strong>
                    </label>
                    {pokemontypes.map((ptype, index) => (
                      <div key={index} className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value={ptype}
                          id="flexCheckDefault"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault"
                        >
                          {ptype}
                        </label>
                      </div>
                    ))}
                  </div>
                  <div className="types-select">
                    <label htmlFor="">
                      <strong>Weaknesses</strong>
                    </label>
                    {pokemonweakness.map((pweak, index) => (
                      <div key={index} className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value={pweak}
                          id="flexCheckDefault"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault"
                        >
                          {pweak}
                        </label>
                      </div>
                    ))}
                  </div>
                </form>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-success">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
