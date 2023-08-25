import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartComponent } from './chart/chart.component';
import { TransactionComponent } from './transaction/transaction.component';
import { CardComponent } from './card/card.component';



@NgModule({
  declarations: [
    ChartComponent,
    TransactionComponent,
    CardComponent
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
