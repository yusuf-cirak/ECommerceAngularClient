import { CustomToastrService, ToastrMessageType, ToastrPosition } from './services/ui/custom-toastr.service';
import { Component } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ETradeAngularClient';

  constructor(private toastrService:CustomToastrService){
    toastrService.message('merhaba','yusuf',{messageType:ToastrMessageType.Info,position:ToastrPosition.BottomLeft})
  }


}


