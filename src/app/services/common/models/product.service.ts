import { ListProduct } from './../../../contracts/list_product';
import { CreateProduct } from './../../../contracts/create_product';
import { HttpClientService } from './../http-client.service';
import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { firstValueFrom, Observable } from 'rxjs';
import { UpdateProduct } from 'src/app/contracts/update_product';

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


  async delete(id:string){
    const deleteObservable:Observable<any>=this.httpClientService.delete({controller:'tests',action:'deleteproduct'},id)

    await firstValueFrom(deleteObservable)
  }

  async update(product:Partial<UpdateProduct>){
    const updateObservable:Observable<UpdateProduct>=this.httpClientService.put<UpdateProduct>({controller:'tests',action:'updateproduct'},{id:product.id,name:product.name,price:product.price,stock:product.stock})

    await firstValueFrom(updateObservable)
  }
}
