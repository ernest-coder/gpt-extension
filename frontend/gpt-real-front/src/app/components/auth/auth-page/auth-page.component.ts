import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss']
})
export class AuthPageComponent {

  constructor(private router: Router, private route: ActivatedRoute) {}

  loginWithGoogle() {
    console.log('Google login clicked');
  }

  loginWithApple() {
    console.log('Apple login clicked');
  }

  signupWithEmail() {
    this.router.navigate(['email'], { relativeTo: this.route });
  }

}
