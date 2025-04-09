import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './common/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { ProductsComponent } from './pages/products/products.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },
  { path: 'About', component: AboutComponent },
  { path: 'Contact-us', component: ContactusComponent },
  { path: 'Our-products',component:ProductsComponent },
  
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
