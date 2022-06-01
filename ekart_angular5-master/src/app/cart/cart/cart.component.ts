import { Component, OnInit } from '@angular/core';
import { faTrash, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

import { CartService } from '../../cart.service';
import { CartItem } from '../cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems: CartItem[];
  faTrash = faTrash;
  faPlus = faPlus;
  faMinus = faMinus;

  constructor(private cs: CartService) {}

  ngOnInit() {
    this.cs.getCartItems().subscribe(cartItems => {
      this.cartItems = cartItems;
    });
  }

  trackByFn(index: number, item: CartItem) {
    return item.id;
  }

  totalQuantity(): number {
    return this.cartItems.reduce((qty, item) => qty + item.quantity, 0);
  }

  totalCartCost(): number {
    return this.cartItems.reduce(
      (cost, item) => cost + item.quantity * item.price,
      0,
    );
  }

  deleteCartItem(id: number) {
    this.cs.deleteCartItem(id).subscribe(index => {
      this.cartItems.splice(index, 1);
    });
  }

  changeCartItemQuantity(id: number, change: number) {
    this.cs.changeCartItemQuantity(id, change).subscribe(i => {
      this.cartItems[i].quantity += change;

      if (this.cartItems[i].quantity === 0) {
        this.deleteCartItem(id);
      }
    });
  }
}
