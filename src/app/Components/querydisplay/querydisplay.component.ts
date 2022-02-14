import { Component, OnInit, ViewChild } from '@angular/core';
import { Repos } from 'src/app/Classes/repos';
import { User } from 'src/app/Classes/user';
import { Query } from 'src/app/Classes/query';
import { UserserviceService } from 'src/app/Services/userservice.service';


@Component({
  selector: 'app-querydisplay',
  templateUrl: './querydisplay.component.html',
  styleUrls: ['./querydisplay.component.css']
})

export class QuerydisplayComponent implements OnInit {


  @ViewChild("repoResponse")repoResponse!:HTMLDivElement;
  @ViewChild("userResponse")userResponse!:HTMLDivElement;

  userAccount!: User;
  userRepos!: Repos;
  userProjects: Repos[] = [];
  queryRepo: Repos[] = [];
  newQuery!: Query;


  searchTerm(query: Query) {

    this.userProjects.splice(0,this.userProjects.length);
    this.newQuery = query;
    this.userService.getUserDetails(this.newQuery)
    this.userAccount = this.userService.userDetails;
    this.userProjects = this.userService.userReposArray;
    
  }


  constructor(private userService: UserserviceService) {

  }

  ngOnInit(): void {
    
  }

}
