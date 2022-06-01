import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'indianCurrency',
})
export class IndianCurrencyPipe implements PipeTransform {
  transform(value: any): string {
    if (value) {
      return Number(value).toLocaleString('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 2,
      });
    } else {
      return Number(0).toLocaleString('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 2,
      });
    }
  }
}
