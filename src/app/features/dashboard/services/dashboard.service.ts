import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { catchError, Observable } from 'rxjs';
import { apiUrl } from 'src/environments/environment';

@Injectable({
  providedIn: "root"
})
export class DashboardService {

  private apiURL = apiUrl.baseUrl

  constructor(

    private _http: HttpClient,
    private _toastrService: ToastrService,
  ) { }



    /**
    * Récupérer la liste totale des cycle
    * 
    * @returns {any[]}
  */
    public getDashboard(): Observable<any> {
      return this._http.get<any>(`${this.apiURL}/dashboard/dashboard`).pipe(
        catchError(error => {
          error.status == 400 ? this._toastrService.error(`${error.error.message}`, "Echec") : ""
          error.status == 500 ? this._toastrService.error(`${error.error.message}`, "Echec") : ""
          error.status == 0 ? this._toastrService.error(`${error.message}`, "Echec") : ""
          throw error
        })
      )
    }

    
}
