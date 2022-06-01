import { NgHttpLoaderModule } from 'ng-http-loader/ng-http-loader.module';

import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartService } from './cart.service';
import { CartModule } from './cart/cart.module';
import { DataService } from './data.service';
import { HomeModule } from './home/home.module';
import { LayoutModule } from './layout/layout.module';
import { ProductsModule } from './products/products.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgHttpLoaderModule,
    HomeModule,
    ProductsModule,
    CartModule,
    AppRoutingModule,
    LayoutModule,
  ],
  providers: [DataService, CartService],
  bootstrap: [AppComponent],
})
export class AppModule {}
