import { rootReducer } from "../root-reducer";

type RootState = ReturnType<typeof rootReducer>;

export const selectPokemon = (state: RootState) => state.pokemon;

export const selectFavourite = (state: RootState) =>
  state.pokemon.newFavouriteList;
