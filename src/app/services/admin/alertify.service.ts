import { Injectable } from '@angular/core';

declare var alertify:any;

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }

   message(message:string,options:Partial<AlertifyOptions>){ // Custom alertify service
    alertify.set('notifier','delay',options.delay) // delay süresini ayarlarız, default olarak 3
    alertify.set('notifier','position',options.position) // notifier pozisyonu, default olarak bottomleft
    const msg=alertify[options.messageType](message);

    if(options.dismisOthers) msg.dismissOthers(); // Sadece tek bir notification çıkmasına izin verir.
  }

  dissmisAll(){ // Bütün notification'ları siler.
    alertify.dissmisAll();
  }
}



export class AlertifyOptions{
  messageType:AlertifyMessageType=AlertifyMessageType.Message;
  position:AlertifyPosition=AlertifyPosition.BottomLeft;
  delay:number=3;
  dismisOthers:boolean=false;
}

export enum AlertifyMessageType{
  Error='error',
  Message='message',
  Success='success',
  Warning='warning'
}

export enum AlertifyPosition{
  TopCenter='top-center',
  TopRight='top-right',
  TopLeft='top-left',
  BottomRight='bottom-right',
  BottomLeft='bottom-left',
  BottomCenter='bottom-center'
}
