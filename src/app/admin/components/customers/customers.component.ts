import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from './../../../base/base.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent extends BaseComponent implements OnInit {

  constructor(spinner:NgxSpinnerService) {
  super(spinner)
   }

  ngOnInit(): void {
    this.showSpinner(SpinnerType.BallScaleMultiple)
  }

}
