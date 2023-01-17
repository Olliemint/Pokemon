import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { MdArrowBackIos } from "react-icons/md";
import { Link } from "react-router-dom";


const PokemonDetails = () => {
    const [pokemon, Setpokemon] = useState([]);

    const { id } = useParams();




     useEffect(() => {
       fetch(`http://localhost:3000/pokemons/${id}`)
         .then((r) => r.json())
         .then((data) => Setpokemon(data));
     }, [id]);
    const type1 = pokemon.types
    console.log("my weakness",type1);
  return (
    <div className="details-section">
      <div className="pokemon-details">
        <div className="detail-section">
          <Link to={"/pokemon"}>
            <button className="back">
              <MdArrowBackIos className="back-icon" />
              Back
            </button>

          </Link>
          <div className="top">
            <p>{pokemon.name}</p>
            <span>#{pokemon.number}</span>
          </div>
          <div className="middle">
            <div className="middle-image">
              <img src={pokemon.image} />
            </div>
            <div className="des">
              <p>{pokemon.description}</p>

              <div className="type">
                <p>Type</p>
                <div className="type-btns">
                  <button>{pokemon.types}</button>
                </div>
              </div>
              <div className="weaknesses">
                <p>Weaknesses</p>
                <div className="weakness"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokemonDetails