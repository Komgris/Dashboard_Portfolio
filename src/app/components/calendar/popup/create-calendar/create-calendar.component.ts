import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ICalendar } from 'src/app/interfaces/calendar.interface';
import { CalendarModalModel } from 'src/app/models/calendar.modal.model';
import { Constants } from 'src/app/models/constants';
import { ReserveMeetingService } from 'src/app/services/reserve-meeting.service';
declare let alertify: any;

@Component({
  selector: 'app-create-calendar',
  templateUrl: './create-calendar.component.html',
  styleUrls: ['./create-calendar.component.css']
})
export class CreateCalendarComponent implements OnInit {

  model:ICalendar={
    topic:'',
    dateFinish: new Date,
    datestart: new Date,
    color:'#3788D8',
  };
  colorList:any[]=[
    {key:'#3788D8',value:'Monday Meeting'},
    {key:'#FF0000',value:'Urgent Meeting'},
    {key:'#008000',value:'Just wanna meet everyone'},
  ]
  selectedRoom:string=''
  roomList = Constants.MEETING_ROOM;
  constructor(
    public activeModal: NgbActiveModal,
    private reserveMeeting : ReserveMeetingService
  ) { }

  ngOnInit(): void {
  }
  save(){
    try{
      this.reserveMeeting.addReserveRoom(this.selectedRoom,this.model);
      this.activeModal.close();
      alertify.success(`Add Reserve Succes !!!`);
    }
    catch (error) {
      alertify.error(error);
    }
  }
}
