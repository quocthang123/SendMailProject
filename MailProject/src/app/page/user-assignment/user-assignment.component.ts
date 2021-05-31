import { Component, OnInit } from '@angular/core';
import { NgbDate, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-user-assignment',
  templateUrl: './user-assignment.component.html',
  styleUrls: ['./user-assignment.component.scss']
})
export class UserAssignmentComponent implements OnInit {

  constructor() {
   }

  requestDate: any;
  today = new Date();
  

  ngOnInit(): void {

    this.requestDate = new NgbDate(this.today.getFullYear(), this.today.getMonth() + 1, this.today.getDate());
    console.log(this.requestDate);
    console.log();
   
  }

}
