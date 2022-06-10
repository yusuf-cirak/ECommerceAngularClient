import { RouterModule } from '@angular/router';
import { ProductsModule } from './products/products.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { CustomersModule } from './customers/customers.module';
import { OrdersModule } from './orders/orders.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule, //
    DashboardModule, //
    OrdersModule,CustomersModule,ProductsModule // Bütün component modüllerinin buraya import edilmesi gerek.
  ]
})
export class ComponentsModule { }
