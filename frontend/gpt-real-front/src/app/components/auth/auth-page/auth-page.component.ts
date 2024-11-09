import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss']
})
export class AuthPageComponent {

  constructor(
    private router: Router, 
    private route: ActivatedRoute,
    private authService:AuthService
  ) {}

  loginWithGoogle() {
      this.authService.signInWithGoogle().then((response) => {
        if (response.error) {
          console.error('Error logging in with Google:', response.error);
        } else {
          console.log('Google login successful:');
          this.router.navigate(['/chat']); // Redirect to another page after login
        }
      }).catch((error) => {
        console.error('Unexpected error during Google login:', error);
      });
  }
    

  loginWithApple() {
    console.log('Apple login clicked');
  }

  signupWithEmail() {
    this.router.navigate(['email'], { relativeTo: this.route });
  }

}
