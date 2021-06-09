
import { NgModule,LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DataTablesModule} from 'angular-datatables';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UploadFileComponent } from './upload-file/upload-file.component';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { UploadImageComponent } from './upload-image/upload-image.component';
import { NgxDocViewerModule } from 'ngx-doc-viewer';
import { NewComponent } from './new/new.component';
import {MatButtonModule} from '@angular/material/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table'
import { MatInputModule } from '@angular/material/input';
import {MatStepperModule} from '@angular/material/stepper'; 
import{MatBadgeModule} from '@angular/material/badge';
import { MatExpansionModule } from '@angular/material/expansion';
import { MglTimelineModule } from 'angular-mgl-timeline';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MyDatePickerModule } from 'mydatepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalComponent } from './modal/modal.component';
import { Moda1Component } from './moda1/moda1.component';
import { MonthAgendaService, ScheduleModule } from '@syncfusion/ej2-angular-schedule';
import { DayService, WeekService, WorkWeekService, MonthService, AgendaService } from '@syncfusion/ej2-angular-schedule';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { CalendarComponent } from './calendar/calendar.component';
import { DemotestComponent } from './demotest/demotest.component';
import {enableProdMode} from '@angular/core';
import { NgxFullCalendarModule } from 'ngx-fullcalendar';
import { FullCalendarModule } from '@fullcalendar/angular'; // the main connector. must go first
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin
import interactionPlugin from '@fullcalendar/interaction'; // a plugin
import {CategoryComponent} from './category/category.component';
import { EmailSettingComponent } from './email-setting/email-setting.component';
import { SelectUserComponent } from './select-user/select-user.component';



FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
]);

@NgModule({
  exports:[],
  declarations: [
    AppComponent,Moda1Component,
    UploadFileComponent,CategoryComponent,EmailSettingComponent,SelectUserComponent,
    UploadImageComponent,
    NewComponent,
    ModalComponent,
    CalendarComponent,
    DemotestComponent,

  ],

  imports: [
    BrowserModule,MatDialogModule,
    AppRoutingModule,NgxFullCalendarModule,
    DataTablesModule, FullCalendarModule ,
    HttpClientModule,ButtonModule,
    FormsModule,BrowserAnimationsModule,
    ReactiveFormsModule,ScheduleModule,
    ReactiveFormsModule,
    MatCardModule,MatExpansionModule,
    MatIconModule,MatBadgeModule,
    NgxDocViewerModule,
    MatButtonModule,
    MatNativeDateModule,
    MatInputModule,
    MatDatepickerModule,
    MatStepperModule,
    MatTableModule,MyDatePickerModule,
    MglTimelineModule,
    FontAwesomeModule, 
  ],
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService,MonthAgendaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
