import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { FileUploadDialogComponent } from './file-upload-dialog/file-upload-dialog.component';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";



@NgModule({
  declarations:[DeleteDialogComponent,FileUploadDialogComponent],
  imports:[
    CommonModule,
    MatDialogModule,
    MatButtonModule // Button css'i için
  ]

})

export class DialogModule{}
