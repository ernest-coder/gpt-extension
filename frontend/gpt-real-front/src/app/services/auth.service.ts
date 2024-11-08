import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { SupabaseService } from '../shared/services/supabase.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private supabaseService: SupabaseService) {}

  signUp(email: string, password: string): Observable<any> {
    const signUpPromise = this.supabaseService.client.auth.signUp({ email, password });
    return from(signUpPromise);
  }

  emailLogin(email: string, password: string): Observable<any> {
    const loginPromise = this.supabaseService.client.auth.signInWithPassword({ email, password });
    return from(loginPromise);
  }
  
}
