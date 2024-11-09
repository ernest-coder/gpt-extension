import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { SupabaseService } from '../shared/services/supabase.service';
import { AuthChangeEvent, AuthError, AuthResponse, AuthTokenResponsePassword, Session } from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private supabaseService: SupabaseService) {}

  signUp(email: string, password: string): Observable<AuthResponse> {
    const signUpPromise = this.supabaseService.client.auth.signUp({ email, password });
    return from(signUpPromise);
  }

  emailLogin(email: string, password: string): Observable<AuthTokenResponsePassword> {
    const loginPromise = this.supabaseService.client.auth.signInWithPassword({ email, password });
    return from(loginPromise);
  }

  signInWithGoogle() {
    return this.supabaseService.client.auth.signInWithOAuth({
      provider: 'google',
    });
  }

  logout(): Observable<any> {
    const logoutPromise = this.supabaseService.client.auth.signOut();
    return from(logoutPromise);
  }

  getSession(): Observable<any> {
    const sessionPromise = this.supabaseService.client.auth.getSession().then((response) => response.data);
    return from(sessionPromise);
  }

  onAuthStateChange(callback: (event: AuthChangeEvent, session: Session | null) => void): void {
    this.supabaseService.client.auth.onAuthStateChange(callback);
  }

  
}
