import { Component, OnInit } from '@angular/core';
import {  FormBuilder, Validators } from '@angular/forms';

import { Order } from '../Models/order-model'; 
import { OrderService } from '../services/order.service'; 

//import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  
  orders: Order[] = [];
  formData: any;
  data: any;

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






