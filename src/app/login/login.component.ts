import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  headerText = 'Login';
  loginButtonText = 'Log as user';
  premiumLoginButtonText = 'Log as premium user';
  userColor = 'black';

  loggedAs: 'user' | 'premiumUser' | null = null;

  logUser() {
    this.loggedAs = 'user';
    this.userColor = 'black';
    console.log('User logged in');
  }

  logAsPremiumUser() {
    this.loggedAs = 'premiumUser';
    this.userColor = 'gold';
    console.log('Premium user logged in');
  }
}
