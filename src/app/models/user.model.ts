import { PokemonFull } from './pokemon.model';

export interface User {
  id: number;
  username: string;
  pokemon: PokemonFull[];
  //pokemon: Pokemon
}
