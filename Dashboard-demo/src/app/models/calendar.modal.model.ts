import { Injectable } from '@angular/core';

@Injectable()
export class CalendarModalModel {
    topic: string = "";
    datestart: Date = new Date();
    dateFinish: Date = new Date();
}
