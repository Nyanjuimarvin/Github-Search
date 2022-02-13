import { Injectable } from '@angular/core';
import { User } from '../Classes/user';
import { Repos } from '../Classes/repos';
import axios from 'axios';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class UserserviceService {

  userDetails!: User;
  userRepos!: Repos;
  userReposArray: Repos[] = [];
  searchReposArray: Repos[] = [];
 
  constructor() {
    this.userDetails = new User();
    this.userRepos = new Repos();

  }

  async getUserDetails(urQuery:any) {

    try {

      const myResponse = await axios.get(`https://api.github.com/users/${urQuery}`,
        {
          headers:
            { "Authorization": environment.access_token }
        })

      const userRepoResponse = await axios.get(`https://api.github.com/users/${urQuery}/repos`);

      const repositories = await axios.get(`https://api.github.com/search/repositories?q=${urQuery}}`)

      const profileData = myResponse.data;
      const repoData = userRepoResponse.data;
      const repoResultsArray = repositories.data.items;

      console.log(repoResultsArray)

      //Profile Details
      if (!this.userDetails.bioMessage) this.userDetails.bioMessage = "Custom";

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

      //Repositories search results
      repoResultsArray.forEach((element: any) => {

        if (!element.language || !element.description) {
          element.language = "Custom";
          element.description = "Custom";
        }

        this.searchReposArray.push(new Repos(
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
