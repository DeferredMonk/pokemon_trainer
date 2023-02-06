import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  public logged: boolean = false;

  constructor(
    private readonly userService: UserService,
    ) {}
  
  ngOnInit () {
    this.userService.logged.subscribe((data) => this.logged = Boolean(data));
  }
}