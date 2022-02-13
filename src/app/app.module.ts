import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
