import {UserGitHub} from "../Model/UserGitHub";
import {Repository} from "../Model/Repository";

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

    public async getFollowers(queryParam: string,user:string){

        try {

            const response = await axios.get("https://api.github.com/users/".concat(user)+"/followers"
                .concat(queryParam));

            return UserGitHub.prototype.toUser(response.data);

        } catch (err) {
            console.log('Error during the comunication with GitHub: ', err);
            return null;
        }

    }

    public async getRepositories(queryParam: string,user:string){

        try {
            const response = await axios.get("https://api.github.com/users/".concat(user)+"/repos"
                .concat(queryParam));

            return Repository.prototype.toRepository(response.data);

        } catch (err) {
            console.log('Error during the comunication with GitHub: ', err);
            return null;
        }

    }


}