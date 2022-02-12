import { Component, OnInit } from '@angular/core';
import { MyserviceService } from 'src/app/Services/myservice.service';
import { User } from 'src/app/Classes/user';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  myAccount!:User

  constructor(private myService:MyserviceService) { }

  ngOnInit(): void {

    this.myService.getMyUserDetails();
    this.myAccount = this.myService.myDetails;
  }

}
