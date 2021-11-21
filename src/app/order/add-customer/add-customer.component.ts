import { Component, OnInit } from '@angular/core';

import {  FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from 'src/app/Models/order-model';
import { OrderService } from 'src/app/services/order.service';
import { Item } from 'src/app/Models/item-model';
import { ItemService } from 'src/app/services/item.service';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  order:Order[]=[];
  createForm: any;

  formData:any ;
  itemList!: Item[];
  isValid: boolean = true;


  constructor(
    public OrderService: OrderService,
   
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder)
     {
      this. createForm = this.formBuilder.group({
       
        orderDate: ['', Validators.required],
        customerId: [''],
        itemNumber: 0,
        orderAddress: [''],
       
        quantity:0,
        
       
      });
      }

      updatePrice(ctrl: any) {
        if (ctrl.selectedIndex == 0) {
          this.formData.price = 0;
        
        }
        else {
          this.formData.price = this.itemList[ctrl.selectedIndex - 1].value;
         
        }
        this.updateTotal();
      }
    
      updateTotal() {
        this.formData.total = parseFloat((this.formData.quantity * this.formData.price).toFixed(2));
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



//import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";


// import { Component, Inject, OnInit } from '@angular/core';
// import {MAT_DIALOG_DATA} from '@angular/material/dialog'

// import {  FormBuilder, Validators } from '@angular/forms';
// import { ActivatedRoute, Router } from '@angular/router';
// import { Order } from 'src/app/Models/order-model';
// import { OrderService } from 'src/app/services/order.service';
// import { Item } from 'src/app/Models/item-model';
// import { ItemService } from 'src/app/services/item.service';
// import { NgForm } from '@angular/forms';

// @Component({
//     selector: 'app-add-customer',
//     templateUrl: './add-customer.component.html',
//     styleUrls: ['./add-customer.component.css']
//   })
// export class AddCustomerComponent implements OnInit {
//   formData!: Order[];
//   itemList!: Item[];
//   isValid: boolean = true;
//   order!: Order[];
//   createForm!: any;
//   dialogRef: any;

//   constructor(
//     @Inject(MAT_DIALOG_DATA) public public data: {name: string},
//         public OrderService: OrderService,
       
//         private route: ActivatedRoute,
//         private router: Router,
//         private formBuilder: FormBuilder)
//          {
//           this. createForm = this.formBuilder.group({
           
//             orderDate: ['', Validators.required],
//             customerId: [''],
//             itemNumber: 0,
//             orderAddress: [''],
//             price:0,
//             quantity:0,
//             total:0,
           
//           });
//           }
//           ngOnInit(): void {
//                     this.OrderService.getOrders().subscribe((data: Order[]) => {
//                       this.order= data;
                      
//                     });
//                     }
                    

//   updatePrice(formData: Order) {
//     if (formData.selectedIndex == 0) {
//       this.formData. = 0;
    
//     }
//     else {
//       this.formData.price = this.itemList[ctrl.selectedIndex - 1].value;
     
//     }
//     this.updateTotal();
//   }

//   updateTotal() {
//     this.formData.total = parseFloat((this.formData.quantity * this.formData.price).toFixed(2));
//   }

//   onSubmit(formData: { value: any; }) {
//               this.OrderService.createOrder(formData.value).subscribe(res => {
//                 this.router.navigateByUrl('orders');
//               });
//               }
    

//   validateForm(formData: Order) {
//     this.isValid = true;
//     if (formData.itemNumber == 0)
//       this.isValid = false;
//     else if (formData.quantity == 0)
//       this.isValid = false;
//     return this.isValid;
//   }

// }
// function MAT_DIALOG_DATA(MAT_DIALOG_DATA: any) {
//   throw new Error('Function not implemented.');
// }

