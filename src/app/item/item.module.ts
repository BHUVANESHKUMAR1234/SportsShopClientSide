import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import{ReactiveFormsModule} from '@angular/forms';

import { ItemRoutingModule } from './item-routing.module';

import { ShowItemComponent } from './show-item/show-item.component';
import { AddItemComponent } from './add-item/add-item.component';
import { EditItemComponent } from './edit-item/edit-item.component';
import { DeleteItemComponent } from './delete-item/delete-item.component';


@NgModule({
  declarations: [ShowItemComponent,AddItemComponent, EditItemComponent,DeleteItemComponent],
  imports: [
    CommonModule,
    ItemRoutingModule,ReactiveFormsModule
  ]
})
export class ItemModule { }
