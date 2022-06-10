import { NgxSpinnerService } from 'ngx-spinner';
import { AlertifyService, AlertifyMessageType, AlertifyPosition } from './../../../services/admin/alertify.service';
import { Component, OnInit } from '@angular/core';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent extends BaseComponent implements OnInit {

  constructor(private alertifyService:AlertifyService,spinner:NgxSpinnerService) {
    super(spinner)
   }

  ngOnInit(): void {
    this.alertifyService.message('asd',{})
    this.showSpinner(SpinnerType.BallAtom)

  }

}
