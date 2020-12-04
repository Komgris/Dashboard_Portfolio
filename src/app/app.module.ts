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
import { FormsModule } from '@angular/forms';
import { CartLibraryComponent } from './components/cart-library/cart-library.component';
import { SetReportNameComponent } from './components/report/set-report-name/set-report-name.component';
import { ChartsModule } from 'ng2-charts';
import { NgxGaugeModule } from 'ngx-gauge';
import { AboutComponent } from './components/about/about.component';

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
    CreateCalendarComponent,
    CartLibraryComponent,
    SetReportNameComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgbModule,
    FullCalendarModule ,
    FormsModule,
    ChartsModule,
    NgxGaugeModule
  ],
  providers: [
    CalendarModalModel
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
