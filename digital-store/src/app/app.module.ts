import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StorePageComponent } from './store-page/store-page.component';
import { ProductBoxComponent } from './product/product-box/product-box.component';
import { FormsModule } from '@angular/forms';
import { ProductPageComponent } from './product/product-page/product-page.component';

@NgModule({
  declarations: [
    AppComponent,
    StorePageComponent,
    ProductBoxComponent,
    ProductPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ProductBoxComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
