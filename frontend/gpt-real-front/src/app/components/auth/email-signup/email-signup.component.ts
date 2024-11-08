import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-email-signup',
  templateUrl: './email-signup.component.html',
  styleUrls: ['./email-signup.component.scss']
})
export class EmailSignupComponent  {
  signupForm: FormGroup;

  constructor(private fb: FormBuilder, 
              private router: Router,
              private authService:AuthService) {
    this.signupForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    if (this.signupForm.valid) {
      const { email, password } = this.signupForm.value;
      this.authService.signUp(email, password).subscribe({
        next: (response) => console.log('User signed up:', response.user),
        error: (error) => console.error('Error signing up:', error)
      });
    } else {
      console.log('Form is invalid');
    }
  }

  routerLogin() {
    this.router.navigate(["/auth/email"]);
  }
}

