import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataserviceService } from 'src/app/dataservice.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor(private router: Router, private dataservice: DataserviceService) { }

  ngOnInit(): void {
  }

  onBack(){
    // this.router.
    this.router.navigate(['/app-begin']);

  }

  onSubmit() {
    this.dataservice.setData([{
      id: 1,
      name: "user",
      description: "some description"
    }]);
    this.router.navigate(['/app-home']);

  }
}
