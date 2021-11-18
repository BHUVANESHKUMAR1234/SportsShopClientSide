import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import{ReactiveFormsModule} from '@angular/forms';

import { CustomerRoutingModule } from './customer-routing.module';

import { ShowCustomerComponent } from './show-customer/show-customer.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { DeleteCustomerComponent } from './delete-customer/delete-customer.component';




@NgModule({
  declarations: [ShowCustomerComponent ,EditCustomerComponent,AddCustomerComponent,DeleteCustomerComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule,ReactiveFormsModule
    
  ]
})
export class CustomerModule { }
