import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ICalendar } from '../interfaces/calendar.interface';
import { IMeetingRoom } from '../interfaces/meeting-room.interface';

@Injectable({
  providedIn: 'root'
})
export class ReserveMeetingService {

  meetingModel:IMeetingRoom = {
    Room1:[],
    Room2:[],
    Room3:[]
  };
  private meetingSource = new BehaviorSubject(this.meetingModel);
  currentMeeting:Observable<IMeetingRoom> = this.meetingSource.asObservable();

  constructor() { }

  addReserveRoom(room:string,reserve:ICalendar){
    this.currentMeeting.subscribe(value=>{
      this.meetingModel = value;
    });
    this.meetingModel[room].push(reserve);
    this.meetingSource.next(this.meetingModel);
    console.log(this.meetingModel)
  }

}
