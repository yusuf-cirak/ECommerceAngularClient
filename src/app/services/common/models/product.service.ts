import { ListProduct } from './../../../contracts/list_product';
import { CreateProduct } from './../../../contracts/create_product';
import { HttpClientService } from './../http-client.service';
import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClientService:HttpClientService) { }


  create(product: CreateProduct, successCallBack?: () => void, errorCallBack?: (errorMessage: string) => void) {
    this.httpClientService.post({
      controller: "tests",action:'addproduct'
    }, product)
      .subscribe(result => {
        successCallBack();
      }, (errorResponse: HttpErrorResponse) => {
        let message = "";
        const _errorValues=(Object.values(errorResponse.error.errors))
        _errorValues.forEach(msg=>message+=`${msg}<br>`)
        errorCallBack(message);
      });
  }

 async read(page:number=0,size:number=5,successCallback?:()=>void,errorCallback?:(errorMessage:string)=>void):Promise<{totalCount:number,products:ListProduct[]}>{
  const promiseData:Promise<{totalCount:number,products:ListProduct[]}>= this.httpClientService.get<{totalCount:number,products:ListProduct[]}>({controller:'tests',action:'getallproducts',queryString:`page=${page}&size=${size}`})
  .toPromise()

  promiseData.then(d=>successCallback()).catch((error:HttpErrorResponse)=>errorCallback(error.message))
  return await promiseData;
  }
}
