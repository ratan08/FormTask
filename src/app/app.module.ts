import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistrationFormComponent } from './form/registration-form/registration-form.component';
import { MatrialModule } from './matrial/matrial.module';
import { ReactiveFormsModule } from '@angular/forms';
import { DailogComponent } from './form/dailog/dailog.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationFormComponent,
    DailogComponent
  ],
  entryComponents:[DailogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatrialModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
