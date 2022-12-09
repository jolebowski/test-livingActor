import React from "react";
import { Pokemon } from "../../store/pokemon/pokemon.types";
import Card from "../Card/Card.component";
import "./card-list.styles.css";

type CardListProps = {
  pokemon: { pokemon: Pokemon[] };
  addFavouritePokemon: (pokemon: Pokemon) => void;
};

const CardList = ({ pokemon, addFavouritePokemon }: CardListProps) => {
  return (
    <div className="card-container">
      {pokemon.pokemon.map((card) => (
        <Card
          key={card.id}
          card={card}
          addFavouritePokemon={addFavouritePokemon}
        />
      ))}
    </div>
  );
};

export default CardList;
