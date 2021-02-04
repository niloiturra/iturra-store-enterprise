import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';
import { UsuarioRegistro, UsuarioRespostaLogin } from 'src/app/shared/models/Usuario';
import { BaseService } from 'src/app/shared/services/base/base.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterService extends BaseService {

  constructor(private http: HttpClient) {
    super();
  }

  registrar(usuarioRegistro: UsuarioRegistro): Observable<UsuarioRespostaLogin> {
    return this.http.post<UsuarioRespostaLogin>(`${this.baseUrl}/identidade/registrar`, usuarioRegistro, this.httpOptions)
      .pipe(
        retry(1),
      );
  }
}
