import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  appointment=[
    {topic: 'Test1' ,datestart:'',dateFinish:''},
    {topic: 'Test2' ,datestart:'',dateFinish:''},
    {topic: 'Test3' ,datestart:'',dateFinish:''},
    {topic: 'Test4' ,datestart:'',dateFinish:''},
    {topic: 'Test5' ,datestart:'',dateFinish:''},
  ]
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

  constructor() { }

  ngOnInit(): void {
  }

}
