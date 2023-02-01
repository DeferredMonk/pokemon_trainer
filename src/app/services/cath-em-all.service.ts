import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PokemonFull } from '../models/pokemon.model';
import { environment } from '../../environments/environment';
import { User } from '../models/user.model';

const { apiKey, trainerUrl } = environment;

@Injectable({
  providedIn: 'root',
})
export class CathEmAllService {
  constructor(private readonly http: HttpClient) {}

  public fetchCaughtPokemons(): Observable<User[]> {
    return this.http.get<User[]>(
      `${trainerUrl}?id=${
        JSON.parse(window.sessionStorage.getItem('trainer') || '').id
      }`
    );
  }
  public catchPokemon(
    currPokemons: PokemonFull[],
    pokemon: PokemonFull
  ): Observable<User> {
    const toAdd = { pokemon: [...currPokemons, pokemon] };
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
}