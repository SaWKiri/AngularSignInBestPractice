import { Component } from '@angular/core';
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
    email: new FormControl('',[Validators.required]),
    password: new FormControl('')
  });

  constructor() {}

  togglePassword() {
    if (this.passwordShowToggle === 'text') {
      this.passwordShowToggle = 'password';
    } else {
      this.passwordShowToggle = 'text';
    }
  }
}
