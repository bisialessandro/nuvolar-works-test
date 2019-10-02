import {UserGitHub} from "../Model/UserGitHub";

const axios = require('axios');

export class GitHubServices{

   public async  getUsers(queryParam: string){

       try {

           const response = await axios.get("https://api.github.com/search/users?".concat(queryParam));

           return UserGitHub.prototype.toUser(response.data.items);

       } catch (err) {
           console.log('Error during the comunication with GitHub: ', err);
           return null;
       }



    }

}