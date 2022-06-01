import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';
import { Product } from '../products/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  productTypes: string[];
  products: Product[];

  constructor(private ds: DataService) {
    this.productTypes = ds.productTypes;
  }

  ngOnInit() {}
}
