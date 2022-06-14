import { AlertifyMessageType, AlertifyPosition, AlertifyService } from './../../../../services/admin/alertify.service';
import { BaseComponent, SpinnerType } from './../../../../base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { CreateProduct } from './../../../../contracts/create_product';
import { ProductService } from './../../../../services/common/models/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent extends BaseComponent implements OnInit {

  constructor(spinner:NgxSpinnerService,private productService:ProductService,private alertifyService:AlertifyService) {
    super(spinner)
  }

  ngOnInit(): void {
  }
  create(name:HTMLInputElement,stock:HTMLInputElement,price:HTMLInputElement){
    const createProduct:CreateProduct=new CreateProduct();
    this.showSpinner(SpinnerType.BallSpinClockwiseFadeRotating)
    createProduct.name=name.value;
    createProduct.price=parseFloat(price.value)
    createProduct.stock=parseInt(stock.value)

    this.productService.create(createProduct,()=>{
      this.hideSpinner(SpinnerType.BallSpinClockwiseFadeRotating)
      this.alertifyService.message('Ürün başarıyla kaydedildi',{dismissOthers:true,delay:3,messageType:AlertifyMessageType.Success,position:AlertifyPosition.TopRight})
    },errorMessage=>{
      this.alertifyService.message(errorMessage,{dismissOthers:true,messageType:AlertifyMessageType.Error,position:AlertifyPosition.TopRight});
    })

  }

}

