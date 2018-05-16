import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


/**
 * Third party modules
 */
import { DatePipe, APP_BASE_HREF, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { ProductsComponent } from './products/products.component';
import { HeaderComponent } from './header/header.component';

/**
 * App routing module
 */
import { AppRoutingModule } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    HomeComponent,
    ServicesComponent,
    ProductsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
