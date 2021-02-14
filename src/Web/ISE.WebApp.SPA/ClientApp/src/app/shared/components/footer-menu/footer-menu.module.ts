import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterMenuComponent } from './footer-menu.component';
import { MatCardModule, MatIconModule, MatTooltipModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [FooterMenuComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    FlexLayoutModule,
    MatTooltipModule,
    MatIconModule,
  ],
  exports: [
    FooterMenuComponent,
  ]
})
export class FooterMenuModule { }
