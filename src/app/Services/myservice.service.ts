import { Injectable } from '@angular/core';
import { User } from '../Classes/user';
import { Repos } from '../Classes/repos';
import axios from 'axios';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  myDetails!: User;
  repos!: Repos;
  reposArray: Repos[] = [];

  constructor() {
    this.myDetails = new User();
    this.repos = new Repos();
  }

  async getMyUserDetails() {

    try {

      const myResponse = await axios.get(`https://api.github.com/users/Nyanjuimarvin`,
        {
          headers:
            { "Authorization": environment.access_token }
        })

      const repoResponse = await axios.get(`https://api.github.com/users/Nyanjuimarvin/repos`,
        {
          headers:
            { "Authorization": environment.access_token }
        })

      const repoData = repoResponse.data;
      const profileData = myResponse.data;


      console.log(repoData)

      //Profile Details
      this.myDetails.bioMessage = profileData.bio;
      this.myDetails.userName = profileData.login;
      this.myDetails.userUrl = profileData.html_url;
      this.myDetails.photoUrl = profileData.avatar_url;
      this.myDetails.dateJoined = profileData.created_at;
      this.myDetails.repoNumber = profileData.public_repos;

      //Repo Details
      repoData.forEach((element: any) => {

        if (!element.language || !element.description) {
          element.language = "Custom";
          element.description = "No description";
        }

        this.reposArray.push(element.forks,
          element.html_url,
          element.language,
          element.name,
          element.created_at,
          element.updated_at,
          element.description
        )
      });

    } catch (error) {
      alert(error);
    }
  }

}
