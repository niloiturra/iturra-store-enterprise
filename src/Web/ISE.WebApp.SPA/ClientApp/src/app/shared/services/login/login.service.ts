import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { retry, map } from 'rxjs/operators';
import { UsuarioLogin, UsuarioRespostaLogin } from '../../models/Usuario';
import { BaseService } from '../base/base.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends BaseService {

  private currentUserSubject: BehaviorSubject<UsuarioRespostaLogin>;
  public currentUser: Observable<UsuarioRespostaLogin>;

  constructor(private http: HttpClient) {
    super();
    this.currentUserSubject = new BehaviorSubject<UsuarioRespostaLogin>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): UsuarioRespostaLogin {
    return this.currentUserSubject.value;
  }

  login(usuarioLogin: UsuarioLogin): Observable<UsuarioRespostaLogin> {
    return this.http.post<UsuarioRespostaLogin>(`${this.baseUrl}/identidade/logar`, usuarioLogin, this.httpOptions)
      .pipe(
        retry(1),
        map(user => {
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
          return user;
        })
      );
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    location.reload(true);
  }
}
