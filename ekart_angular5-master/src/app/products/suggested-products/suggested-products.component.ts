import { Component, Input, OnInit } from '@angular/core';

import { DataService } from '../../data.service';
import { Product } from '../product';

@Component({
  selector: 'app-suggested-products',
  templateUrl: './suggested-products.component.html',
  styleUrls: ['./suggested-products.component.css'],
})
export class SuggestedProductsComponent {
  suggestedProducts: Product[] = [];

  @Input()
  set product(product: Product) {
    if (product) {
      this.ds.getProductsByType(product.type).subscribe(products => {
        this.suggestedProducts = products.filter(p => p.id !== product.id);
      });
    }
  }

  constructor(private ds: DataService) {}
}
