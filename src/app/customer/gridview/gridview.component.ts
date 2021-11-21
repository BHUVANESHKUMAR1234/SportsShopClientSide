import { Component, OnInit } from '@angular/core';

import { Customer } from 'src/app/Models/customer-model';
import { CustomerService } from 'src/app/services/customer.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-gridview',
  templateUrl: './gridview.component.html',
  styleUrls: ['./gridview.component.css']
})
export class GridviewComponent implements OnInit {

  customers: Customer[] = [];
  

   constructor(public CustomerService: CustomerService,private router :Router) { }
 
   ngOnInit(): void {
     this.CustomerService.getCustomers().subscribe((data:Customer[]) => {
       this.customers = data;
     });
    }
    // view(id :number){

    //   this.router.navigate(['/getcustomer'], { state: { data: id } });
    // }

    //  deleteCustomer(id: number) {
    //   this.CustomerService.deleteCustomer(id).subscribe(res => {
    //     this.customers = this.customers.filter(item => item.customerId !== id);
    //   });
    // }
   }
 