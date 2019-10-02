import {UserGitHub} from "../Model/UserGitHub";

const axios = require('axios');

export class UtilsImage{

    public async loadImageFromUrl(url:string){
        try {

            const response = await axios.get(url);

            return response.data;

        } catch (err) {
            console.log('Error during the comunication with GitHub: ', err);
            return null;
        }

    }
}