import { Component, OnInit } from '@angular/core';
import { Product } from '../product/product';

@Component({
  selector: 'app-store-page',
  templateUrl: './store-page.component.html',
  styleUrls: ['./store-page.component.scss']
})
export class StorePageComponent implements OnInit {

  constructor(
    //storeProducts: Product[],
  ) { }

  ngOnInit(): void {
  }


}
