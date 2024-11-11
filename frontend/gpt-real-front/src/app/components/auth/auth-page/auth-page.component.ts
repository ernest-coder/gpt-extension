import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertToastService } from 'src/app/services/alert-toast.service';
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
    private authService:AuthService,
    private alertToastService:AlertToastService
  ) {}

  loginWithGoogle() {
      this.authService.signInWithGoogle().then((response) => {
        if (response.error) {
          this.alertToastService.error(`Error logging in with Google: ${response.error}`,);
        } else {
          this.router.navigate(['/chat']);
        }
      }).catch((error) => {
        this.alertToastService.error(`Unexpected error during Google login: ${error}`);
      });
  }
    

  loginWithFacebook() {
    this.authService.signInWithFacebook().then((response) => {
      if (response.error) {
        this.alertToastService.error(`Error logging in with Facebook: ${response.error}`,);
      } else {
        this.router.navigate(['/chat']);
      }
    }).catch((error) => {
      this.alertToastService.error(`Unexpected error during Facebook login: ${error}`);
    });  }

  signupWithEmail() {
    this.router.navigate(['email'], { relativeTo: this.route });
  }

}
