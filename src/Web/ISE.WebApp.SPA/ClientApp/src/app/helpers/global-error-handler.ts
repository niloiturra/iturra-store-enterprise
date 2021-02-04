import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ResponseResult } from '../shared/models/ErrorModel';
import { ErrorService } from '../shared/services/error/error.service';
import { NotificationService } from '../shared/services/notifications.service';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

  private errorService: ErrorService;
  private notificationService: NotificationService;

  constructor(private injector: Injector) { }

  handleError(error: ResponseResult | HttpErrorResponse) {
    this.errorService = this.injector.get(ErrorService);
    this.notificationService = this.injector.get(NotificationService);

    if (error instanceof HttpErrorResponse) {
      // Server error
      const message = this.errorService.getServerErrorMessage(error);
      this.notificationService.showError(message);
    } else {
      // Client Error
      const message = this.errorService.getClientErrorMessage(error);
      this.notificationService.showError(message);
    }
  }
}
