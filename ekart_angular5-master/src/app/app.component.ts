import { Component } from '@angular/core';

import { CartService } from './cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private cs: CartService) {}

  changeOfRoutes() {
    this.cs.updateCartBadge();
  }
}
