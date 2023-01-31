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
