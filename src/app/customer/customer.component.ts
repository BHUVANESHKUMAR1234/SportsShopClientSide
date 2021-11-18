import { Component, OnInit } from '@angular/core';

import { Customer } from '../Models/customer-model';
import { CustomerService } from '../services/customer.service'; 
import { ActivatedRoute, Router } from '@angular/router';




@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {


   // value:string='';
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

     deleteCustomer(id: number) {
      this.CustomerService.deleteCustomer(id).subscribe(res => {
        this.customers = this.customers.filter(item => item.customerId !== id);
      });
    }
   }
 

  
 

  

  

  








 


// function deleteCustomer(id: any) {
//   throw new Error('Function not implemented.');
// }

// function id(id: any) {
//   throw new Error('Function not implemented.');
// }

