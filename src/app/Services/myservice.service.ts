import { Injectable } from '@angular/core';
import { User } from '../Classes/user';
import axios from 'axios';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  myDetails!: User;

  constructor() {
    this.myDetails = new User("", "", 0);
  }

  async getMyDetails() {

    try {
      const myResponse = await axios.get(`https://api.github.com/users/Nyanjuimarvin`,
        {
          headers:
            { "Authorization": environment.access_token }
        })

      this.myDetails.userName = myResponse.data.login;
      this.myDetails.photoUrl = myResponse.data.avatar_url;
      this.myDetails.repoNumber = myResponse.data.public_repos;


    } catch (error) {
      alert(error);
    }
  }
}
