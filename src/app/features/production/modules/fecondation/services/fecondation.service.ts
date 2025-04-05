import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, tap, catchError } from 'rxjs';
import { apiUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FecondationService {

  private apiURL = apiUrl.baseUrl

  constructor(

    private _http: HttpClient,
    private _toastrService: ToastrService,
    private router: Router
  ) { }


   /**
    * Creation d'un cycle
    * 
    * @param {any}
    * @returns {any[]}
  */
   public createFecondation(value: any): Observable<any> {
    const data = { ...value }
    return this._http.post<any>(`${this.apiURL}/fecondations/create`, data).pipe(
      tap(users => {
        users.status == 200 ? this._toastrService.success("Fecondation crée avec succès !", "Succès") : ""
        this.router.navigate(['/productions/fecondations'])
      }),
      catchError(error => {
        error.status == 404 ? this._toastrService.error(`${error.error.message}`, "Echec") : ""
        error.status == 500 ? this._toastrService.error(`${error.error.message}`, "Echec") : ""
        throw error
      })
    )
  }

    /**
    * Récupérer la liste totale des cycle
    * 
    * @returns {any[]}
  */
    public getAllFecondation(): Observable<any> {
      return this._http.get<any>(`${this.apiURL}/fecondations`).pipe(
        catchError(error => {
          error.status == 404 ? this._toastrService.error(`${error.error.message}`, "Echec") : ""
          error.status == 500 ? this._toastrService.error(`${error.error.message}`, "Echec") : ""
          error.status == 0 ? this._toastrService.error(`${error.message}`, "Echec") : ""
          throw error
        })
      )
    }

    /**
    * Mise à jour d'un calibrageAlevincycle
    * 
    * @param {any}
    * @returns {any[]}
  */
   public updateFecondation(value: any, id_fecondation: number): Observable<any> {
    const data = { ...value }
    return this._http.put<any>(`${this.apiURL}/fecondations/update/${id_fecondation}`, data).pipe(
      tap(users => {
        users.status == 200 ? this._toastrService.success("Fecondations mise à jour avec succès !", "Succès") : ""
      }),
      catchError(error => {
        error.status == 404 ? this._toastrService.error(`${error.error.message}`, "Echec") : ""
        throw error
      })
    )
  }

  /**
    * Suppression d'un calibrageAlevincycle
    * 
    * @param {any}
    * @returns {any[]}
  */
  public deleteFecondation(id_fecondation: number): Observable<any> {
    return this._http.delete<any>(`${this.apiURL}/fecondations/delete/${id_fecondation}`).pipe(
      tap(users => {
        users.status == 200 ? this._toastrService.success("Fecondations supprimé avec succès !", "Succès") : ""
      }),
      catchError(error => {
        error.status == 404 ? this._toastrService.error(`${error.error.message}`, "Echec") : ""
        throw error
      })
    )
  }
  
}
