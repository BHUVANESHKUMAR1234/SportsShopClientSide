import { Component, OnInit } from '@angular/core';
import { Item } from '../Models/item-model';
import { ItemService } from '../services/item.service'; 

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  
  items: Item[] = [];

  constructor(public ItemService: ItemService) { }

  ngOnInit(): void {
    this.ItemService.getItems().subscribe((data: Item[]) => {
      this.items = data;
    });
  }

  deleteItem(id: number) {
    this.ItemService.deleteItem(id).subscribe(res => {
      this.items = this.items.filter(item => item.itemNumber!== id);
    });
  }
  

}






