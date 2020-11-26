import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ICalendar } from 'src/app/interfaces/calendar.interface';
import { CreateCalendarComponent } from './popup/create-calendar/create-calendar.component';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  appointment: ICalendar[]=[];
  room=[
    {id:1,name:'Room 1'},
    {id:2,name:'Room 2'},
    {id:3,name:'Room 3'},
    {id:4,name:'Room 4'},
]
  calendarOptions: CalendarOptions = {
    buttonText: {
      today: 'Today'
    },
    // datesSet: this.handleDateChange.bind(this),
    // dateClick: this.handleDateClick.bind(this),
    initialView: 'dayGridMonth', // bind is important!
    selectable: true,
    events: [],
    dayMaxEventRows: 2,
    //height: 500
  };

  constructor(
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
  }

  openCalendar(){
    this.modalService.open(CreateCalendarComponent);
  }

}
