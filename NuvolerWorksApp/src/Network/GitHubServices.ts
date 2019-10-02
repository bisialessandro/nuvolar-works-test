import {UserGitHub} from "../Model/UserGitHub";

const axios = require('axios');

export class GitHubServices{

   public async  getUsers(queryParam: string){

       try {

           const response = await axios.get("https://api.github.com/search/users?q=tom+repos:%3E42+followers:%3E1000");


           //console.log("intermediateResponse",response);

           return UserGitHub.prototype.toUser(response.data.items);

       } catch (err) {
           console.log('Error during the comunication with GitHub: ', err);
           return null;
       }



    }

}