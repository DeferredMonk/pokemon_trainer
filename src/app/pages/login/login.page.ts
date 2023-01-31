import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.css']
})
export class LoginPage {
  constructor(private readonly router: Router){}

  handleLogin(): void{
    this.router.navigateByUrl("/catalogue");
  }
}
