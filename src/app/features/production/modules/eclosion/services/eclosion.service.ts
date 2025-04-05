import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, tap, catchError } from 'rxjs';
import { apiUrl } from 'src/environments/environment';

@Injectable()
export class EclosionService {

  

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
   public createEclosion(value: any): Observable<any> {
    const data = { ...value }
    return this._http.post<any>(`${this.apiURL}/alevincycles/create`, data).pipe(
      tap(users => {
        users.status == 200 ? this._toastrService.success("Eclosion crée avec succès !", "Succès") : ""
        this.router.navigate(['/productions/eclosions'])
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
    public getAllEclosion(): Observable<any> {
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
   public updateEclosion(value: any, id_eclosion: number): Observable<any> {
    const data = { ...value }
    return this._http.put<any>(`${this.apiURL}/alevincycles/update/${id_eclosion}`, data).pipe(
      tap(users => {
        users.status == 200 ? this._toastrService.success("Eclosions mise à jour avec succès !", "Succès") : ""
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
  public deleteEclosion(id_eclosion: number): Observable<any> {
    return this._http.delete<any>(`${this.apiURL}/alevincycles/delete/${id_eclosion}`).pipe(
      tap(users => {
        users.status == 200 ? this._toastrService.success("Eclosions supprimé avec succès !", "Succès") : ""
      }),
      catchError(error => {
        error.status == 404 ? this._toastrService.error(`${error.error.message}`, "Echec") : ""
        throw error
      })
    )
  }
  
}
