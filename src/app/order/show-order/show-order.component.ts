import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Order } from 'src/app/Models/order-model';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-show-order',
  templateUrl: './show-order.component.html',
  styleUrls: ['./show-order.component.css']
})
export class ShowOrderComponent implements OnInit {

  id!: number;
  order!:Order ;

  constructor(
    public OrderService: OrderService,
    private route: ActivatedRoute,
    private router: Router
    
  ) 
  {this.id = history.state.data;
    console.log(this.id); }
 
  ngOnInit(): void {
    this.id = this.route.snapshot.params['orderNumber'];
    
    this.OrderService.getOrder(this.id).subscribe((data:Order) => {
      this.order = data;
      console.log(data)
    });
  }

}
