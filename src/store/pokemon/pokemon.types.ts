export const POKEMON_ACTION_TYPES = {
  SET_POKEMON: "pokemon/SET_POKEMON",
  SET_FAVOURITE: "pokemon/SET_FAVOURITE",
};
export type Pokemon = {
  id: number;
  sprites: { front_default: string };
  types: [{ type: { name: string } }];
  name: string;
};

export type Pokemons = {
  name: string;
  url: string;
};
