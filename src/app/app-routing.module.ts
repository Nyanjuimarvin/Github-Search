import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './Components/landing/landing.component';
import { ReposearchComponent } from './Components/reposearch/reposearch.component';
import { QuerydisplayComponent } from './Components/querydisplay/querydisplay.component';


const routes: Routes = [
  {path:"home", component:LandingComponent},
  { path: "user", component: QuerydisplayComponent },
  { path: "repo", component: ReposearchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
