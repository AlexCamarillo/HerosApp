import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environments } from '../../../environments/environments';
import { User } from '../interfaces/user.interface';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private baseUrl = environments.baseUrl;
  private user?: User


  constructor( private http: HttpClient ) { }


  get currentUser():User|undefined {
    if( !this.user ) return undefined;
      return structuredClone( this.user );//deep clone, se puede usar el operador spread
  }

  login( email: string, password: string ): Observable<User> {

    //http.post('login', { email, password });
    return this.http.get<User>(`${ this.baseUrl }/users/1`)
      .pipe(
        tap( user => this.user = user),
        tap( user => localStorage.setItem('token', 'asdasdasdf.q323423.sdasd') )
      );
  }

  logout() {
    this.user = undefined;
    localStorage.clear();
  }
}
