import { CreateProduct } from './../../../contracts/create_product';
import { HttpClientService } from './../http-client.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClientService:HttpClientService) { }


  create(product:CreateProduct,successCallback?:any){
    this.httpClientService.post({controller:'tests',action:'addproduct'},product).subscribe(()=>successCallback())

  }
}
