import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, catchError, of, tap } from 'rxjs';
import { apiUrl } from 'src/environments/environment';

@Injectable()
export class UserService {

  private apiURL = apiUrl.baseUrl

  constructor(
    private _http: HttpClient,
    private _toastrService: ToastrService,
    private router: Router
  ) { }

  /**
    * Creation d'un utilisateur
    * 
    * @param {any}
    * @returns {any[]}
  */
  public createUser(value: any): Observable<any> {
    const data = { ...value }
    return this._http.post<any>(`${this.apiURL}/users/create`, data).pipe(
      tap(users => {
        users.status == 200 ? this._toastrService.success("Utilisateur crée avec succès !", "Succès") : ""
        this.router.navigate(['/users'])
      }),
      catchError(error => {
        error.status == 400 ? this._toastrService.error(`${error.error.message}`, "Echec") : ""
        throw error
      })
    )
  }

  /**
    * Récupérer la liste totale des users
    * 
    * @returns {any[]}
  */
  public getAllUser(): Observable<any> {
    return this._http.get<any>(`${this.apiURL}/users`).pipe(
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
    * Mise à jour du statut d'un utilisateur
    * 
    * @param {any}
    * @returns {any[]}
  */
  public updateStatutUser( id_user: number, statut: string): Observable<any> {
    const data = { statut }
    return this._http.put<any>(`${this.apiURL}/users/update-statut/${id_user}`, data).pipe(
      tap(user => {
        user.status == 200 ? this._toastrService.success(`Sucess`, `${user.message}`) : ""
      }),
      catchError(error => {
        error.status == 400 ? this._toastrService.error(`${error.error.message}`, "Echec") : ""
        throw error
      })
    )
  }


}
 