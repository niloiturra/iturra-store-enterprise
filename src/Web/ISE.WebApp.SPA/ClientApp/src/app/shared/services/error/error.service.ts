import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ResponseResult } from '../../models/ErrorModel';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  getClientErrorMessage(error: ResponseResult): string {
    if (error.errors.mensagens) {
      return error.errors.mensagens[0];
    } else {
      let message = '';
      for (let obj in error.errors) {
        message = error.errors[obj];
      }
      return message;
    }
  }

  getServerErrorMessage(error: HttpErrorResponse): string {
    return navigator.onLine ?
      error.message :
      'Sem conexão com a Internet';
  }
}
