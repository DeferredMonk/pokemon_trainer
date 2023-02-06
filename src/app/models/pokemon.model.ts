/**
 * Interface for single pokemon
 */
export interface Pokemon {
  name: string;
  url: string;
}
/**
 * Interface for a list of pokemons
 */
export interface PokemonList {
  results: Pokemon[];
}
/**
 * Interface for pokemon with full information
 */
export interface PokemonFull {
  id: number;
  name: string;
  sprites: Sprite;
  caught?: boolean;
}
/**
 * Interface for sprite of pokemon
 */
interface Sprite {
  other: Other;
}
/**
 * Interface for sprite
 */
interface Other {
  'official-artwork': OfficialArt;
}
/**
 * Interface for image of pokemon
 */
interface OfficialArt {
  front_default: string;
}
