import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';

import { SidepanelComponent } from './sidepanel/sidepanel.component';
import { MainpanelComponent } from './mainpanel/mainpanel.component';
import { ModalComponent } from './modal/modal.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ConservationComponent } from './pages/conservation/conservation.component';
import { ProblemsComponent } from './pages/problems/problems.component';
import { CertComponent } from './pages/conservation/cert/cert.component';
import { SignupComponent } from './pages/conservation/signup/signup.component';
import { ProbSolPartComponent } from './pages/conservation/prob-sol-part/prob-sol-part.component';
import { CornerstonesComponent } from './pages/conservation/cornerstones/cornerstones.component';
import { SixStonesComponent } from './pages/conservation/six-stones/six-stones.component';
import { CertificationComponent } from './pages/conservation/certification/certification.component';
import { TestpageComponent } from './testpage/testpage.component';
import { MapComponent } from './map/map.component';
import { DataComponent } from './data/data.component';
import { DonationsComponent } from './donations/donations.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidepanelComponent,
    MainpanelComponent,
    ModalComponent,
    FooterComponent,
    HomeComponent,
    ConservationComponent,
    ProblemsComponent,
    CertComponent,
    SignupComponent,
    ProbSolPartComponent,
    CornerstonesComponent,
    SixStonesComponent,
    CertificationComponent,
    TestpageComponent,
    MapComponent,
    DataComponent,
    DonationsComponent,
  ],
  imports: [
    FlexLayoutModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
