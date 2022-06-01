import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LayoutModule } from '../layout/layout.module';
import { HomeProductsCardComponent } from './home-products-card.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [CommonModule, HomeRoutingModule, LayoutModule],
  declarations: [HomeComponent, HomeProductsCardComponent],
  providers: []
})
export class HomeModule {}
