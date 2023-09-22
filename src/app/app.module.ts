import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewDoctorComponent } from './allComponents/view-doctor/view-doctor.component';
import { AddDoctorComponent } from './allComponents/add-doctor/add-doctor.component';
import { UpdateDoctorComponent } from './allComponents/update-doctor/update-doctor.component';
import { ViewSpecializationComponent } from './allComponents/view-specialization/view-specialization.component';
import { ViewTodaysSurgeryComponent } from './allComponents/view-todays-surgery/view-todays-surgery.component';
import { UpdateSurgeryComponent } from './allComponents/update-surgery/update-surgery.component';
import { NavbarComponent } from './allComponents/navbar/navbar.component';
import { FooterComponent } from './allComponents/footer/footer.component';
import { LandingComponent } from './allComponents/landing/landing.component';
import {HttpClientModule} from '@angular/common/http'
import { CurewellService } from './services/curewell.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ViewDoctorComponent,
    AddDoctorComponent,
    UpdateDoctorComponent,
    ViewSpecializationComponent,
    ViewTodaysSurgeryComponent,
    UpdateSurgeryComponent,
    NavbarComponent,
    FooterComponent,
    LandingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpClientModule,CurewellService],
  bootstrap: [AppComponent]
})
export class AppModule { }
