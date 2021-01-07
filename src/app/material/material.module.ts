import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button'
import { MatInputModule } from '@angular/material/input'
import { MatSelectModule } from '@angular/material/select'; 
import { MatDividerModule } from '@angular/material/divider'; 
import { MatListModule } from '@angular/material/list';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatDividerModule,
    MatListModule,
  ],
  exports:[
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatDividerModule,
    MatListModule,
  ]
})
export class MaterialModule { }
