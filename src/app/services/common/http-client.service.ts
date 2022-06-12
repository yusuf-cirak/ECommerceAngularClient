import { Inject, Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient:HttpClient,@Inject("baseUrl") private baseUrl:string) { }

  private url(requestParameter:Partial<RequestParameters>,idParam?:string){
    // Her istekte url ayarlamamız gerek. O yüzden kod tekrarı yapmamak için fonksiyon yazıyoruz.
    let url:string='';
    if(requestParameter.fullEndPoint) url=requestParameter.fullEndPoint; //
    else{
      url=`${requestParameter.baseUrl?requestParameter.baseUrl:this.baseUrl}/${requestParameter.controller}
      ${requestParameter.action?`/${requestParameter.action}`:''}` // set url with controller/actions

       /* 1. ternany operator : baseUrl verilmiş mi? verildiyse baseUrl değişti demektir, verileni dön. Verilmediyse provider'daki baseUrl'yi dön.
          2. ternany operator : req parameter'da action var mı? Varsa o action'ı dön, yoksa boş string dön.
       Burada dikkat edilmesi gereken req parameter.controller yazdıktan sonra / koymadık. Çünkü action olabilir veya olmayabilir, yani duruma göre konulacak.
       Bundan dolayı req parameter.action'ı dönüyoruz.
    */
    url+=`${idParam?`/${idParam}`:''}${requestParameter.queryString?`?${requestParameter.queryString}`:''}`
    /*
    1. ternany operator: id değeri varsa /id şeklinde endpoint'i genişlet, yoksa boş string dön
    2. ternany operator: queryString varsa ?queryString şeklinde dön, yoksa boş string dön
    */
    }
    return url;
  }

  get<T>(requestParameter:Partial<RequestParameters>,id?:string):Observable<T>{
    return this.httpClient.get<T>(this.url(requestParameter,id),{headers:requestParameter.headers})
  }

  post<T>(requestParameter:Partial<RequestParameters>,body:Partial<T>): Observable<T>{
    return this.httpClient.post<T>(this.url(requestParameter),body,{headers:requestParameter.headers})
  }

  put<T>(requestParameter:Partial<RequestParameters>,body:Partial<T>):Observable<T>{
    return this.httpClient.put<T>(this.url(requestParameter),body,{headers:requestParameter.headers})
  }
  delete(requestParameter:Partial<RequestParameters>,id:string){
    return this.httpClient.delete(this.url(requestParameter,id))
  }

}




export class RequestParameters{
  // API controller, action
  controller?:string; // API Controller
  action?:string;

  // Http header,query string, baseUrl
  queryString?:string
  headers:HttpHeaders;
  baseUrl?:string

  // Other services (might have different routes)
  fullEndPoint?:string // Dış dünyayla iletişime geçmemiz gerekebilir, dış dünyadaki servisin route'ı bizimkiyle uyuşmayabilir.
}
