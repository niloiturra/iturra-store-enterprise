import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BaseModel } from '../../models/BaseModel';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseService<T extends BaseModel> {

  protected http: HttpClient;
  protected httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  constructor(protected apiPath: string, protected injector: Injector) {
    this.http = this.injector.get(HttpClient);
  }

  pegarTodos(): Observable<T[]> {
    return this.http.get<T[]>(`${this.apiPath}`, this.httpOptions);
  }

  pegarPorId(id: string): Observable<T> {
    return this.http.get<T>(`${this.apiPath}/${id}`, this.httpOptions);
  }

  criar(recurso: T): Observable<T> {
    return this.http.post<T>(`${this.apiPath}`, recurso, this.httpOptions);
  }

  atualizar(recurso: T): Observable<T> {
    return this.http.put<T>(`${this.apiPath}`, recurso, this.httpOptions);
  }

  deletar(id: string): Observable<any> {
    return this.http.delete(`${this.apiPath}/${id}`, this.httpOptions);
  }
}
