import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(
        private _router: Router,
        private _authService: AuthService
    ) { }

    intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        const isLoggedIn = this._authService.isAuthenticated();

        if (isLoggedIn) {
            req = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${this._authService.token}`
                },
                withCredentials: false
            });
        }
                
        return next.handle(req).pipe(
            catchError((response: HttpErrorResponse) => {
                if (response.status === 401) {
                    localStorage.clear();
                    this._router.navigateByUrl('/auth/login');
                }
                return throwError(() => response); // Utilisez la fonction throwError en passant une fonction qui retourne la réponse d'erreur.
            })
        );
    }
}
