import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PokemonFull, PokemonList } from '../models/pokemon.model';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FetchDataService {
  constructor(private readonly http: HttpClient) {}

  private readonly _pokemons$: BehaviorSubject<PokemonFull[]> =
    new BehaviorSubject<PokemonFull[]>([]);

  public fetchPokemons(): Observable<PokemonList> {
    return this.http.get<PokemonList>(
      'https://pokeapi.co/api/v2/pokemon/?off&limit=151'
    );
  }
  public fetchPokemon(url: string): Observable<PokemonFull> {
    return this.http.get<PokemonFull>(url);
  }
}
