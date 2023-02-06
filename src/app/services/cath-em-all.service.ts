import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, of } from 'rxjs';
import { PokemonFull } from '../models/pokemon.model';
import { environment } from '../../environments/environment';
import { User } from '../models/user.model';
import { StorageKeys } from '../utils/storage-keys.enum';
import { StorageUtil } from '../utils/storage.util';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

const { apiKey, trainerUrl } = environment;

@Injectable({
  providedIn: 'root',
})
export class CathEmAllService {
  constructor(private readonly http: HttpClient) {}

  //Holds captured pokemons
  public caughtPokemon = new BehaviorSubject<PokemonFull[]>([]);

  /**
   * fetchCaughtPokemons fetches
   * logged users caught pokemons
   * and sets caughtPokemon accordingly
   */
  public fetchCaughtPokemons(): void {
    this.http
      .get<User[]>(
        `${trainerUrl}?id=${
          JSON.parse(window.sessionStorage.getItem('trainer') || '').id
        }`
      )
      .pipe(map((user: User[]) => user[0].pokemon))
      .subscribe({
        next: (pokemonList: PokemonFull[]) => {
          this.caughtPokemon.next(pokemonList);
        },
        error: (error: HttpErrorResponse) => {
          console.log(error.message);
        },
      });
  }

  /**
   * returns sessionstorage as observable
   * @returns {observable}
   */
  public fetchSessionStorage(): Observable<User> {
    return of(JSON.parse(window.sessionStorage.getItem('trainer') || ''));
  }

  /**
   * catchPokemon takes care of
   * the prosess of catching pokemons
   * it patches the api and sessionStorage
   * @param {PokemonFull}pokemon
   * @returns {Observable}
   */
  public catchPokemon(pokemon: PokemonFull): Observable<User> {
    this.caughtPokemon.next([...this.caughtPokemon.value, pokemon]);

    const toAdd: User = JSON.parse(
      window.sessionStorage.getItem('trainer') || ''
    );
    toAdd.pokemon = this.caughtPokemon.value;

    StorageUtil.storageSave('trainer', toAdd);

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
    });

    return this.http.patch<User>(
      `${trainerUrl}/${
        JSON.parse(window.sessionStorage.getItem('trainer') || '').id
      }`,
      toAdd,
      {
        headers,
      }
    );
  }
  /**
   * updatePokemon frees a pokemon from
   * the trainers collection removes
   * the pokemon from the api and caught
   * pokemon list
   * @param {PokemonFull}pokemon
   * @returns {User}
   */
  public updatePokemon(pokemon: PokemonFull): Observable<User> {
    this.caughtPokemon.next([
      ...this.caughtPokemon.value.filter(
        (poke: PokemonFull) => poke.name !== pokemon.name
      ),
    ]);

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
    });

    return this.http.patch<User>(
      `${trainerUrl}/${
        JSON.parse(window.sessionStorage.getItem('trainer') || '').id
      }`,
      { pokemon: this.caughtPokemon.value },
      {
        headers,
      }
    );
  }
}
