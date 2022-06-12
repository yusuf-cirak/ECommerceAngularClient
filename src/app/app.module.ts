import { UiModule } from './ui/ui.module';
import { AdminModule } from './admin/admin.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Geçişlerde hata vermemesi için import ediyoruz.

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, //
    ToastrModule.forRoot(),
    AppRoutingModule,
    NgxSpinnerModule,
    AdminModule,UiModule,
    HttpClientModule // HttpClientModule globally
  ],
  providers: [
    {provide:"baseUrl",useValue:"https://localhost:7079/api",multi:true} //
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
