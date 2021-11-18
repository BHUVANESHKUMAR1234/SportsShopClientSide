import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/Models/customer-model';
import { ActivatedRoute, Router } from '@angular/router';

import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-show-customer',
  templateUrl: './show-customer.component.html',
  styleUrls: ['./show-customer.component.css']
})
export class ShowCustomerComponent implements OnInit {
  id!: number;
  customer!:Customer ;

  constructor(
    public CustomerService: CustomerService,
    private route: ActivatedRoute,
    private router: Router
    
  ) {this.id = history.state.data;
    console.log(this.id); }
 
  ngOnInit(): void {
    this.id = this.route.snapshot.params['customerId'];
    
    this.CustomerService.getCustomer(this.id).subscribe((data: Customer) => {
      this.customer = data;
      console.log(data)
    });
  }
}
