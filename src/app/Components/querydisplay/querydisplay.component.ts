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
  isLoaded:boolean = false;

  searchTerm(query: any) {
    
    this.newQuery = query;
    this.userService.getUserDetails(this.newQuery.userQuery)
    this.userAccount = this.userService.userDetails;
    this.userProjects = this.userService.userReposArray;
    this.queryRepo = this.userService.searchReposArray;
    console.log(this.queryRepo)
    this.isLoaded = !this.isLoaded;
    
  }


  constructor(private userService: UserserviceService) {

  }

  ngOnInit(): void {
    
  }

}
