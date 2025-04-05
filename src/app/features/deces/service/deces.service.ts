import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { catchError, Observable, of, tap } from 'rxjs';
import { apiUrl } from 'src/environments/environment';

@Injectable()
export class DecesService {


  

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
   public createDeces(value: any): Observable<any> {
    const data = { ...value }
    return this._http.post<any>(`${this.apiURL}/deces/create`, data).pipe(
      tap(users => {
        users.status == 200 ? this._toastrService.success("Deces crée avec succès !", "Succès") : ""
        this.router.navigate(['/deces'])
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
    public getAllDeces(): Observable<any> {
      return this._http.get<any>(`${this.apiURL}/decesPoissons`).pipe(
        catchError(error => {
          error.status == 400 ? this._toastrService.error(`${error.error.message}`, "Echec") : ""
          error.status == 500 ? this._toastrService.error(`${error.error.message}`, "Echec") : ""
          error.status == 0 ? this._toastrService.error(`${error.message}`, "Echec") : ""
          throw error
        })
      )
    }

    /**
    * Récupérer la liste totale d'alements
    * 
    * @returns {any[]}
  */
    public getAllAlevinCycle(): Observable<any> {
      return this._http.get<any>(`${this.apiURL}/alevincycles`).pipe(
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
   public updateDeces(value: any, id_deces: number): Observable<any> {
    const data = { ...value }
    return this._http.put<any>(`${this.apiURL}/deces/update/${id_deces}`, data).pipe(
      tap(users => {
        users.status == 200 ? this._toastrService.success("Decess mise à jour avec succès !", "Succès") : ""
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
  public deleteDeces(id_deces: number): Observable<any> {
    return this._http.delete<any>(`${this.apiURL}/decesPoissons/delete/${id_deces}`).pipe(
      tap(users => {
        users.status == 200 ? this._toastrService.success("Decess supprimé avec succès !", "Succès") : ""
      }),
      catchError(error => {
        error.status == 404 ? this._toastrService.error(`${error.error.message}`, "Echec") : ""
        throw error
      })
    )
  }
  
}
