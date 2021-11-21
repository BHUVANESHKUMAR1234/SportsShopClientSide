import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from 'src/app/Models/order-model';
import { CustomerService } from 'src/app/services/customer.service';



@Component({
  selector: 'app-customer-order',
  templateUrl: './customer-order.component.html',
  styleUrls: ['./customer-order.component.css']
})
export class CustomerOrderComponent implements OnInit {

  orders: Order[] = [];
  id!: number;
 

  constructor(
    public CustomerService: CustomerService,
    private route: ActivatedRoute,
    private router: Router
    
  ) {this.id = history.state.data;
    console.log(this.id); }
 

  ngOnInit(): void {
    this.id = this.route.snapshot.params['customerId'];
    this.CustomerService.getCustomerOrders(this.id).subscribe((data: Order[]) => {
      this.orders = data;
    });
  }







  

}

function id(id: any) {
  throw new Error('Function not implemented.');
}
