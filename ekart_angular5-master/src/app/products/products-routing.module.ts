import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';

const productRoutes: Routes = [
  {
    path: 'products',
    component: ProductComponent,
    children: [
      {
        path: 'type/:type',
        component: ProductListComponent,
        pathMatch: 'full',
      },
      {
        path: 'detail/:id',
        component: ProductDetailComponent,
        pathMatch: 'full',
      },
      {
        path: 'add',
        component: ProductFormComponent,
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(productRoutes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
