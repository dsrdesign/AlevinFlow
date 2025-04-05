// import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { ToastrService } from 'ngx-toastr';



@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private _auth: AuthService,
    private _router: Router,
    private _toastr: ToastrService,
  ) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this._auth.isAuthenticated()) {
      this._toastr.error(`Vous n'etes pas connecté !`, `Non autorisé`)
      this._router.navigate(['/auth'], { queryParams: { returnUrl: state.url } })
      return false;
    }
     
      console.log('user logged');
      return true;
  }
}

