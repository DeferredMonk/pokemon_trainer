import { Component, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent {
  @Output() login: EventEmitter<void> = new EventEmitter();

  constructor(
    private readonly userService: UserService,
    private readonly loginService: LoginService
  ) {}

  /**
   * Runs after username has been submitted.
   * Logs in the user.
   * @param loginForm
   */
  public loginSubmit(loginForm: NgForm): void {
    const { username } = loginForm.value;

    this.loginService.login(username).subscribe({
      next: (user: User) => {
        this.userService.user = user;
        this.login.emit();
      },
      error: () => {},
    });
  }
}
