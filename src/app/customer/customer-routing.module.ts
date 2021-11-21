import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CustomerComponent } from './customer.component';
import { ShowCustomerComponent } from './show-customer/show-customer.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { DeleteCustomerComponent } from './delete-customer/delete-customer.component';
import { CustomerOrderComponent } from './customer-order/customer-order.component';
import { GridviewComponent } from './gridview/gridview.component';



const routes: Routes = [
  { path: 'customers', redirectTo: 'customer', pathMatch: 'full' },

  { path: 'customers/:customerId/show', component: ShowCustomerComponent  },

  //{ path: 'Customer/:CustomerId/details', component: ShowCustomerComponent  },
  { path: 'customers/add', component:AddCustomerComponent  },
  { path: 'customers/:customerId/edit', component: EditCustomerComponent },
  { path: 'customers/:customerId/showOrder', component:CustomerOrderComponent },
  { path: 'customers/:customerId/delete', component: DeleteCustomerComponent },
  { path: 'customers/grid', component: GridviewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
