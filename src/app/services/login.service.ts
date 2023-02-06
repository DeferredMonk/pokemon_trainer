import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, switchMap } from 'rxjs';
import { environment } from '../../environments/environment';
import { User } from '../models/user.model';
const { apiKey, trainerUrl } = environment;

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private readonly http: HttpClient) {}

  /**
   * Checks if the user exists and calls the createUser if not.
   * @param {string} username
   * @returns {User}
   */
  public login(username: string): Observable<User> {
    return this.checkUsername(username).pipe(
      switchMap((user: User | undefined) => {
        if (user === undefined) {
          return this.createUser(username);
        }
        return of(user);
      })
    );
  }

  /**
   * Checks if the user exists in API.
   * @param {string} username
   * @returns {User}
   */
  private checkUsername(username: string): Observable<User | undefined> {
    return this.http
      .get<User[]>(`${trainerUrl}?username=${username}`)
      .pipe(map((response: User[]) => response.pop()));
  }

  /**
   * Creates a new user in the API.
   * @param {string} username
   * @returns {User}
   */
  private createUser(username: string): Observable<User> {
    const user = {
      username,
      pokemon: [],
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
    });

    return this.http.post<User>(trainerUrl, user, {
      headers,
    });
  }
}
