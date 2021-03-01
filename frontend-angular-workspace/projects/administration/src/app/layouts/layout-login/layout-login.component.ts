import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-login-layout',
  templateUrl: './layout-login.component.html',
  styleUrls: ['./layout-login.component.scss']
})
export class LayoutLoginComponent implements OnInit {

  errorMessage = '';
  usernameFormControl = new FormControl('');
  passwordFormControl = new FormControl('');

  constructor() { }

  ngOnInit(): void {
    this.usernameFormControl.valueChanges.subscribe(
      () => this.resetErrorMessage()
    );
    this.passwordFormControl.valueChanges.subscribe(
      () => this.resetErrorMessage()
    );
  }

  resetErrorMessage(): void {
    this.errorMessage = '';
  }

  login(): void {
    if (
      this.usernameFormControl.value !== 'admin' &&
      this.passwordFormControl.value !== 'admin'
    ) {
      this.errorMessage = 'Wrong username or password!';
    }
  }
}
