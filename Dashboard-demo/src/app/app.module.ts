import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ReportComponent } from './components/report/report.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { InformationComponent } from './components/information/information.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction'
import { CalendarModalModel } from './models/calendar.modal.model';
import { CreateCalendarComponent } from './components/calendar/popup/create-calendar/create-calendar.component';
import { HttpClientModule } from '@angular/common/http';

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
]);

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ReportComponent,
    CalendarComponent,
    InformationComponent,
    CreateCalendarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgbModule,
    FullCalendarModule 
  ],
  providers: [
    CalendarModalModel
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
