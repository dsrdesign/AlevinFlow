import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, tap, catchError } from 'rxjs';
import { apiUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GeniteurService {

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
  public createGeniteur(value: any): Observable<any> {
    const data = { ...value }
    return this._http.post<any>(`${this.apiURL}/geniteurs/create`, data).pipe(
      tap(users => {
        users.status == 200 ? this._toastrService.success("Geniteur crée avec succès !", "Succès") : ""
        this.router.navigate(['/products/geniteurs/list'])
      }),
      catchError(error => {
        error.status == 400 ? this._toastrService.error(`${error.error.message}`, "Echec") : ""
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
    public getAllGeniteur(): Observable<any> {
      return this._http.get<any>(`${this.apiURL}/geniteurs`).pipe(
        catchError(error => {
          error.status == 400 ? this._toastrService.error(`${error.error.message}`, "Echec") : ""
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
   public updateGeniteur(value: any, id_geniteur: number): Observable<any> {
    const data = { ...value }
    return this._http.put<any>(`${this.apiURL}/geniteurs/update/${id_geniteur}`, data).pipe(
      tap(users => {
        users.status == 200 ? this._toastrService.success("Geniteurs mise à jour avec succès !", "Succès") : ""
      }),
      catchError(error => {
        error.status == 400 ? this._toastrService.error(`${error.error.message}`, "Echec") : ""
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
  public deleteGeniteur(id_geniteur: number): Observable<any> {
    return this._http.delete<any>(`${this.apiURL}/geniteurs/delete/${id_geniteur}`).pipe(
      tap(users => {
        users.status == 200 ? this._toastrService.success("Geniteurs supprimé avec succès !", "Succès") : ""
      }),
      catchError(error => {
        error.status == 404 ? this._toastrService.error(`${error.error.message}`, "Echec") : ""
        throw error
      })
    )
  }
}
