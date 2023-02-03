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

const { apiKey, trainerUrl } = environment;

@Injectable({
  providedIn: 'root',
})
export class CathEmAllService {
  constructor(private readonly http: HttpClient) {}

  public caughtPokemon = new BehaviorSubject<PokemonFull[]>([]);

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

  public fetchSessionStorage(): Observable<User> {
    return of(JSON.parse(window.sessionStorage.getItem('trainer') || ''));
  }

  public catchPokemon(pokemon: PokemonFull): Observable<User> {
    this.caughtPokemon.next([...this.caughtPokemon.value, pokemon]);
  
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

  public updatePokemon (pokemon: PokemonFull): Observable<User>{
    this.caughtPokemon.next([...this.caughtPokemon.value.filter((poke: PokemonFull) => poke.name !== pokemon.name)]);
    console.log(this.caughtPokemon.value)

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
