import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemon, PokemonFull, PokemonList } from '../models/pokemon.model';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FetchDataService {
  constructor(private readonly http: HttpClient) {}

  private readonly _pokemons$: BehaviorSubject<PokemonFull[]> =
    new BehaviorSubject<PokemonFull[]>([]);

  public fetchPokemons(): Observable<Pokemon[]> {
    if (!window.sessionStorage.getItem('allPokemons')) {
      return this.http
        .get<PokemonList>('https://pokeapi.co/api/v2/pokemon/?off&limit=10000')
        .pipe(
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
  public fetchPokemon(url: string): Observable<PokemonFull> {
    return this.http.get<PokemonFull>(url);
  }
}
