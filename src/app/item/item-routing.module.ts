import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ItemComponent } from './item.component';

import { ShowItemComponent } from './show-item/show-item.component';
import { AddItemComponent } from './add-item/add-item.component';
import { EditItemComponent } from './edit-item/edit-item.component';
import { DeleteItemComponent } from './delete-item/delete-item.component';

const routes: Routes = [
  { path: 'items', redirectTo: 'item', pathMatch: 'full' },

  { path: 'items/:itemNumber/show', component: ShowItemComponent  },

  //{ path: 'Customer/:CustomerId/details', component: ShowCustomerComponent  },
  { path: 'items/add', component:AddItemComponent  },
  { path: 'items/:itemNumber/edit', component: EditItemComponent },
  { path: 'items/:itemNumber/delete', component: DeleteItemComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemRoutingModule { }
