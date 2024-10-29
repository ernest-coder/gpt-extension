import { Component } from '@angular/core';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss']
})
export class AuthPageComponent {

  loginWithGoogle() {
    console.log('Google login clicked');
  }

  loginWithApple() {
    console.log('Apple login clicked');
  }

}
