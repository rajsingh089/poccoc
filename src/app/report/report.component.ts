import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  constructor(private router: Router) { }

  datarecord: any;

  ngOnInit(): void {
  }

  onBack() {
    this.router.navigate(['/app-home'])

  }

}
