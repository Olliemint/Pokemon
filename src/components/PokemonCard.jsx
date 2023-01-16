



const PokemonCard = ({ pokemon }) => {
  const { number, name, description, image, types, weaknessess } = pokemon;

  const colours = ["#FD7D24", "#B97FC9", "#9BCC51", "#4592C4"];

  return (
    <div className="card-list">
      <div className="pokemon-card">
        <img src={image} alt="" />
      </div>
      <div className="props">
        <small>#{number}</small>
        <h3>{name}</h3>
        <div className="btns">
          {types.map((type) => (
            <button>{ type }</button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PokemonCard
