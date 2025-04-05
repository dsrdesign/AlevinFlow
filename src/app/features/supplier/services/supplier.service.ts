import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, tap, catchError } from 'rxjs';
import { apiUrl } from 'src/environments/environment';

@Injectable()
export class SupplierService {

  private apiURL = apiUrl.baseUrl

  constructor(
    private _http: HttpClient,
    private _toastrService: ToastrService,
    private router: Router

  ) { }

  /**
    * Creation d'un founisseur
    * 
    * @param {any}
    * @returns {any[]}
  */
  public createSupplier(value: any): Observable<any> {
    const data = { ...value }
    return this._http.post<any>(`${this.apiURL}/suppliers/create`, data).pipe(
      tap(users => {
        users.status == 200 ? this._toastrService.success("Fournisseur crée avec succès !", "Succès") : ""
        this.router.navigate(['/authors/suppliers'])
      }),
      catchError(error => {
        error.status == 400 ? this._toastrService.error(`${error.error.message}`, "Echec") : ""
        throw error
      })
    )
  }

  /**
    * Récupérer la liste totale des forunisseurs
    * 
    * @returns {any[]}
  */
  public getAllSupplier(): Observable<any> {
    return this._http.get<any>(`${this.apiURL}/suppliers`).pipe(
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
    * Mise à jour d'un founisseur
    * 
    * @param {any}
    * @returns {any[]}
  */
  public updateSupplier(value: any, id_fournisseur: number): Observable<any> {
    const data = { ...value }
    return this._http.put<any>(`${this.apiURL}/suppliers/update/${id_fournisseur}`, data).pipe(
      tap(users => {
        users.status == 200 ? this._toastrService.success("Fournisseur mise à jour avec succès !", "Succès") : ""
      }),
      catchError(error => {
        error.status == 400 ? this._toastrService.error(`${error.error.message}`, "Echec") : ""
        throw error
      })
    )
  }

  /**
    * Suppression d'un founisseur
    * 
    * @param {any}
    * @returns {any[]}
  */
  public deleteSupplier(id_fournisseur: number): Observable<any> {
    return this._http.delete<any>(`${this.apiURL}/suppliers/delete/${id_fournisseur}`).pipe(
      tap(users => {
        users.status == 200 ? this._toastrService.success("Fournisseur mit à jour avec succès !", "Succès") : ""
      }),
      catchError(error => {
        error.status == 400 ? this._toastrService.error(`${error.error.message}`, "Echec") : ""
        throw error
      })
    )
  }
}
