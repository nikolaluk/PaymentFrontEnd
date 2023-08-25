import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FeaturesRoutingModule } from './features-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PaymentsComponent } from './payments/payments.component';
import { CardsComponent } from './cards/cards.component';
import { MoreComponent } from './more/more.component';

@NgModule({
  declarations: [
    HomeComponent,
    PaymentsComponent,
    CardsComponent,
    MoreComponent
  ],
  imports: [
    SharedModule,

    CommonModule,
    FeaturesRoutingModule,
  ]
})
export class FeaturesModule { }
