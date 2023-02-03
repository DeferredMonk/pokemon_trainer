import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  get user(): User | undefined {
    return this.userService.user;
  }

  constructor(
    private readonly userService: UserService
    ) {}
  
  ngOnInit () {
    
  }
}
