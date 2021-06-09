import { Component } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalComponent } from './modal/modal.component';
import { EventSettingsModel,DayService, WeekService, WorkWeekService, MonthService, AgendaService } from '@syncfusion/ej2-angular-schedule';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public selectedDate: Date = new Date(2018, 1, 15);
  public eventSettings: EventSettingsModel = {
      allowAdding: false, 
      allowEditing: false, 
      allowDeleting: false,
      dataSource: [
      {
          Id: 1,
          Subject: 'Explosion of Betelgeuse Star',
          StartTime: new Date(2018, 1, 15, 9, 30),
          EndTime: new Date(2018, 1, 18, 11, 0)
      }, {
          Id: 2,
          Subject: 'Thule Air Crash Report',
          StartTime: new Date(2018, 1, 12, 12, 0),
          EndTime: new Date(2018, 1, 12, 14, 0)
      }, {
          Id: 3,
          Subject: 'Blue Moon Eclipse',
          StartTime: new Date(2018, 1, 13, 9, 30),
          EndTime: new Date(2018, 1, 13, 11, 0)
      }, {
          Id: 4,
          Subject: 'Meteor Showers in 2018',
          StartTime: new Date(2018, 1, 14, 13, 0),
          EndTime: new Date(2018, 1, 14, 14, 30)
      }]
  };
  



constructor(public matDialog: MatDialog) { }
  title = 'task-web';
  openModal() {
    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "350px";
    dialogConfig.width = "600px";
    // https://material.angular.io/components/dialog/overview
    const modalDialog = this.matDialog.open(ModalComponent, dialogConfig);
  
  }

}
