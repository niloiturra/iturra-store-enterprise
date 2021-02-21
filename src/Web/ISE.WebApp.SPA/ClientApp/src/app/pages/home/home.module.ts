import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CatalogoComponent } from '../catalogo/catalogo.component';
import { CatalogoModule } from '../catalogo/catalogo.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    CatalogoModule,
  ],
  exports: [
    HomeComponent,
  ]
})
export class HomeModule { }
