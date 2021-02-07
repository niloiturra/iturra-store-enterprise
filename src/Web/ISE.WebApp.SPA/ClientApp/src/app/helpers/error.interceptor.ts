import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { LoginService } from '../shared/services/login/login.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private loginService: LoginService, private router: Router) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError(err => {

        switch (err.status) {
          case 401: this.handle401Error();
            break;
          case 404: this.handle404Error();
            break;
          case 500: this.handle500Error();
            break;
        }

        const error = err.error || err;
        return throwError(error);

      }));
  }

  private handle401Error(): void {
    this.loginService.logout();
    location.reload(true);
    return;
  }

  private handle404Error(): void {
    this.router.navigate(['404']);
  }

  private handle500Error(): void {
    this.router.navigate(['500']);
  }
}
