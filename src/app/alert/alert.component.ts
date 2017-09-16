import { Component, OnInit } from '@angular/core';
import { AlertService } from '../_services/index';

@Component({
  selector: 'pja-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  message: any;

  constructor(private alertService: AlertService) { }

  ngOnInit() {

    this.alertService.getMessage().subscribe(message => { this.message = message; });
  }

}
