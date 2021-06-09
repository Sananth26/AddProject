import { Component, OnInit } from '@angular/core';
import {IMyDpOptions} from 'mydatepicker';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalComponent } from '../modal//modal.component';
import {Moda1Component} from '../moda1/moda1.component';
import { SelectUserComponent } from '../select-user/select-user.component';
import {EmailSettingComponent} from '../email-setting/email-setting.component'
import {CategoryComponent} from '../category/category.component';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent implements OnInit {
  panelOpenState = false;

  public myDatePickerOptions: IMyDpOptions = {
    
    dateFormat: 'dd/mm/yyyy',
};

  getBackgroundColor(i){
    
    if(i=="Draft")
    return "red"
    else if(i=="Prepared_By")
    return "green"
    else if(i=="Reviewed_By")
    return "yellow" 
    else return "blue"
   
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
      
    
      constructor( public matDialog: MatDialog) { }

      expandPanel(matExpansionPanel, event): void {
        event.stopPropagation(); // Preventing event bubbling

        if (!this._isExpansionIndicator(event.target)) {
          matExpansionPanel.close(); // Here's the magic
        }
      }

      private _isExpansionIndicator(target: EventTarget): boolean {
        const expansionIndicatorClass = 'mat-expansion-indicator';
    
        return (target['classList'] && target['classList'].contains(expansionIndicatorClass) );
      }


      openModal() {
        let firstName;
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.backdropClass="bdrop";
        dialogConfig.id = "modal-component";
        const modalDialog = this.matDialog.open(ModalComponent, dialogConfig);
      }

     openModa1() {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.backdropClass="bdrop";
        dialogConfig.id = "moda1-component";
        dialogConfig.autoFocus = false;
        const modalDialog = this.matDialog.open(Moda1Component,dialogConfig)
      }
  
    openSelectUser(){
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.backdropClass="bdrop";
      dialogConfig.id = "SelectUser-component";
      dialogConfig.autoFocus = false;
      const modalDialog = this.matDialog.open(SelectUserComponent,dialogConfig)
    }

    openEmailSetting(){
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.backdropClass="bdrop";
      dialogConfig.id = "EmailSetting-component";
      dialogConfig.autoFocus = false;
      const modalDialog = this.matDialog.open(EmailSettingComponent,dialogConfig)
    }

    openCategory(){
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.backdropClass="bdrop";
      dialogConfig.id = "category-component";
      dialogConfig.autoFocus = false;
      const modalDialog = this.matDialog.open(CategoryComponent,dialogConfig)
    }

        
    ngOnInit(): void {
    }



    }
    