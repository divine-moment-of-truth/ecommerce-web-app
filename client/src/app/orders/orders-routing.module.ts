import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders.component';
import { OrderDetailedComponent } from './order-detailed/order-detailed.component';
import { RouterModule } from '@angular/router';

const routes = [
  { path: '', component: OrdersComponent },
  { path: ':id', component: OrderDetailedComponent, data: { breadcrumb : { alias: 'OrderDetailed' } } }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class OrdersRoutingModule { }
