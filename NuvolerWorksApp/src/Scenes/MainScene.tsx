import React from 'react';
import {SearchBar} from '../Components/SearchBar';
import {UserGitHub} from "../Model/UserGitHub";
import {GitHubServices} from "../Network/GitHubServices";
const axios = require('axios');

export interface Props {


}

interface State {

    list: Array<UserGitHub>;
    filteredList:Array<UserGitHub>
}

export class MainScene extends React.Component<Props, State> {
     constructor(props: Props) {
        super(props);

       /* if (props.list==null) {
            throw new Error('No user were found! ');
        }*/




      /*  this.state = {
            list:[UserGitHub.("{\"login\":\"Apple\"}"),JSON.parse("{\"login\":\"Orange\"}"), JSON.parse("{\"login\":\"Banana\"}")] ,
            filteredList:[JSON.parse("{\"login\":\"Apple\"}"),JSON.parse("{\"login\":\"Orange\"}"), JSON.parse("{\"login\":\"Banana\"}")]
        };*/

    }

    async componentDidMount(){

         let gitHubServ = new GitHubServices();

         let result = await gitHubServ.getUsers("q=tom+repos:%3E42+followers:%3E1000");

         console.log("result",result);
    }

    onChangeText = (value:string) => {

        console.log("prova",value.toString());
       /* let resultList = this.state.list.map(function(value){
                    //return value.parse("login");
        })
*/
        //console.log("result",resultList);


        this.setState({filteredList: this.state.filteredList});
    }



    render() {
        return (
            <SearchBar  callback={this.onChangeText} >
            </SearchBar>
        );
    }
}
