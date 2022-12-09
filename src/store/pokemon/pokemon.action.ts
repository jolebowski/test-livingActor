import { createAction } from "../../utils/reducer.utils";

import { POKEMON_ACTION_TYPES, Pokemon } from "./pokemon.types";

export const setPokemon = (pokemon: Pokemon) =>
  createAction(POKEMON_ACTION_TYPES.SET_POKEMON, pokemon);

export const setFavourite = (pokemon: Pokemon) =>
  createAction(POKEMON_ACTION_TYPES.SET_FAVOURITE, pokemon);
