import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartComponent } from './chart/chart.component';
import { TransactionComponent } from './transaction/transaction.component';



@NgModule({
  declarations: [
    ChartComponent,
    TransactionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ChartComponent,
    TransactionComponent,
  ]
})
export class SharedModule { }
