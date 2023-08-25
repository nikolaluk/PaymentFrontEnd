import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PaymentsComponent } from './payments/payments.component';
import { CardsComponent } from './cards/cards.component';
import { MoreComponent } from './more/more.component';

const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'payments', component: PaymentsComponent},
    { path: 'cards', component: CardsComponent},
    { path: 'more', component: MoreComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
