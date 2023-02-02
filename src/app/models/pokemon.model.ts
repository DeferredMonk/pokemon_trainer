export interface Pokemon {
  name: string;
  url: string;
}
export interface PokemonList {
  results: Pokemon[];
}
export interface PokemonFull {
  id: number;
  name: string;
  sprites: Sprite;
  caught?: boolean;
}
interface Sprite {
  other: Other;
}
interface Other {
  'official-artwork': OfficialArt;
}
interface OfficialArt {
  front_default: string;
}
