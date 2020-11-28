import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';
import { Subscription } from 'rxjs';
import { ICalendar } from 'src/app/interfaces/calendar.interface';
import { Constants } from 'src/app/models/constants';
import { ReserveMeetingService } from 'src/app/services/reserve-meeting.service';
import { CreateCalendarComponent } from './popup/create-calendar/create-calendar.component';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  appointment: ICalendar[]=[];
  selectedRoom:string ='Room1';
  room= Constants.MEETING_ROOM;
  subscription: Subscription | undefined;
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
    private modalService: NgbModal,
    private reserveMeeting: ReserveMeetingService
  ) { }

  ngOnInit(): void {
    this.subscription = this.reserveMeeting.currentMeeting.subscribe(async list => {
      this.appointment = list[this.selectedRoom];
      this.listCalendar(list[this.selectedRoom]);
    });
  }

  openCalendar(){
    this.modalService.open(CreateCalendarComponent);
  }
  listCalendar(data:ICalendar[]){
    this.calendarOptions.events = data.map(x => {
      return { title: x.topic, start: this.changeFormat(x.datestart),end:this.changeFormat(x.dateFinish),backgroundColor:x.color }
    })
  }
  
  // handleDateChange(arg:any) {
  //   var date = moment(arg.view.title);
  //   this.month = +date.format('M');
  //   this.year = +date.format('YYYY');
  //   this.listCalendar();
  // }

  // handleEventClick(arg) {
  //   this.openModalEdit(arg.event.id);
  // }

  // async handleDateClick(arg) {
  //   this.selectedDate = arg.date;
  //   this.selectedDateValue = arg.dateStr;
  //   this.page = Constants.FirstPage;
  //   this.listByDate();
  // }

  changeFormat(date:Date) {
    return moment(date).format('YYYY-MM-DD');
  }
}
