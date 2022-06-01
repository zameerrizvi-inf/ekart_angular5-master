import { Component, OnInit } from '@angular/core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import { CartService } from '../../cart.service';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  faShoppingCart = faShoppingCart;
  cartBadge = 0;
  productTypes: string[];

  constructor(private cs: CartService, private ds: DataService) {}

  ngOnInit() {
    this.cs.getCartLength().subscribe(len => {
      this.cartBadge = len;
    });
    this.productTypes = this.ds.productTypes;
  }
}
