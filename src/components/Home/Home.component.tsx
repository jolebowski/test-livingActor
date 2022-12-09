import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

import { setPokemon, setFavourite } from "../../store/pokemon/pokemon.action";
import {
  selectPokemon,
  selectFavourite,
} from "../../store/pokemon/pokemon.selector";
import { Pokemons, Pokemon } from "../../store/pokemon/pokemon.types";
import CardList from "../CardList/CardList.component";
import FavouritesCardList from "../FavouritesCardList/FavouritesCardList";

const Home: React.FC = () => {
  const pokemon = useSelector(selectPokemon);
  const favourites = useSelector(selectFavourite);
  const dispatch = useDispatch();

  useEffect(() => {
    const getPokemon = async () => {
      const res = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=10&offset=10"
      );
      res.data.results.forEach(async (pokemon: Pokemons) => {
        const poke = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        dispatch(setPokemon(poke.data));
      });
    };
    getPokemon();
  }, []);

  useEffect(() => {
    const pokemonFavourites: Pokemon = JSON.parse(
      localStorage.getItem("pokemon-favourites") || "[]"
    );
    console.log(pokemonFavourites, "pokemonFavourites");
  }, []);

  const saveToLocalStorage = (favourites: Pokemon[]) => {
    console.log(favourites, "favourites");
    localStorage.setItem("pokemon-favourites", JSON.stringify(favourites));
  };

  const addFavouritePokemon = (pokemon: Pokemon) => {
    dispatch(setFavourite(pokemon));
    saveToLocalStorage(favourites);
  };

  return (
    <>
      <CardList pokemon={pokemon} addFavouritePokemon={addFavouritePokemon} />
      <FavouritesCardList />
    </>
  );
};
export default Home;
