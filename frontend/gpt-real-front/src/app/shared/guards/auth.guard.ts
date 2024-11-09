import { catchError, switchMap } from 'rxjs/operators';
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { AlertToastService } from 'src/app/services/alert-toast.service';

export const AuthGuard: CanActivateFn = (route, state) => {
  let router = inject(Router)
  let authService = inject(AuthService)
  let alertToastService = inject(AlertToastService)

  return authService.getSession().pipe(
    switchMap((session) => {
      if (session.session) {
          return [true];
        } else {
          alertToastService.info("Login to access this feature.")
          router.navigate(['/auth']);
          return [false];
        }
    }),
    catchError(() => {
      router.navigate(['/auth']);
      return [false];
    })
  );
}

