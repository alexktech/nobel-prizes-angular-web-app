import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatPaginatorModule,
  MatSortModule,
  MatTableModule
} from '@angular/material';

@NgModule({
  exports: [
    MatButtonModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule
  ]
})
export class AppMaterialModule { }
