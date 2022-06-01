import { Observable } from 'rxjs/Observable';
import { switchMap } from 'rxjs/operators';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { CartService } from '../../cart.service';
import { DataService } from '../../data.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  product: Product;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private ds: DataService,
    private cs: CartService,
  ) {}

  ngOnInit() {
    this.route.paramMap
      .pipe(
        switchMap((param: ParamMap) =>
          this.ds.getProductById(+param.get('id')),
        ),
      )
      .subscribe(product => {
        this.product = product;
      });
  }

  addToCart(qty: number) {
    this.cs.addToCart(this.product, +qty);
  }

  trackByFn(index, item) {
    return index;
  }
}
