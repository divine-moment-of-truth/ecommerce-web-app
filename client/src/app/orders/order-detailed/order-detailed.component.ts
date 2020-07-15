import { Component, OnInit } from '@angular/core';
import { IOrder } from 'src/app/shared/models/order';
import { OrdersService } from '../orders.service';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'app-order-detailed',
  templateUrl: './order-detailed.component.html',
  styleUrls: ['./order-detailed.component.scss']
})
export class OrderDetailedComponent implements OnInit {
  order: IOrder;

  constructor(private ordersService: OrdersService, private route: ActivatedRoute, private breadcrumbService: BreadcrumbService) {
    this.breadcrumbService.set('@OrderDetailed', '');
  }

  ngOnInit(): void {
    this.ordersService.getOrdersDetailed(+this.route.snapshot.paramMap.get('id')).subscribe((order: IOrder) => {
      this.order = order;
      this.breadcrumbService.set('@OrderDetailed', `Orders# ${order.id} - ${order.status}`);
    }, error => {
      console.log(error);
    });
  }

  getOrderById(id: number) {
    this.ordersService.getOrdersDetailed(id).subscribe((order: IOrder) => {
      this.order = order;
    });
  }

}
