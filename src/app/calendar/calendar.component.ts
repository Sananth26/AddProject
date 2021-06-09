import { Component, OnInit } from '@angular/core';
import { EventSettingsModel, ScheduleComponent,DayService, WeekService, WorkWeekService, MonthService, AgendaService } from '@syncfusion/ej2-angular-schedule';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
public selectedDate: Date = new Date(2018, 1, 15);
public showWeekNumber: boolean = false;
public isReadOnly: boolean = false;
public enableRtl: Boolean = true;
public scheduleObj: ScheduleComponent


public eventSettings: EventSettingsModel = { 
  allowAdding: true, 
}
add(): void {
  let Data: Object[] = [{
      Id: 1,
      Subject: 'Conference',
      StartTime: new Date(2018, 1, 15, 9, 0),
      EndTime: new Date(2018, 1, 15, 10, 0),
    
  }];
  this.scheduleObj.addEvent(Data);
 
}
     
  constructor() { }

  ngOnInit(): void {
  }

}
