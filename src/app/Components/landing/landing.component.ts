import { Component, OnInit } from '@angular/core';
import { MyserviceService } from 'src/app/Services/myservice.service';
import { User } from 'src/app/Classes/user';
import { Repos } from 'src/app/Classes/repos';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  myAccount!:User;
  myRepos:Repos[] = [];

  constructor(private myService:MyserviceService) { }

  ngOnInit(): void {

    this.myService.getMyUserDetails();
    this.myRepos = this.myService.reposArray;
    this.myAccount = this.myService.myDetails;
    
  }

}
