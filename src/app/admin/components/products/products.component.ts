import { ListComponent } from './list/list.component';
import { HttpClientService } from './../../../services/common/http-client.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Component, OnInit, ViewChild } from '@angular/core';
import { BaseComponent } from 'src/app/base/base.component';
import { CreateProduct } from 'src/app/contracts/create_product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent extends BaseComponent implements OnInit {

  constructor(spinner:NgxSpinnerService) {
    super(spinner)
   }

   @ViewChild(ListComponent) listComponent:ListComponent;

   createdProduct(createdProduct:CreateProduct){
    this.listComponent.getProducts();
   }

  ngOnInit(): void {
  }

}
