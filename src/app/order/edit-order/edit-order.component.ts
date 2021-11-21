import { Component, OnInit } from '@angular/core';
import {  FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Order } from 'src/app/Models/order-model';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.css']
})
export class EditOrderComponent implements OnInit {

  id!: number;
  Order!:Order;
  orders:Order[]=[];
  editForm: any;

  constructor(public OrderService: OrderService,
   
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder)
    {
      this. editForm = this.formBuilder.group({
        orderNumber: [''],
        orderDate: ['', Validators.required],
        customerId: [''],
        itemNumber: [''],
        orderAddress: [''],
        quantity:0,
       
      });
      }
  
      

       ngOnInit(): void {
        this.id = this.route.snapshot.params['orderNumber'];
        this.OrderService.getOrders().subscribe((data: Order[]) => {
          this.orders = data;
          
        });
        

        this.OrderService.getOrder(this.id).subscribe((data: Order) => {
          this.Order= data;
          this.editForm.patchValue(data);
        });
      }
        
        onSubmit(formData: { value: any; }) {
        this.OrderService.updateOrder(this.id,formData.value).subscribe(res => {
          this.router.navigateByUrl('orders');
        });
        }


}
