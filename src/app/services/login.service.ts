import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, switchMap, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';
import { StorageKeys } from '../utils/storage-keys.enum';
import { StorageUtil } from '../utils/storage.util';


const {apiKey, trainerUrl} = environment;

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  //dependency injection
  constructor(private readonly http:HttpClient) { }

  //login 
  public login( username: string): Observable<User> {
    return this.checkUsername(username)
     .pipe(
        switchMap((user: User | undefined) => {
          if(user === undefined){
            return this.createUser(username);
          }
          return of(user);
        }),
        tap((user: User) => {
          StorageUtil.storageSave<User>(StorageKeys.User, user)
        })
     )
  }

  //Check if user exist 
  private checkUsername(username: string) : Observable<User | undefined> {
    return this.http.get<User[]>(`${trainerUrl}?username=${username}`)
     .pipe(
      map((response: User[]) =>
         response.pop())
      )
  }

  //if not user -- create 
  private createUser(username: string): Observable<User> {
    const user = {
      username,
      pokemon: []
    };

    const headers = new HttpHeaders ({
      "Content-Type": "application/json",
      "x-api-key": apiKey
    });

    return this.http.post<User>(trainerUrl, user, {
      headers
    });

  }

  //if user - Store user
}
