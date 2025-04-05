import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, tap, catchError } from 'rxjs';
import { IResAlimentGet } from 'src/app/features/product/modules/aliment/interfaces/aliment.interface';
import { apiUrl } from 'src/environments/environment';

@Injectable()
export class SaleService {

  

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
   public createSale(value: any): Observable<any> {
    const data = { ...value }
    return this._http.post<any>(`${this.apiURL}/sales/create`, data).pipe(
      tap(users => {
        users.status == 200 ? this._toastrService.success("Sale crée avec succès !", "Succès") : ""
        this.router.navigate(['/trading/sales'])
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
    public getAllSale(): Observable<any> {
      return this._http.get<any>(`${this.apiURL}/sales`).pipe(
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
   public updateSale(value: any, id_sale: number): Observable<any> {
    const data = { ...value }
    return this._http.put<any>(`${this.apiURL}/sales/update/${id_sale}`, data).pipe(
      tap(users => {
        users.status == 200 ? this._toastrService.success("Sales mise à jour avec succès !", "Succès") : ""
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
  public deleteSale(id_sale: number): Observable<any> {
    return this._http.delete<any>(`${this.apiURL}/sales/delete/${id_sale}`).pipe(
      tap(users => {
        users.status == 200 ? this._toastrService.success("Sales supprimé avec succès !", "Succès") : ""
      }),
      catchError(error => {
        error.status == 404 ? this._toastrService.error(`${error.error.message}`, "Echec") : ""
        throw error
      })
    )
  }
  
}
