import { useState } from "react";




const PokemonCard = ({ pokemon }) => {
  const { colours, number, name, description, image, types, weaknessess } =
    pokemon;

 
  
  return (
    <div className="card-list">
      <div className="pokemon-card">
        <img src={image} alt="" />
      </div>
      <div className="props">
        <small>#{number}</small>
        <h3>{name}</h3>
        <div className="btns">
          {types.map((type, index) => (
            <button
              
              key={index}
            >
              {type}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PokemonCard
