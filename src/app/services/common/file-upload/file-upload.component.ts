import { AlertifyMessageType, AlertifyService } from './../../admin/alertify.service';
import { HttpClientService } from './../http-client.service';
import { Component, Input } from '@angular/core';
import { NgxFileDropEntry } from 'ngx-file-drop';
import { HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
})
export class FileUploadComponent {
  constructor(private httpClientService:HttpClientService,private alertifyService:AlertifyService){}
  public files: NgxFileDropEntry[];

  @Input() options:Partial<FileUploadOptions>

  public selectedFiles(files: NgxFileDropEntry[]) {
    this.files = files;
    const fileData:FormData=new FormData();

    for (const file of files){
      (file.fileEntry as FileSystemFileEntry).file((_file:File)=>{
        fileData.append(_file.name,_file,file.relativePath)
      })
    }

    this.httpClientService.post(
      {controller:this.options.controller,
        action:this.options.action,
        queryString:this.options.queryString,
        headers:new HttpHeaders({"responseType":"blob"})
    },fileData).subscribe(data=>{
     this.alertifyService.message(`${data} başarıyla yüklenmiştir.`,{messageType:AlertifyMessageType.Success})
    },(errorResponse:HttpErrorResponse)=>{
      this.alertifyService.message('Dosyalar yüklenirken beklenilmedik bir hata oluştur',{messageType:AlertifyMessageType.Error})
        })

  }
}

export class FileUploadOptions{
  controller?:string
  action?:string
  queryString?:string
  explanation?:string // Dosya nereye upload edilecek
  accept?:string // Kabul edilen dosya formatları

}
