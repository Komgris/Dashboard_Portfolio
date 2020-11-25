import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-create-calendar',
  templateUrl: './create-calendar.component.html',
  styleUrls: ['./create-calendar.component.css']
})
export class CreateCalendarComponent implements OnInit {

  constructor(
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit(): void {
  }

}
