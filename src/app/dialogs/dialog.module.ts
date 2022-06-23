import { FileUploadModule } from './../services/common/file-upload/file-upload.module';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";



@NgModule({
  declarations:[DeleteDialogComponent],
  imports:[
    CommonModule,
    MatDialogModule,MatButtonModule, // Button css'i için
    FileUploadModule
  ]
})

export class DialogModule{}
