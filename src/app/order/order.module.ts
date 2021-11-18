import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import{ReactiveFormsModule} from '@angular/forms';

import { OrderRoutingModule } from './order-routing.module';

import { ShowOrderComponent } from './show-order/show-order.component';
import { EditOrderComponent } from './edit-order/edit-order.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { DeleteCustomerComponent } from './delete-customer/delete-customer.component';





@NgModule({
  declarations: [ShowOrderComponent,EditOrderComponent, AddCustomerComponent, DeleteCustomerComponent],
  imports: [
    CommonModule,
    OrderRoutingModule,ReactiveFormsModule
  ]
})
export class OrderModule { }
