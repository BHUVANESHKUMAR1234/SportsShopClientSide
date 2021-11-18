import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from 'src/app/Models/item-model';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-show-item',
  templateUrl: './show-item.component.html',
  styleUrls: ['./show-item.component.css']
})
export class ShowItemComponent implements OnInit {

  id!: number;
  item!:Item ;

  constructor(
    public ItemService: ItemService,
    private route: ActivatedRoute,
    private router: Router
    
  ) {this.id = history.state.data;
    console.log(this.id); }
 
  ngOnInit(): void {
    this.id = this.route.snapshot.params['itemNumber'];
    
    this.ItemService.getItem(this.id).subscribe((data: Item) => {
      this.item = data;
      console.log(data)
    });
  }

}
