import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewComponent } from './new/new.component';
import { UploadFileComponent } from './upload-file/upload-file.component';
import {UploadImageComponent} from './upload-image/upload-image.component';
import { CalendarComponent } from './calendar/calendar.component';
import { DemotestComponent } from './demotest/demotest.component';

const routes: Routes = [  
  { path: 'uploadimage', component: UploadImageComponent },
  { path: 'uploadfile', component:UploadFileComponent },
  { path: 'new', component:NewComponent },{path:'calendar',component:CalendarComponent},
  {path:'demotest',component:DemotestComponent}
  
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
