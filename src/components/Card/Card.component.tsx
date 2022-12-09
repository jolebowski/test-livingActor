import { Pokemon } from "../../store/pokemon/pokemon.types";
import "./card.styles.css";
type CardProps = {
  card: Pokemon;
  addFavouritePokemon: (pokemon: Pokemon) => void;
};

const Card = ({ card, addFavouritePokemon }: CardProps) => {
  return (
    <div className="card">
      <img src={card.sprites.front_default} alt={card.name} />
      <h2>{card.name}</h2>
      {card.types.map((type) => (
        <div key={type.type.name}>{type.type.name}</div>
      ))}
      <button
        className="btn btn-primary "
        onClick={() => addFavouritePokemon(card)}
      >
        Like
      </button>
    </div>
  );
};

export default Card;
