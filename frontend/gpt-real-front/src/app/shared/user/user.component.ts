import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { User } from '@supabase/supabase-js';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  loggedIn = false;
  user: User | undefined

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.authService.getSession().subscribe((data) => {
      if (data.session && data.session.user) {
        this.loggedIn = true;
        this.user = data.session.user
      } else {
        this.router.navigate(['/auth']); 
      }
    });

    this.authService.onAuthStateChange((event, session) => {
      if (session && session.user) {
        this.loggedIn = true;
      } else {
        this.loggedIn = false;
        this.router.navigate(['/auth']); 
      }
    });
  }

  logout(): void {
    this.authService.logout().subscribe({
      next: () => {
        this.router.navigate(['/auth']);
      },
      error: (error) => {
        console.error('Logout error', error);
      }
    });
  }
}
