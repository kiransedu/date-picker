import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateNativeAdapter } from './services/NgbDateNativeAdapter';
import { NgbDateNativeParserFormatter } from './services/ngb-date-native-parser-formatter';

@NgModule({
  declarations: [
    AppComponent,
    DatePickerComponent
  ],
  imports: [
    BrowserModule, CommonModule, FormsModule, NgbModule
  ],
  providers: [ NgbDateNativeAdapter,
    { provide: NgbDateParserFormatter, useClass: NgbDateNativeParserFormatter }],
  bootstrap: [AppComponent]
})
export class AppModule { }
