import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './Components/landing/landing.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { QueryformComponent } from './Components/queryform/queryform.component';
import { QuerydisplayComponent } from './Components/querydisplay/querydisplay.component';
import { ReposearchComponent } from './Components/reposearch/reposearch.component';
import { RepoformComponent } from './Components/repoform/repoform.component';
import { DatePipe } from './Pipes/date.pipe';
import { UpdatePipe } from './Pipes/update.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NavbarComponent,
    QueryformComponent,
    QuerydisplayComponent,
    ReposearchComponent,
    RepoformComponent,
    DatePipe,
    UpdatePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatProgressBarModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
