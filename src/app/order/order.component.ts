import { Component, OnInit } from '@angular/core';

import { Order } from '../Models/order-model'; 
import { OrderService } from '../services/order.service'; 
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  
  orders: Order[] = [];

  constructor(public OrderService: OrderService) { }

  ngOnInit(): void {
    this.OrderService.getOrders().subscribe((data: Order[]) => {
      this.orders = data;
    });
  }







  deleteOrder(id: number) {
    this.OrderService.deleteOrder(id).subscribe((res: any) => {
      this.orders = this.orders.filter(item => item.orderNumber!== id);
    });
  }


}






