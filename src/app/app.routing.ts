import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/** components */
import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from './products/products.component';
import { ServicesComponent } from './services/services.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    { path: '', redirectTo: '/Home', pathMatch: 'full' },
    { path: 'Contacts', component: ContactComponent },
    { path: 'Products', component: ProductsComponent },
    { path: 'Services', component: ServicesComponent },
    { path: 'Home', component: HomeComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})

export class AppRoutingModule { }
