import { Component, OnInit } from '@angular/core';
import { EventSettingsModel, MonthService } from '@syncfusion/ej2-angular-schedule'
import { FullCalendarOptions, EventObject } from 'ngx-fullcalendar';
import { CalendarOptions } from '@fullcalendar/angular';


@Component({
  selector: 'app-demotest',
  providers: [MonthService],
  templateUrl: './demotest.component.html',
  styleUrls: ['./demotest.component.css']
})
export class DemotestComponent implements OnInit {
constructor() { }
options: FullCalendarOptions;
events: EventObject[];

calendarOptions: CalendarOptions = {
  initialView: 'dayGridMonth',
  dateClick: this.handleDateClick.bind(this), // bind is important!
  events: [
    { title: 'event 1', date: '2021-04-01' },
    { title: 'event 2', date: '2021-04-02' }
  ]
};

handleDateClick(arg) {
  alert('date click! ' + arg.dateStr)
}
 
  ngOnInit() {
    this.options = {
      defaultDate: '2018-07-26',
      editable: true,contentHeight:400,
    };


    

 
    this.events = [
      { id: 'a', title: 'My Birthday', start: '2021-07-21T18:00:00', end: '2021-07-22T23:00:00' },
      { id: 'b', title: 'Friends coming round', start: '2021-07-26T18:00:00', end: '2021-07-28T23:00:00' }
    ]
  }
  

  eventClick(model){
    console.log(model);
    }

  


}




