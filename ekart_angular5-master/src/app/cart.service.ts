import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Subject } from 'rxjs/Subject';

import { Injectable } from '@angular/core';

import { Cart, CartItem } from './cart/cart';
import { DataService } from './data.service';
import { Product } from './products/product';
import { map, filter } from 'rxjs/operators';

@Injectable()
export class CartService {
  private cartLength: Subject<number> = new Subject();

  constructor(private ds: DataService) {}

  getCartItems(): Observable<CartItem[]> {
    const cart: Cart[] = JSON.parse(localStorage.getItem('cart')) || [];

    const cartItems = this.ds.getProducts().pipe(
      map(products =>
        cart.map(c => {
          const product = products.find(p => p.id === c.productId);
          const cartItem: CartItem = { quantity: c.quantity, ...product };
          return cartItem;
        }),
      ),
    );

    return cartItems;
  }

  addToCart(product: Product, quantity: number) {
    const cart: Cart[] = JSON.parse(localStorage.getItem('cart')) || [];

    const index = cart.findIndex(c => c.productId === product.id);

    if (index >= 0) {
      cart[index].quantity += quantity;
    } else {
      cart.push({ productId: product.id, quantity });
    }

    localStorage.setItem('cart', JSON.stringify(cart));

    this.updateCartBadge();
  }

  deleteCartItem(productId: number): Observable<number> {
    const cart: Cart[] = JSON.parse(localStorage.getItem('cart'));

    const index = cart.findIndex(c => c.productId === productId);

    cart.splice(index, 1);

    localStorage.setItem('cart', JSON.stringify(cart));

    this.updateCartBadge();

    return of(index);
  }

  changeCartItemQuantity(
    productId: number,
    changeQty: number,
  ): Observable<number> {
    const cart: Cart[] = JSON.parse(localStorage.getItem('cart'));

    const index = cart.findIndex(c => c.productId === productId);

    cart[index].quantity += changeQty;

    localStorage.setItem('cart', JSON.stringify(cart));

    return of(index);
  }

  getCartLength(): Subject<number> {
    return this.cartLength;
  }

  updateCartBadge() {
    const cart: Cart[] = JSON.parse(localStorage.getItem('cart')) || [];

    this.cartLength.next(cart.length);
  }
}
