import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'SignInBestParctice';
  passwordShowToggle: 'text' | 'password' = 'password';

  signInForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.minLength(8),
      Validators.required
    ]),
  });

  constructor() {}

  togglePassword() {
    if (this.passwordShowToggle === 'text') {
      this.passwordShowToggle = 'password';
    } else {
      this.passwordShowToggle = 'text';
    }
  }

  @Output() EM = new EventEmitter<signInForm>();
  submit() {
    if (this.signInForm.valid) {
      this.EM.emit(this.signInForm.value);
    } else {
      console.log('form invalid, not submited');
    }
  }

  get email() {
    return this.signInForm.get('email');
  }
  get password() {
    return this.signInForm.get('password');
  }
}

export interface signInForm {
  email: string;
  password: string;
}
