import { Component, OnInit } from '@angular/core';

import {  FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Item } from 'src/app/Models/item-model';
import { ItemService } from 'src/app/services/item.service';



@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {
  id!: number;
  item!:Item;
  items:Item[]=[];
  editForm: any;

  constructor(public ItemService: ItemService,
   
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder)
     {
      this.editForm = this.formBuilder.group({
       
        itemNumber: [''],
        itemName: ['', Validators.required],
        color: [''],
        value: [''],
       
      });
      }
  
      

       ngOnInit(): void {
        this.id = this.route.snapshot.params['itemNumber'];
        this.ItemService.getItems().subscribe((data: Item[]) => {
          this.items = data;
          
        });
        

        this.ItemService.getItem(this.id).subscribe((data: Item) => {
          this.item= data;
          this.editForm.patchValue(data);
        });
      }
        
        onSubmit(formData: { value: any; }) {
        this.ItemService.updateItem(this.id,formData.value).subscribe(res => {
          this.router.navigateByUrl('items');
        });
        }


}
