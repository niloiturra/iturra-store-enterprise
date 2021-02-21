import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { NavMenuModule } from './shared/components/nav-menu/nav-menu.module';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorInterceptor } from './helpers/error.interceptor';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { CommonModule } from '@angular/common';
import { GlobalErrorHandler } from './helpers/global-error-handler';
import { MatSnackBarModule } from '@angular/material';
import { FooterMenuModule } from './shared/components/footer-menu/footer-menu.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    PagesModule,
    NavMenuModule,
    FooterMenuModule,
    RouterModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: ErrorHandler, useClass: GlobalErrorHandler },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
