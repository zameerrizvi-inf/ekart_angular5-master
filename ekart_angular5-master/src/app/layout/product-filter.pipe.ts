import { Pipe, PipeTransform } from '@angular/core';

import { Product } from '../products/product';

@Pipe({
  name: 'productFilter',
})
export class ProductFilterPipe implements PipeTransform {
  transform(products: Product[], type: string): Product[] {
    if (!products || !type) {
      return products;
    }
    return products.filter(p => p.type === type);
  }
}
