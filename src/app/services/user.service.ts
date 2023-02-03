import { Injectable } from '@angular/core';
import { StorageKeys } from '../utils/storage-keys.enum';
import { StorageUtil } from '../utils/storage.util';
import { User } from '../models/user.model';
import { BehaviorSubject } from 'rxjs';
import { PokemonFull } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _user?: User;

  get user(): User | undefined {
    return this._user;
                  
  } 

  set user(user:User | undefined) {
    StorageUtil.storageSave<User>(StorageKeys.User, user!);
    this._user = user;
  }

  constructor() { 
    const storedUser: User | undefined = StorageUtil.storageRead<User>(StorageKeys.User);
    this._user = storedUser;
  }
}
