import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, tap, catchError } from 'rxjs';
import { apiUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {

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
   public createPurchase(value: any): Observable<any> {
    const data = { ...value }
    return this._http.post<any>(`${this.apiURL}/purchases/create`, data).pipe(
      tap(users => {
        users.status == 200 ? this._toastrService.success("Purchase crée avec succès !", "Succès") : ""
        this.router.navigate(['/trading/purchases'])
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
    public getAllPurchase(): Observable<any> {
      return this._http.get<any>(`${this.apiURL}/purchases`).pipe(
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
   public updatePurchase(value: any, id_purchase: number): Observable<any> {
    const data = { ...value }
    return this._http.put<any>(`${this.apiURL}/purchases/update/${id_purchase}`, data).pipe(
      tap(users => {
        users.status == 200 ? this._toastrService.success("Purchases mise à jour avec succès !", "Succès") : ""
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
  public deletePurchase(id_purchase: number): Observable<any> {
    return this._http.delete<any>(`${this.apiURL}/purchases/delete/${id_purchase}`).pipe(
      tap(users => {
        users.status == 200 ? this._toastrService.success("Purchases supprimé avec succès !", "Succès") : ""
      }),
      catchError(error => {
        error.status == 404 ? this._toastrService.error(`${error.error.message}`, "Echec") : ""
        throw error
      })
    )
  }
}
