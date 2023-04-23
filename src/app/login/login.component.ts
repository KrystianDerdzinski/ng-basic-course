import { Component, OnInit } from '@angular/core';
import { UserType } from '../types/user-type';

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

  fontSize = 14;

  loggedAs: UserType = null;

  increaseSize() {
    this.fontSize += 1;
  }

  decreaseSize() {
    this.fontSize -= 1;
  }

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
