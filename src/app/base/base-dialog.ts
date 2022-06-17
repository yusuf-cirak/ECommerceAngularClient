import { MatDialogRef } from "@angular/material/dialog";

export class BaseDialog<DialogComponent> {


  constructor(public dialogRef:MatDialogRef<DialogComponent>,
     public data:any){}



  close(){
    this.dialogRef.close();
  }
}
