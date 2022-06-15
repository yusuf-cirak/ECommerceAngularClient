import { SpinnerType } from 'src/app/base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { ProductService } from './../../services/common/models/product.service';
import { Directive, ElementRef, HostListener, Input, Output, Renderer2, EventEmitter } from '@angular/core';

declare var $:any

@Directive({
  selector: '[appDelete]'
})
export class DeleteDirective {
  // Element ref:  Directive'i kullandığımız HTML element'i hangisiyle bize onu verecktir.
  // Renderer2: İlgili element ile ilgili manipülasyon yapabilmemizi sağlayan class.


  constructor(private element:ElementRef,private _renderer:Renderer2,private productService:ProductService,private spinnerService:NgxSpinnerService) {
    const img=_renderer.createElement('img')
    img.setAttribute('src','../../../assets/remove_icon.png')
    img.setAttribute('style','cursor:pointer;')
    img.width=25
    img.height=25
    _renderer.appendChild(element.nativeElement,img)
  }

  @Input() id:string
  @Output() callback:EventEmitter<any>=new EventEmitter()

  // onclick fonksiyonu @HostListener declarator'ü sayesinde directive'in kullanıldığı element'e click edildiğinde çalışacak
  @HostListener('click')
  async onclick(){
    this.spinnerService.show(SpinnerType.BallAtom) // Spinner'ın kendi servisi, BaseComponent'te extend ettiğimiz değil.
    const td:HTMLTableCellElement=this.element.nativeElement
    await this.productService.delete(this.id)
    $(td.parentElement).fadeOut(1500,()=>this.callback.emit());
    // Spinner'ın yok olması için herhangi bir şey yazmamıza gerek yok çünkü oluşturduğumuz callback event'i getProducts'ı çağıracak
    // ve onclick fonksiyonumuzla ilgili hiçbir şey kalmayacak.
  }
}
