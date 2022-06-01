import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { ProductFilterPipe } from './product-filter.pipe';
import { RouterModule } from '@angular/router';
import { IndianCurrencyPipe } from './indian-currency.pipe';

@NgModule({
  imports: [CommonModule, FontAwesomeModule, RouterModule],
  declarations: [
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    ProductFilterPipe,
    IndianCurrencyPipe,
  ],
  exports: [
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    ProductFilterPipe,
    IndianCurrencyPipe,
  ],
})
export class LayoutModule {}
