import { AlertifyMessageType, AlertifyService } from './../../../../services/admin/alertify.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { ListProduct } from './../../../../contracts/list_product';
import { ProductService } from './../../../../services/common/models/product.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent extends BaseComponent implements OnInit {

  constructor(spinner:NgxSpinnerService,private productService:ProductService,private alertifyService:AlertifyService) {
    super(spinner)
   }
  displayedColumns: string[] = ['name', 'price', 'stock','createdTime','updatedTime'];
  dataSource:MatTableDataSource<ListProduct>=null
  @ViewChild(MatPaginator) paginator:MatPaginator

  async pageChanged(){
    await this.getProducts();
  }


  async getProducts(){
    this.showSpinner(SpinnerType.BallAtom)
   const allProducts:{totalCount:number,products:ListProduct[]} =await this.productService.read(this.paginator?this.paginator.pageIndex:0,
    this.paginator?this.paginator.pageSize:5,()=>this.hideSpinner(SpinnerType.BallAtom),
    errorMessage=>this.alertifyService.message(errorMessage,{messageType:AlertifyMessageType.Error}))
    this.dataSource=new MatTableDataSource<ListProduct>(allProducts.products);
    this.paginator.length=allProducts.totalCount
  }



   ngOnInit():void  {
    this.getProducts();
    }

}
