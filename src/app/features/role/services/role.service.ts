import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, tap, catchError } from 'rxjs';
import { apiUrl } from 'src/environments/environment';
import { IResRoleGet } from '../interfaces/role.interface';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
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
   public createRole(value: any): Observable<any> {
    const data = { ...value }
    return this._http.post<any>(`${this.apiURL}/roles/create`, data).pipe(
      tap(users => {
        users.status == 200 ? this._toastrService.success("Role crée avec succès !", "Succès") : ""
        this.router.navigate(['/roles/list'])
      }),
      catchError(error => {
        error.status == 400 ? this._toastrService.error(`${error.error.message}`, "Echec") : ""
        error.status == 500 ? this._toastrService.error(`${error.error.message}`, "Echec") : ""
        throw error
      })
    )
  }

    /**
    * Récupérer la liste totale d'alements
    * 
    * @returns {any[]}
  */
    public getAllRole(): Observable<IResRoleGet> {
      return this._http.get<IResRoleGet>(`${this.apiURL}/roles`).pipe(
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
   public updateRole(value: any, id_role: number): Observable<any> {
    const data = { ...value }
    return this._http.put<any>(`${this.apiURL}/roles/update/${id_role}`, data).pipe(
      tap(users => {
        users.status == 200 ? this._toastrService.success("Roles mise à jour avec succès !", "Succès") : ""
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
  public deleteRole(id_role: number): Observable<any> {
    return this._http.delete<any>(`${this.apiURL}/roles/delete/${id_role}`).pipe(
      tap(users => {
        users.status == 200 ? this._toastrService.success("Roles supprimé avec succès !", "Succès") : ""
      }),
      catchError(error => {
        error.status == 404 ? this._toastrService.error(`${error.error.message}`, "Echec") : ""
        throw error
      })
    )
  }

}
