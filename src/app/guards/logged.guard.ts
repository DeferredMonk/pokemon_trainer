import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';
import { StorageKeys } from '../utils/storage-keys.enum';
import { StorageUtil } from '../utils/storage.util';

@Injectable({
  providedIn: 'root'
})
export class LoggedGuard implements CanActivate {

  constructor(
    private readonly router: Router,
    private readonly userService: UserService){
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(!this.userService.user || !StorageUtil.storageRead(StorageKeys.User) ){
        console.log("true");
        return true;
      }
      else {
        this.router.navigateByUrl("/catalogue");
        return false;
      }
  }
}
