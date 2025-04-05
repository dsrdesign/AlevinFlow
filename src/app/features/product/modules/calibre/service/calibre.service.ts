import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { catchError, Observable, tap } from 'rxjs';
import { apiUrl } from 'src/environments/environment';
import { ICalibreGet } from '../interfaces/calibre.interface';
import { IResCalibreGet } from 'src/app/features/trading/modules/sale/interfaces copy/calibre.interface';

@Injectable()
export class CalibreService {

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
  public createCalibre(value: any): Observable<any> {
    const data = { ...value }
    return this._http.post<any>(`${this.apiURL}/calibres/create`, data).pipe(
      tap(users => {
        users.status == 200 ? this._toastrService.success("Calibre crée avec succès !", "Succès") : ""
        this.router.navigate(['/products/calibres/list'])
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
    public getAllCalibre(): Observable<IResCalibreGet> {
      return this._http.get<any>(`${this.apiURL}/calibres`).pipe(
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
   public updateCalibre(value: any, id_calibre: number): Observable<any> {
    const data = { ...value }
    return this._http.put<any>(`${this.apiURL}/calibres/update/${id_calibre}`, data).pipe(
      tap(users => {
        users.status == 200 ? this._toastrService.success("Calibres mise à jour avec succès !", "Succès") : ""
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
  public deleteCalibre(id_calibre: number): Observable<any> {
    return this._http.delete<any>(`${this.apiURL}/calibres/delete/${id_calibre}`).pipe(
      tap(users => {
        users.status == 200 ? this._toastrService.success("Calibres supprimé avec succès !", "Succès") : ""
      }),
      catchError(error => {
        error.status == 404 ? this._toastrService.error(`${error.error.message}`, "Echec") : ""
        throw error
      })
    )
  }
}
