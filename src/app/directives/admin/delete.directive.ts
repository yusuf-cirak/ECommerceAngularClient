import { HttpErrorResponse } from '@angular/common/http';
import { AlertifyService, AlertifyMessageType } from './../../services/admin/alertify.service';
import { HttpClientService } from './../../services/common/http-client.service';
import { DeleteDialogComponent, DeleteState } from './../../dialogs/delete-dialog/delete-dialog.component';
import { SpinnerType } from 'src/app/base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { Directive, ElementRef, HostListener, Input, Output, Renderer2, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

declare var $:any

@Directive({
  selector: '[appDelete]'
})
export class DeleteDirective {
  // Element ref:  Directive'i kullandığımız HTML element'i hangisiyle bize onu verecktir.
  // Renderer2: İlgili element ile ilgili manipülasyon yapabilmemizi sağlayan class.


  constructor(private element:ElementRef,private _renderer:Renderer2,private httpClientService:HttpClientService,private spinnerService:NgxSpinnerService,
    public dialog:MatDialog,private alertifyService:AlertifyService) {
    const img=_renderer.createElement('img')
    img.setAttribute('src','../../../assets/remove_icon.png')
    img.setAttribute('style','cursor:pointer;')
    img.width=25
    img.height=25
    _renderer.appendChild(element.nativeElement,img)
  }

  @Input() id:string
  @Input() controller:string
  @Input() action:string
  @Output() callback:EventEmitter<any>=new EventEmitter()

  // onclick fonksiyonu @HostListener declarator'ü sayesinde directive'in kullanıldığı element'e click edildiğinde çalışacak
  @HostListener('click')
     onclick(){
    this.openDialog(async()=>{
      this.spinnerService.show(SpinnerType.BallAtom) // Spinner'ın kendi servisi, BaseComponent'te extend ettiğimiz değil.
    const td:HTMLTableCellElement=this.element.nativeElement
    await this.httpClientService.delete({action:this.action,controller:this.controller},this.id).subscribe(data=>{
      $(td.parentElement).fadeOut(1500,()=>{
      this.callback.emit(); // listcomoponent/getproducts
      this.alertifyService.message('Ürün başarıyla silindi',{dismissOthers:true,messageType:AlertifyMessageType.Success})
    });
    }),(errorResponse:HttpErrorResponse)=>{
      this.spinnerService.hide();
      this.alertifyService.message('Beklenmedik bir hata oluştu',{messageType:AlertifyMessageType.Error})
    }
    })

    // Spinner'ın yok olması için herhangi bir şey yazmamıza gerek yok çünkü oluşturduğumuz callback event'i getProducts'ı çağıracak
    // ve onclick fonksiyonumuzla ilgili hiçbir şey kalmayacak.
  }

  openDialog(afterClose:()=>void): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '250px',
      data: DeleteState.Yes,
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result==DeleteState.Yes){
        afterClose();
      }

    });
  }





}
