import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, tap, catchError } from 'rxjs';
import { apiUrl } from 'src/environments/environment';

@Injectable()
export class CustomerService {

  private apiURL = apiUrl.baseUrl

  constructor(
    private _http: HttpClient,
    private _toastrService: ToastrService,
    private router: Router
  ) { }

  /**
    * Creation d'un client
    * 
    * @param {any}
    * @returns {any[]}
  */
  public createCustomer(value: any): Observable<any> {
    const data = { ...value }
    return this._http.post<any>(`${this.apiURL}/customers/create`, data).pipe(
      tap(customer => {
        customer.status == 200 ? this._toastrService.success(`${customer.message}`, "Succès") : ""
        this.router.navigate(['/authors/customers'])
      }),
      catchError(error => {
        error.status == 400 ? this._toastrService.error(`${error.error.message}`, "Echec") : ""
        throw error
      })
    )
  }

  /**
    * Récupérer la liste totale des customers
    * 
    * @returns {any[]}
  */
  public getAllCustomer(): Observable<any> {
    return this._http.get<any>(`${this.apiURL}/customers`).pipe(
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
    * Mise à jour d'un client
    * 
    * @param {any}
    * @returns {any[]}
  */
  public updateCustomer(value: any, id_client: number): Observable<any> {
    const data = { ...value }
    return this._http.put<any>(`${this.apiURL}/customers/update/${id_client}`, data).pipe(
      tap(users => {
        users.status == 200 ? this._toastrService.success("Client mise à jour avec succès !", "Succès") : ""
      }),
      catchError(error => {
        error.status == 400 ? this._toastrService.error(`${error.error.message}`, "Echec") : ""
        throw error
      })
    )
  }

  /**
    * Suppression d'un client
    * 
    * @param {any}
    * @returns {any[]}
  */
  public deleteCustomer(id_customer: number): Observable<any> {
    return this._http.delete<any>(`${this.apiURL}/customers/delete/${id_customer}`).pipe(
      tap(users => {
        users.status == 200 ? this._toastrService.success("Client mise à jour avec succès !", "Succès") : ""
      }),
      catchError(error => {
        error.status == 400 ? this._toastrService.error(`${error.error.message}`, "Echec") : ""
        throw error
      })
    )
  }
}
