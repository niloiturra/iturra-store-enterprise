import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { UsuarioLogin, UsuarioRespostaLogin } from '../../models/Usuario';
import { BaseService } from '../base/base.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends BaseService {

  constructor(private http: HttpClient) {
    super();
  }

  login(usuarioLogin: UsuarioLogin): Observable<UsuarioRespostaLogin> {
    return this.http.post<UsuarioRespostaLogin>(`${this.baseUrl}/identidade/logar`, usuarioLogin, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
}
