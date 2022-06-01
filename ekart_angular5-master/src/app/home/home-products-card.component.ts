import { Component, Input, OnInit } from '@angular/core';

import { DataService } from '../data.service';
import { Product } from '../products/product';

@Component({
  selector: 'app-home-products-card',
  templateUrl: './home-products-card.component.html'
})
export class HomeProductsCardComponent implements OnInit {
  @Input() type: string;
  products: Product[];

  constructor(private ds: DataService) {}

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.ds.getProducts().subscribe(products => {
      this.products = products;
    });
  }
}
