import { Injectable } from '@angular/core';
import { StorageKeys } from '../utils/storage-keys.enum';
import { StorageUtil } from '../utils/storage.util';
import { User } from '../models/user.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _user?: User;

  public logged = new BehaviorSubject<any>(null);

  /**
   * Fetches the current log status.
   */
  public fetchLogStatus(): void {
    this.logged.next(
      JSON.parse(window.sessionStorage.getItem(StorageKeys.User) || '')
    );
  }

  /**
   * Sets the logged to null when user logs out.
   */
  public logOut(): void {
    this.logged.next(null);
  }

  /**
   * Gets the user.
   */
  get user(): User | undefined {
    return this._user;
  }

  /**
   * Sets the user and updates it to the sessionStorage.
   */
  set user(user: User | undefined) {
    StorageUtil.storageSave<User>(StorageKeys.User, user!);
    this._user = user;
    this.fetchLogStatus();
  }

  constructor() {
    const storedUser: User | undefined = StorageUtil.storageRead<User>(
      StorageKeys.User
    );
    this._user = storedUser;
  }
}
