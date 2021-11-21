import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShowOrderComponent } from './show-order/show-order.component';
import { EditOrderComponent } from './edit-order/edit-order.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
//import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { DeleteCustomerComponent } from './delete-customer/delete-customer.component';

const routes: Routes = [
  { path: 'orders', redirectTo: 'order', pathMatch: 'full' },

  { path: 'orders/:orderNumber/show', component: ShowOrderComponent  },

  //{ path: 'Customer/:CustomerId/details', component: ShowCustomerComponent  },
  { path: 'orders/add', component: AddCustomerComponent },
  { path: 'orders/:orderNumber/edit', component: EditOrderComponent  },
  { path: 'orders/:orderNumber/delete', component:  DeleteCustomerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
