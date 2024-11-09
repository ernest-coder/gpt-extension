import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertToastService } from 'src/app/services/alert-toast.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-email-login',
  templateUrl: './email-login.component.html',
  styleUrls: ['./email-login.component.scss']
})
export class EmailLoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, 
              private router: Router,
              private authService:AuthService,
              private alertToastService:AlertToastService,
            ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.authService.emailLogin(email, password).subscribe({
        next: (response) => {
          if (response.error) {
            this.alertToastService.error('Login Error: ' + response.error.message);
          } else if (response.data.session && response.data.session.user) { // Adjusted to check session.user
            this.router.navigate(['/chat']);
          } else {
            this.alertToastService.error('Unexpected response structure.');
          }
        },
        error: (error) => {
          this.alertToastService.error('Unexpected login error.', error);
        }
      });
    } else {
      this.alertToastService.error('Form is invalid');
    }
  }
  

  routerSignup() {
    this.router.navigate(["/auth/signup"]);
  }

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
  
}
