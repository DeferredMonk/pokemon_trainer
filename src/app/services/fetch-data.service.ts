import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemon, PokemonFull, PokemonList } from '../models/pokemon.model';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

const { pokemonApi } = environment;

@Injectable({
  providedIn: 'root',
})
/**
 * FectchDataService is a class 
 * that handles data fetching
 */
export class FetchDataService {
  constructor(private readonly http: HttpClient) {}

  private readonly _pokemons$: BehaviorSubject<PokemonFull[]> =
    new BehaviorSubject<PokemonFull[]>([]);

  /**
   * fetchPokemons is an observable.
   * It returns a list of pokemons
   * @returns {Pokemon[]} 
   */
  public fetchPokemons(): Observable<Pokemon[]> {
    if (!window.sessionStorage.getItem('allPokemons')) {
      return this.http.get<PokemonList>(pokemonApi + '/?off&limit=10000').pipe(
        map((data: PokemonList) => {
          window.sessionStorage.setItem(
            'allPokemons',
            JSON.stringify(data.results)
          );
          return data.results;
        })
      );
    } else {
      return of(JSON.parse(window.sessionStorage.getItem('allPokemons') || ''));
    }
  }
  /**
   * fetchPokemon fetches details
   * of a given pokemon
   * @param {string | null}
   * @returns {PokemonFull} observable of type pokemon
   */
  public fetchPokemon(ending: string | null): Observable<PokemonFull> {
    const url = pokemonApi + '/' + ending;
    return this.http.get<PokemonFull>(url);
  }
}
