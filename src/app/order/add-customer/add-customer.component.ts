import { Component, OnInit } from '@angular/core';

import {  FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from 'src/app/Models/order-model';
import { OrderService } from 'src/app/services/order.service';


@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  order:Order[]=[];
  createForm: any;

  constructor(
    public OrderService: OrderService,
   
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder)
     {
      this. createForm = this.formBuilder.group({
       
        orderDate: ['', Validators.required],
        customerId: [''],
        itemNumber: [''],
        orderAddress: [''],
       
      });
      }
  
      

       ngOnInit(): void {
        this.OrderService.getOrders().subscribe((data: Order[]) => {
          this.order= data;
          
        });
        }
        
        onSubmit(formData: { value: any; }) {
          this.OrderService.createOrder(formData.value).subscribe(res => {
            this.router.navigateByUrl('orders');
          });
          }

}
