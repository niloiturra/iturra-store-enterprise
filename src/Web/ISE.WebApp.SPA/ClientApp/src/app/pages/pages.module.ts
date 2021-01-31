import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { LoginModule } from './login/login.module';
import { LoginComponent } from './login/login.component';
import { RegisterModule } from './register/register.module';
import { RegisterComponent } from './register/register.component';

const routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'registrar', component: RegisterComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    HomeModule,
    LoginModule,
  ],
  exports: [
    HomeModule,
    LoginModule,
    RegisterModule
  ]
})
export class PagesModule { }
