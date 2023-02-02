import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';
import { StorageUtil } from 'src/app/utils/storage.util';
import { StorageKeys } from 'src/app/utils/storage-keys.enum';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.page.html',
  styleUrls: ['./trainer.page.css']
})
export class TrainerPage {

  get user(): User | undefined {
    return this.userService.user;
  }

  get favorites(): string[] {
    if(this.userService.user){
      return this.userService.user.pokemon
    }
    return []
  }
  
  public logOut () {
    if(this.userService.user){
      if(confirm("Are you sure you want to log out?")){
        console.log(this.user);
        StorageUtil.storageDelete(StorageKeys.User);
        this.router.navigateByUrl("");
      }
    }
  }
  constructor (
    private readonly router: Router,
    private userService: UserService
  ){}

}
