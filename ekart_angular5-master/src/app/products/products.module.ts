import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { LayoutModule } from '../layout/layout.module';
import { InputFocusDirective } from './input-focus.directive';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { ProductsRoutingModule } from './products-routing.module';
import { SuggestedProductsComponent } from './suggested-products/suggested-products.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ProductsRoutingModule,
    LayoutModule,
    FontAwesomeModule,
  ],
  declarations: [
    ProductComponent,
    ProductListComponent,
    ProductDetailComponent,
    SuggestedProductsComponent,
    ProductFormComponent,
    InputFocusDirective,
  ],
})
export class ProductsModule {}
