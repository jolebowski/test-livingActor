import { AnyAction } from "redux";

import { Pokemon } from "./pokemon.types";

import { POKEMON_ACTION_TYPES } from "./pokemon.types";

export type PokemonState = {
  readonly pokemon: Pokemon[];
  readonly newFavouriteList: Pokemon[];
};

export const POKEMON_INITIAL_STATE: PokemonState = {
  pokemon: [],
  newFavouriteList: [],
};

export const pokemonReducer = (
  state = POKEMON_INITIAL_STATE,
  action = {} as AnyAction
): PokemonState => {
  const { type, payload } = action;

  switch (type) {
    case POKEMON_ACTION_TYPES.SET_POKEMON:
      return { ...state, pokemon: [...state.pokemon, payload] };
    case POKEMON_ACTION_TYPES.SET_FAVOURITE:
      return {
        ...state,
        newFavouriteList: [...state.newFavouriteList, payload],
      };

    default:
      return state;
  }
};
