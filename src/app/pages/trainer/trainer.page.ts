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
  
  public logOut () {
    if(this.userService.user && confirm("Are you sure you want to log out?")){
        StorageUtil.storageDelete(StorageKeys.User);
        this.router.navigateByUrl("");
        this.userService.logOut();
    }
  }
  constructor (
    private readonly router: Router,
    private userService: UserService
  ){}

}
