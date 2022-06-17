import { MatDialogRef } from '@angular/material/dialog';
import { BaseDialog } from './../../base/base-dialog';
import { Component } from '@angular/core';

@Component({
  selector: 'app-file-upload-dialog',
  templateUrl: './file-upload-dialog.component.html',
  styleUrls: ['./file-upload-dialog.component.scss']
})
export class FileUploadDialogComponent extends BaseDialog<FileUploadDialogComponent> {

  constructor(dialogRef:MatDialogRef<FileUploadDialogComponent>,data:FileUploadDialogState) {
    super(dialogRef,data)
   }

}

export enum FileUploadDialogState{
  Yes,No
}
