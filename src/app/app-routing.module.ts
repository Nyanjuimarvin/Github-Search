import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReposearchComponent } from './Components/reposearch/reposearch.component';
import { QuerydisplayComponent } from './Components/querydisplay/querydisplay.component';


const routes: Routes = [
  {path:"user",component:QuerydisplayComponent},
  {path:"repos",component:ReposearchComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
