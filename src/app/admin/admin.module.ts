import { ComponentsModule } from './layout/components/components.module';
import { LayoutModule } from './layout/layout.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LayoutModule,
    ComponentsModule // layout harici diğer componentlerimizi import etmeliyiz.
  ],
  exports:[
    LayoutModule // Layout modülünü başka yerde kullanmak için export etmemiz lazım.
  ]
})
export class AdminModule { }
