import { ComponentsModule } from './components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';



@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule // component modüllerini import etmeliyiz.
  ],
  exports:[
    LayoutComponent // layout component'i kullanacağımız için export etmeliyiz.
  ]
})
export class LayoutModule { }
