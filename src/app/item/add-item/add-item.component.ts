import { Component, OnInit } from '@angular/core';

import {  FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Item } from 'src/app/Models/item-model';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  item:Item[]=[];
  createForm: any;

  constructor(
    public ItemService: ItemService,
   
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder)
     {
      this. createForm = this.formBuilder.group({
       
        itemName: ['', Validators.required],
        color: [''],
        value: [''],
       
      });
      }
  
      

       ngOnInit(): void {
        this.ItemService.getItems().subscribe((data: Item[]) => {
          this.item= data;
          
        });
        }
        
        onSubmit(formData: { value: any; }) {
          this.ItemService.createItem(formData.value).subscribe(res => {
            this.router.navigateByUrl('items');
          });
          }

}



