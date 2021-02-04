import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { LoginService } from '../shared/services/login/login.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private loginService: LoginService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError(err => {
        if (err.status === 401) {
          this.loginService.logout();
          location.reload(true);
          return;
        } else {
          const error = err.error || err;
          return throwError(error);
        }
      }));
  }
}
