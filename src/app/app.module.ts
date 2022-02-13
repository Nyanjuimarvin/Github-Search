import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './Components/landing/landing.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { QueryformComponent } from './Components/queryform/queryform.component';
import { QuerydisplayComponent } from './Components/querydisplay/querydisplay.component';
import { UserrepodisplayComponent } from './Components/userrepodisplay/userrepodisplay.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NavbarComponent,
    QueryformComponent,
    QuerydisplayComponent,
    UserrepodisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
