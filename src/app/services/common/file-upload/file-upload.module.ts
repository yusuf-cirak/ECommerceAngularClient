import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { FileUploadDialogComponent } from './../../../dialogs/file-upload-dialog/file-upload-dialog.component';
import { FileUploadComponent } from './file-upload.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxFileDropModule } from 'ngx-file-drop';



@NgModule({
  declarations: [
    FileUploadComponent,
    FileUploadDialogComponent
  ],
  imports: [
    CommonModule,
    NgxFileDropModule,
    MatDialogModule,MatButtonModule // dialog module ile file upload'ın uyumlu çalışması için

  ],
  exports:[FileUploadComponent] // file upload selector'ını
})
export class FileUploadModule { }
