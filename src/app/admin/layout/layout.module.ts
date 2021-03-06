import { ComponentsModule } from './components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { RouterModule } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';



@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule, // component modüllerini import etmeliyiz.
    RouterModule, // router-outlet ile route işlemleri yapabilmek için RouterModule import ediyoruz.
    MatSidenavModule // Material sidenav
  ],
  exports:[
    LayoutComponent // layout component'i kullanacağımız için export etmeliyiz.
  ]
})
export class LayoutModule { }
