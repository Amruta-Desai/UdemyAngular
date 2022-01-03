import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/sever.component';
import { WarningAlertComponentComponent } from './warning-alert-component/warning-alert-component.component';
import { SuccessComponentComponent } from './success-component/success-component.component';
import { DatabindingAssignmentComponent } from './databinding-assignment/databinding-assignment.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    WarningAlertComponentComponent,
    SuccessComponentComponent,
    DatabindingAssignmentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
