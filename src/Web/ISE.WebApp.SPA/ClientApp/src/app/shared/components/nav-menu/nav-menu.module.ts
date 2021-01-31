import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavMenuComponent } from './nav-menu.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule, MatIconModule } from '@angular/material';

@NgModule({
  declarations: [
    NavMenuComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    RouterModule,
    MatIconModule,
  ],
  exports: [
    NavMenuComponent,
  ]
})
export class NavMenuModule { }
