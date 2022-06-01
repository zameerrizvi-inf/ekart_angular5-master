import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { LayoutModule } from '../layout/layout.module';
import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart/cart.component';

@NgModule({
  imports: [FontAwesomeModule, CommonModule, CartRoutingModule, LayoutModule],
  declarations: [CartComponent],
})
export class CartModule {}
