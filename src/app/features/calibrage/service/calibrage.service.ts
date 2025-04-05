import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable, tap, catchError } from 'rxjs';
import { apiUrl } from 'src/environments/environment';

@Injectable()
export class CalibrageService {

  private apiURL = apiUrl.baseUrl

  constructor(
    private _http: HttpClient,
    private _toastrService: ToastrService
  ) { }

  /**
    * Creation d'un calibrage
    *
    * @param {any}
    * @returns {any[]}
  */
  public createCalibrage(value: any): Observable<any> {
    const data = { ...value }
    return this._http.post<any>(`${this.apiURL}/calibrages/create`, data).pipe(
      tap(users => {
        users.status == 200 ? this._toastrService.success("Calibrage d'Alevin  crée avec succès !", "Succès") : ""
      }),
      catchError(error => {
        error.status == 400 ? this._toastrService.error(`${error.error.message}`, "Echec lors de la creation du calibre") : ""
        throw error
      })
    )
  }

  /**
    * Récupérer la liste totale des calibrage
    *
    * @returns {any[]}
  */
  public getAllCalibrage(): Observable<any> {
    return this._http.get<any>(`${this.apiURL}/calibrageAlevinCycles`).pipe(
      catchError(error => {
        error.status == 400 ? this._toastrService.error(`${error.error.message}`, "Echec") : ""
        error.status == 0 ? this._toastrService.error(`${error.message}`, "Echec") : ""
        throw error
      })
    )
  }

  public getCalibrageById(idCalibrage: number): Observable<any> {
    return this._http.get<any>(`${this.apiURL}/calibrageAlevinCycles/${idCalibrage}`).pipe(
      catchError(error => {
        error.status == 400 ? this._toastrService.error(`${error.error.message}`, "Echec") : ""
        error.status == 0 ? this._toastrService.error(`${error.message}`, "Echec") : ""
        throw error
      })
    )
  }


   /**
    * Mise à jour d'un calibrage
    *
    * @param {any}
    * @returns {any[]}
  */
   public updateCalibrage(value: any, id_cycle: number): Observable<any> {
    const data = { ...value }
    return this._http.put<any>(`${this.apiURL}/calibrageAlevinCycles/update/${id_cycle}`, data).pipe(
      tap(users => {
        users.status == 200 ? this._toastrService.success("Calibrage mise à jour avec succès !", "Succès") : ""
      }),
      catchError(error => {
        error.status == 400 ? this._toastrService.error(`${error.error.message}`, "Echec") : ""
        throw error
      })
    )
  }

  /**
    * Suppression d'un calibrage
    *
    * @param {any}
    * @returns {any[]}
  */
  public deleteCalibrage(id_calibrage: number): Observable<any> {
    return this._http.delete<any>(`${this.apiURL}/calibrageAlevinCycles/delete/${id_calibrage}`).pipe(
      tap(users => {
        users.status == 200 ? this._toastrService.success("Calibrage supprimé avec succès !", "Succès") : ""
      }),
      catchError(error => {
        error.status == 404 ? this._toastrService.error(`${error.error.message}`, "Echec") : ""
        throw error
      })
    )
  }

}
