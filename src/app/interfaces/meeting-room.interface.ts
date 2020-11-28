import { ICalendar } from './calendar.interface';

export interface IMeetingRoom {
    [index: string]: ICalendar[];
    Room1:ICalendar[],
    Room2:ICalendar[],
    Room3:ICalendar[],
}