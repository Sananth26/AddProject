import { Component, OnInit } from '@angular/core';
import { inject } from '@angular/core/testing';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EventSettingsModel,DayService, WeekService, WorkWeekService, MonthService, AgendaService } from '@syncfusion/ej2-angular-schedule';

@Component({
  selector: 'app-moda1',
  templateUrl: './moda1.component.html',
  styleUrls: ['./moda1.component.css']
})
export class Moda1Component implements OnInit {


  public selectedDate: Date = new Date(2021, 6, 10);
public showWeekNumber: boolean = false;
public isReadOnly: boolean = false;
public enableRtl: Boolean = true;
description:string;

public eventSettings: EventSettingsModel = { 
  allowAdding: false,
  allowDeleting:false,
  allowEditing:false,

      dataSource:[
    {
        Id: 1,
        Subject: 'User Requirement Specification',
        StartTime: new Date(2021, 6, 14),
        EndTime: new Date(2021, 6, 16),
    },
    {
      Id: 2,
      Subject: 'System Specification',
      StartTime: new Date(2021, 9, 14),
      EndTime: new Date(2021, 9, 16),
    },
    {
    Id: 3,
    Subject: 'Test Case Specification',
    StartTime: new Date(2021, 7, 14),
    EndTime: new Date(2021, 7, 16),
    },
    {
      Id: 4,
      Subject: 'User Requirement Specification',
      StartTime: new Date(2021, 8, 7),
      EndTime: new Date(2021, 8, 9),
    },
    {
      Id: 5,
      Subject: 'System Specification',
      StartTime: new Date(2021, 7, 23),
      EndTime: new Date(2021, 7, 25),
  },


    ]};

  constructor(private dialogRef: MatDialogRef<Moda1Component>) {
    
   }
  closeModal() {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
