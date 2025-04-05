import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, catchError, map, of } from 'rxjs';
import { CycleService } from '../services/cycle.service';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class CycleResolver implements Resolve<boolean> {

  constructor(
    private _cycleService: CycleService,
    private _toastrService: ToastrService,
    private _router: Router,
  ) {

  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | any{
    const idCycle = route.params["idCycle"];
         
          return this._cycleService.getCycleById(idCycle).pipe(
               map(project => {
                    if (project) {
                         return project;
                    };
                    this._toastrService.error(`Le cycle n'a pas ete trouve `, "Echec")
                    console.log(`Le cycle n'a pas ete trouve : ${idCycle}`);
                    this._router.navigate(['/productions']);
                    return of(null);

               }),
               catchError(error => {
                    console.log(`Oups une erreur : ${error}`);
                    this._router.navigate(['/productions']);
                    return of(error);
               })
          )
  }
}
