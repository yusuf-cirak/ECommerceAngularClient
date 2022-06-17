import { BaseDialog } from '../../base/base-dialog';
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.scss']
})
export class DeleteDialogComponent extends BaseDialog<DeleteDialogComponent> {
  constructor(
     dialogRef: MatDialogRef<DeleteDialogComponent>,
     @Inject(MAT_DIALOG_DATA) data: DeleteState,
  ) {super(dialogRef,data)}
}
// Mat dialog data kullanılacağı yerde inject edilir.

export enum DeleteState{
  No,Yes
}
