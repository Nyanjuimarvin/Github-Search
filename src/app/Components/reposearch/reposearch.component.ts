import { Component, OnInit } from '@angular/core';
import { Query } from 'src/app/Classes/query';
import { User } from 'src/app/Classes/user';
import { Repos } from 'src/app/Classes/repos';
import { UserserviceService } from 'src/app/Services/userservice.service';

@Component({
  selector: 'app-reposearch',
  templateUrl: './reposearch.component.html',
  styleUrls: ['./reposearch.component.css']
})
export class ReposearchComponent implements OnInit {

  repoQuery!:Query;
  reposArray:Repos[]=[];

  getRandRepos(randRepo:any){

    this.repoQuery = randRepo;
    this.repoService.getUserDetails(this.repoQuery.userQuery)
    this.reposArray = this.repoService.searchReposArray;

  }

  constructor(private repoService:UserserviceService) { }

  ngOnInit(): void {
  }

}
