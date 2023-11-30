import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  { path: 'about-us', pathMatch: 'full', component: AboutUsComponent},
  { path: '', pathMatch: 'full', component: HomeComponent},
  { path: 'dashboard', pathMatch: 'full', component: DashboardComponent},
  { path: 'products', pathMatch: 'full', component: ProductsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
