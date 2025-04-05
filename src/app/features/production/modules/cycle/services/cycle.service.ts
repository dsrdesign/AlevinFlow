import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable, tap, catchError } from 'rxjs';
import { apiUrl } from 'src/environments/environment';

@Injectable()
export class CycleService {

  private apiURL = apiUrl.baseUrl

  constructor(
    private _http: HttpClient,
    private _toastrService: ToastrService
  ) { }

  /**
    * Creation d'un cycle
    * 
    * @param {any}
    * @returns {any[]}
  */
  public createCycle(value: any): Observable<any> {
    const data = { ...value }
    return this._http.post<any>(`${this.apiURL}/cycles/create`, data).pipe(
      tap(users => {
        users.status == 200 ? this._toastrService.success("Cycle crée avec succès !", "Succès") : ""
      }),
      catchError(error => {
        error.status == 400 ? this._toastrService.error(`${error.error.message}`, "Echec") : ""
        throw error
      })
    )
  }

  /**
    * Récupérer la liste totale des cycle
    * 
    * @returns {any[]}
  */
  public getAllCycle(): Observable<any> {
    return this._http.get<any>(`${this.apiURL}/cycles`).pipe(
      catchError(error => {
        error.status == 400 ? this._toastrService.error(`${error.error.message}`, "Echec") : ""
        error.status == 0 ? this._toastrService.error(`${error.message}`, "Echec") : ""
        throw error
      })
    )
  }

  public getCycleById(idCycle: number): Observable<any> {
    return this._http.get<any>(`${this.apiURL}/cycles/${idCycle}`).pipe(
      catchError(error => {
        error.status == 400 ? this._toastrService.error(`${error.error.message}`, "Echec") : ""
        error.status == 0 ? this._toastrService.error(`${error.message}`, "Echec") : ""
        throw error
      })
    )
  }
   
   /**
    * Récupérer la liste des cycles en fonction de id
    * 
    * @returns {any[]}
  */
   public getProduction(id_cycle: number): Observable<any> {
    return this._http.get<any>(`${this.apiURL}/cycles/${id_cycle}`).pipe(
      tap(users => {
      }),
      catchError(error => {
        error.status == 400 ? this._toastrService.error(`${error.error.message}`, "Echec") : ""
        error.status == 0 ? this._toastrService.error(`${error.message}`, "Echec") : ""
        throw error
      })
    )
  }

  /**
    * Mise à jour d'un cycle
    * 
    * @param {any}
    * @returns {any[]}
  */
  public updateCycle(value: any, id_cycle: number): Observable<any> {
    const data = { ...value }
    return this._http.put<any>(`${this.apiURL}/cycles/update/${id_cycle}`, data).pipe(
      tap(users => {
        users.status == 200 ? this._toastrService.success("Cycle mise à jour avec succès !", "Succès") : ""
      }),
      catchError(error => {
        error.status == 400 ? this._toastrService.error(`${error.error.message}`, "Echec") : ""
        throw error
      })
    )
  }

  /**
    * Mise à jour d'un cycle
    * 
    * @param {any}
    * @returns {any[]}
  */
  public updateStatusCycle( id_cycle: number, statut: string,): Observable<any> {
    const data = { statut }
    return this._http.put<any>(`${this.apiURL}/cycles/update-statut/${id_cycle}`, data).pipe(
      tap(cycle => {
        cycle.status == 200 ? this._toastrService.success(`${cycle.message}`, "Succès") : ""
      }),
      catchError(error => {
        error.status == 400 ? this._toastrService.error(`${error.error.message}`, "Echec") : ""
        throw error
      })
    )
  }

  /**
    * Suppression d'un cycle
    * 
    * @param {any}
    * @returns {any[]}
  */
  public deleteCycle(id_cycle: number): Observable<any> {
    return this._http.delete<any>(`${this.apiURL}/cycles/delete/${id_cycle}`).pipe(
      tap(users => {
        users.status == 200 ? this._toastrService.success("Cycle supprimé avec succès !", "Succès") : ""
      }),
      catchError(error => {
        error.status == 404 ? this._toastrService.error(`${error.error.message}`, "Echec") : ""
        throw error
      })
    )
  }
}
