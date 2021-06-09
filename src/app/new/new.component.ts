import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import {IMyDpOptions} from 'mydatepicker';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalComponent } from '../modal//modal.component';
import { DayService, EventSettingsModel,ScheduleComponent,WeekService, WorkWeekService, MonthService, AgendaService } from '@syncfusion/ej2-angular-schedule';


interface Student {  
  id: Number;  
  Documents: String;  
   Category: String[];
   Approve_Esign: String[];
   Assigned: String[];
   SLA: String;
   Start_Date: String;
   End_Date: String;
   Status: String;

}

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})


export class NewComponent implements OnInit {

public scheduleObj: ScheduleComponent;
public selectedDate: Date = new Date(2021, 5, 15);
public eventSettings: EventSettingsModel;
display = false;
onPress() {
   this.display = !this.display;
 }

add()
{ let Data: Object[] = [{
  Id: 1,
  Subject: 'Conference',
  StartTime: new Date(2021,5, 12, 9, 0),
  EndTime: new Date(2021,5, 14, 10, 0),
  IsAllDay: false
},{
  Id: 2,
  Subject: 'Meeting',
  StartTime: new Date(2021, 5, 15, 10, 0),
  EndTime: new Date(2021, 5, 17, 11, 30),
  IsAllDay: false
  }];
  this.scheduleObj.addEvent(Data)
}
  
  i;
  color:String;
  disabled:false;


  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',nextDayThreshold: '24:00:00',
    contentHeight: 400,
    events: [
      { title: 'event 1', date: '2021-06-01' },
      { title: 'event 2', date: '2021-06-02' },
      {title:'event3',start: '2021-06-22',
        end: '2021-06-25'
      },
  
    ],
  };


  handleDateClick(arg) {
    alert('date click! ' + arg.dateStr)
  }

  

  panelOpenState = false;

  side = 'right';
  public myDatePickerOptions: IMyDpOptions = {
    // other options...
    dateFormat: 'dd.mm.yyyy',
};

// Initialized to specific date (09.10.2018).
public model: any;

togglePanel:true;
clickButton ;

