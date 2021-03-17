import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-layout',
  templateUrl: './layout-login.component.html',
  styleUrls: ['./layout-login.component.scss']
})
export class LayoutLoginComponent implements OnInit {

  // message = '';
  usernameFormControl = new FormControl(
    '',
    [
      Validators.required,
    ],
  );
  passwordFormControl = new FormControl(
    '',
    [
      Validators.required,
    ]
  );

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.usernameFormControl.valueChanges.subscribe(
      () => this.resetMessage()
    );
    this.passwordFormControl.valueChanges.subscribe(
      () => this.resetMessage()
    );
  }

  resetMessage(): void {
    // this.message = '';
  }

  get message(): string {
    if (
      (
        this.usernameFormControl.touched ||
        this.usernameFormControl.dirty
      ) &&
      this.usernameFormControl.value === ''
    ) {
      return 'Username cannot be blank!';
    }
    if (
      (
        this.passwordFormControl.touched ||
        this.passwordFormControl.dirty
      ) &&
      this.passwordFormControl.value === ''
    ) {
      return 'Password cannot be blank!';
    }
    // if (
    //   this.usernameFormControl.dirty &&
    //   this.passwordFormControl.dirty &&
    //   this.usernameFormControl.value !== 'admin' &&
    //   this.passwordFormControl.value !== 'admin'
    // ) {
    //   return 'Wrong username or password!';
    // }
    return '';
  }

  login(): void {
    if (
      this.usernameFormControl.value === 'admin' &&
      this.passwordFormControl.value === 'admin'
    ) {
      // console.log('Navigating...');
      this.router.navigateByUrl('/dashboard');
    }
  }
}
