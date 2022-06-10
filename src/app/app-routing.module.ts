import { HomeComponent } from './ui/components/home/home.component';
import { DashboardComponent } from './admin/components/dashboard/dashboard.component';
import { LayoutComponent } from './admin/layout/layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
//  Admin layout
  {path:"admin",component:LayoutComponent,children:[
    {path:"",component:DashboardComponent}, // http://localhost:3000/admin => Ana sayfa niteliğindeki component'ler bu şekilde tanımlanmalı.
    {path:"customers",loadChildren:()=>import('./admin/components/customers/customers.module').then(module=>module.CustomersModule)},
    // http://localhost:3000/admin/customers/ (CustomerModule'de tanımlanan path'ler)
    {path:"orders",loadChildren:()=>import('./admin/components/orders/orders.module').then(module=>module.OrdersModule)},
    // http://localhost:3000/admin/orders/ (CustomerModule'de tanımlanan path'ler)

    {path:"products",loadChildren:()=>import('./admin/components/products/products.module').then(module=>module.ProductsModule)},
    // http://localhost:3000/admin/products/ (CustomerModule'de tanımlanan path'ler)
  ]},

// Ana layout
{path:"",component:HomeComponent},
{path:"basket",loadChildren:()=>import('./ui/components/baskets/baskets.module').then(module=>module.BasketsModule)},
{path:"products",loadChildren:()=>import('./ui/components/products/products.module').then(module=>module.ProductsModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
