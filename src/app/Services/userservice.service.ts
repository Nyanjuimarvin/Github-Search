import { Injectable } from '@angular/core';
import { User } from '../Classes/user';
import { Repos } from '../Classes/repos';
import { Query } from '../Classes/query';
import axios from 'axios';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class UserserviceService {

  userDetails!: User;
  userRepos!: Repos;
  userReposArray: Repos[] = [];
  query!:Query;

  constructor() {
    this.userDetails = new User();
    this.userRepos = new Repos();
    this.query = new Query();

  }

  async getMyUserDetails() {

    try {

      const myResponse = await axios.get(`https://api.github.com/users/${this.query.userQuery}`,
        {
          headers:
            { "Authorization": environment.access_token }
        })

      const repoResponse = await axios.get(`https://api.github.com/users/${this.query.userQuery}/repos`);

      const repoData = repoResponse.data;
      const profileData = myResponse.data;

      //Profile Details
      if(!this.userDetails.bioMessage) this.userDetails.bioMessage = "Custom";

      this.userDetails.bioMessage = profileData.bio;
      this.userDetails.userName = profileData.login;
      this.userDetails.userUrl = profileData.html_url;
      this.userDetails.photoUrl = profileData.avatar_url;
      this.userDetails.dateJoined = profileData.created_at;
      this.userDetails.repoNumber = profileData.public_repos;

      //Repo Details
      repoData.forEach((element: any) => {

        if (!element.language || !element.description) {
          element.language = "Custom";
          element.description = "Custom";
        }

        this.userReposArray.push(new Repos(
          element.forks,
          element.html_url,
          element.language,
          element.name,
          element.created_at,
          element.updated_at,
          element.description
        ))
      });

    } catch (error) {
      alert(error);
    }
  }


}
