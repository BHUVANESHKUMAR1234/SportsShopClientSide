import { Component, OnInit } from '@angular/core';

import {  FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Customer } from 'src/app/Models/customer-model';
import { CustomerService } from 'src/app/services/customer.service';


@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {

  id!: number;
  customer!:Customer;
  customers:Customer[]=[];
  editForm: any;

  constructor(
    public CustomerService: CustomerService,
   
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder)
     {
      this.editForm = this.formBuilder.group({
        customerId: [''],
        
        customerName: ['', Validators.required],
        contactNumber: [''],
        address: [''],
        emailId: [''],
      });
      }
  
      

       ngOnInit(): void {

        this.id = this.route.snapshot.params['customerId'];

        this.CustomerService.getCustomers().subscribe((data: Customer[]) => {
          this.customers = data;
          
        });
        
        this.CustomerService.getCustomer(this.id).subscribe((data: Customer) => {
          this.customer = data;
          this.editForm.patchValue(data);
        });
      }
        
        onSubmit(formData: { value: any; }) {
        this.CustomerService.updateCustomer(this.id,formData.value).subscribe(res => {
          this.router.navigateByUrl('customers');
        });
        }


}
