import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import{MatFormFieldModule} from '@angular/material/form-field';



import { CustomerComponent } from './customer/customer.component';
import { OrderComponent } from './order/order.component';
import { ItemComponent } from './item/item.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';


import { CustomerService } from './services/customer.service';
import { ItemService } from './services/item.service';
import { OrderService } from './services/order.service';

import { CustomerModule } from './customer/customer.module';
import { ItemModule } from './item/item.module';
import { OrderModule } from './order/order.module';





@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    
    OrderComponent,
    
     ItemComponent,
    
    HomeComponent ,
    NavbarComponent
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSliderModule,CustomerModule,ItemModule,OrderModule,
    BrowserAnimationsModule,MatInputModule,MatTableModule,MatIconModule,MatButtonModule, FormsModule,HttpClientModule,
    FormsModule, 
    RouterModule.forRoot([
      // { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'customer', component: CustomerComponent },
      { path: 'item', component: ItemComponent },
      { path: 'order', component: OrderComponent },
    ]) 
  ],
  exports: [
    MatFormFieldModule,
    MatInputModule,
  ],

  providers: [ CustomerService,ItemService, OrderService],
  bootstrap: [AppComponent],
  entryComponents: []



})
export class AppModule { }
