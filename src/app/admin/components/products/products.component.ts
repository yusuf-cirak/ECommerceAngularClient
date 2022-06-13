import { HttpClientService } from './../../../services/common/http-client.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Component, OnInit } from '@angular/core';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { CreateProduct } from 'src/app/contracts/create_product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent extends BaseComponent implements OnInit {

  constructor(spinner:NgxSpinnerService,private httpClientService:HttpClientService) {
    super(spinner)
   }

  ngOnInit(): void {
   /*this.showSpinner(SpinnerType.BallScaleMultiple)
    this.httpClientService.get<Product[]>({controller:'tests',action:'getallproducts'}).subscribe(data=>console.log(data))
    this.httpClientService.post<Product>({controller:'tests',action:'addproduct'},{name:'clientdenemekalem',stock:10,price:10}).subscribe((data)=>console.log(data));
    this.httpClientService.post<Product>({controller:'tests',action:'addproduct'},{name:'clientdenemedefter',stock:10,price:15}).subscribe((data)=>console.log(data))
    this.httpClientService.put({controller:'tests',action:'updateproduct'},{ product nesnen ile eşleşmediği için hata verdi
      id:'4702b8b4-5867-400d-8a9b-6165a8eb5300',
      name:'updatedproductdeneme',
      stock:15,
      price:200
    }).subscribe(data=>console.log(data))

    this.httpClientService.delete({controller:'tests',action:'deleteproduct'},'4391f1ba-27f9-47ee-b98c-9c09976613a2').subscribe(()=>console.log('ürün silindi')) */


  }

}
