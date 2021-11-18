import { Component, OnInit } from '@angular/core';

import {  FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Customer } from 'src/app/Models/customer-model';
import { CustomerService } from 'src/app/services/customer.service';


  
@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  customer:Customer[]=[];
  createForm: any;

  constructor(
    public CustomerService: CustomerService,
   
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder)
     {
      this.createForm = this.formBuilder.group({
        
        customerName: ['', Validators.required],
        contactNumber: [''],
        address: [''],
        emailId: [''],
      });
      }
  
      

       ngOnInit(): void {
        this.CustomerService.getCustomers().subscribe((data: Customer[]) => {
          this.customer = data;
          
        });
        }
        
        onSubmit(formData: { value: any; }) {
        this.CustomerService.createCustomer(formData.value).subscribe(res => {
          this.router.navigateByUrl('customers');
        });
        }

}




