import { MatNativeDateModule } from '@angular/material';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule,MatTabsModule,MatIconModule} from '@angular/material';


@NgModule({
  imports: [CommonModule, MatToolbarModule],
  exports: [
    MatToolbarModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule
    MatTabsModule,
    MatIconModule,
  ],
  exports:[
    MatToolbarModule,
    MatTabsModule,
    MatIconModule,
  ]
})
export class MaterialDesignModule {}