getCheck()
{let i;
  if(i=0)
{
  i=i+1;
  return false;
}
  else return false;
  
}

  getBackgroundColor(i){
    
    if(i=="Draft")
    return "red"
    else if(i=="Prepared_By")
    return "green"
    else if(i=="Reviewed_By")
    return "yellow" 
    else return "blue"
   
  }


  getStatusColor(i){
    if(i=="Approved")
    return "green"
    else if(i=="Pending")
    return "yellow"
    else if(i=="Rejected")
    return "red"
    else return ""
   
  }

      getBorder(i){
        
        if(i=="Draft")
        return "5px solid red"
        else if(i=="Prepared_By")
        return "5px solid green"
        else if(i=="Reviewed_By")
        return "5px solid blue"
        else
        return "5px solid yellow"
           
          }
         
    start_date='01-05-2021';
    end_date='23-07-2021';
      students: any[] =[  
        {"id":1,
        "Documents":"User Requirement Specification",
        "Category":
        [{"Categoary":"Draft",Approved:"Esign","Assigned":"Anu","SLA":"1","Start_Date":"29/05/2021","End_Date":"31/05/2021","Status":"Approved"},{
          Categoary:"Prepared_By",Approved:"Esign",Assigned:"San",SLA:"2",Start_Date:"02/06/2021",End_Date:"03-06/2021",Status:"Pending"},
          {Categoary:"Reviewed_By",Approved:"Esign",Assigned:"Raj",SLA:"1",Start_Date:"06/05/2021",End_Date:"09-05/2021",Status:"Approved"},
          {Categoary:"Approved_By",Approved:"Esign",Assigned:"Upi",SLA:"1",Start_Date:"16/05/2021",End_Date:"19/05/2021",Status:"Approved"}]
        },
        {"id":2,
        "Documents":"System Specification",
        "Category":
        [{"Categoary":"Draft",Approved:"publish","Assigned":"Ninu","SLA":"1","Start_Date":"29/05/2021","End_Date":"31/05/2021","Status":"Rejected"},{
          Categoary:"Prepared_By",Approved:"publish",Assigned:"abi",SLA:"1",Start_Date:"12/06/2021",End_Date:"13/06/2021",Status:"Rejected"},
          {Categoary:"Reviewed_By",Approved:"publish",Assigned:"Raj",SLA:"2",Start_Date:"26/05/2021",End_Date:"29/05/2021",Status:"Approved"},
          {Categoary:"Approved_By",Approved:"publish",Assigned:"Anu",SLA:"1",Start_Date:"16/05/2021",End_Date:"19/05/2021",Status:"Approved"}
        ]

        },
        {"id":3,
        "Documents":"Test Case Specification",
        "Category":
        [{"Categoary":"Draft",Approved:"publish","Assigned":"Abi","SLA":"1","Start_Date":"29/05/2021","End_Date":"31/05/2021","Status":"Approved"},{
          Categoary:"Prepared_By",Approved:"publish",Assigned:"San",SLA:"3",Start_Date:"09/06/2021",End_Date:"13/06/2021",Status:"Pending"},
          {Categoary:"Reviewed_By",Approved:"publish",Assigned:"Anu",SLA:"1",Start_Date:"16/05/2021",End_Date:"19/05/2021",Status:""},
          {Categoary:"Approved_By",Approved:"publish",Assigned:"abi",SLA:"1",Start_Date:"12/06/2021",End_Date:"13/06/2021",Status:"Rejected"} ]

        },
        {"id":4,
        "Documents":"User Requirement Specification",
        "Category":
        [{"Categoary":"Draft",Approved:"publish","Assigned":"Anu","SLA":"1","Start_Date":"29/05/2021","End_Date":"31/05/2021","Status":"Approved"},{
          Categoary:"Prepared_By",Approved:"publish",Assigned:"San",SLA:"2",Start_Date:"02-06-2021",End_Date:"03-06-2021",Status:"Pending"},
          {Categoary:"Reviewed_By",Approved:"publish",Assigned:"Raj",SLA:"1",Start_Date:"06-05-2021",End_Date:"09-05-2021",Status:"Approved"},
          {Categoary:"Approved_By",Approved:"publish",Assigned:"Upi",SLA:"1",Start_Date:"16-05-2021",End_Date:"19-05-2021",Status:"Approved"}]

        },
        {"id":5,
        "Documents":"System Specification",
        "Category":
        [{"Categoary":"Draft",Approved:"publish","Assigned":"Ninu","SLA":"1","Start_Date":"29/05/2021","End_Date":"31/05/2021","Status":"Rejected"},{
          Categoary:"Prepared_By",Approved:"publish",Assigned:"abi",SLA:"1",Start_Date:"12/06/021",End_Date:"13/06/2021",Status:"Rejected"},
          {Categoary:"Reviewed_By",Approved:"publish",Assigned:"Raj",SLA:"2",Start_Date:"26/05/2021",End_Date:"29/05/2021",Status:"Approved"},
          {Categoary:"Approved_By",Approved:"publish",Assigned:"Anu",SLA:"1",Start_Date:"16/05/2021",End_Date:"19/05/2021",Status:"Approved"}
        ]

        }

      ]  
      
      onLogin(userName,password)
      {
      
      }
      constructor( public matDialog: MatDialog) { }

      expandPanel(matExpansionPanel, event): void {
        event.stopPropagation(); // Preventing event bubbling

        if (!this._isExpansionIndicator(event.target)) {
          matExpansionPanel.close(); // Here's the magic
        }
      }
      /**
       * 
       * @param target 
       * @returns 
       */
      private _isExpansionIndicator(target: EventTarget): boolean {
        const expansionIndicatorClass = 'mat-expansion-indicator';
    
        return (target['classList'] && target['classList'].contains(expansionIndicatorClass) );
      }

      /**
       * 
       */
      openModal() {
        let firstName;
        const dialogConfig = new MatDialogConfig();
        // The user can't close the dialog by clicking outside its body
        dialogConfig.disableClose = true;
        dialogConfig.backdropClass="bdrop";
        dialogConfig.id = "modal-component";
        dialogConfig.height = "220px";
        dialogConfig.width = "500px";
        // https://material.angular.io/components/dialog/overview
        const modalDialog = this.matDialog.open(ModalComponent, dialogConfig);
      }
    
    
      ngOnInit(): void {
      }
    
    }
    