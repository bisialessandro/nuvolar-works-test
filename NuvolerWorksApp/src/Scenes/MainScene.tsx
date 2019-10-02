import React from 'react';
import {SearchBar} from '../Components/SearchBar';
import {UserGitHub} from "../Model/UserGitHub";
import {GitHubServices} from "../Network/GitHubServices";
import {Animated} from "react-native";
import parallel = Animated.parallel;
const axios = require('axios');

export interface Props {


}

interface State {

    listUser: Array<UserGitHub>;
    filteredList:Array<UserGitHub>
}

export class MainScene extends React.Component<Props, State> {
     constructor(props: Props) {
        super(props);


       this.state = {
            listUser:[],
            filteredList:[]
        };

    }

    async componentDidMount(){

         let gitHubServ = new GitHubServices();

         let result = await gitHubServ.getUsers("q=tom+repos:%3E42+followers:%3E1000");


         this.setState({filteredList:result?result:[]});
         this.setState({listUser:result?result:[]});


         console.log("result",result);
    }

    filterUser = (value:string) => {
          this.state.listUser.forEach(userGitHub => {
             return userGitHub.login.indexOf(value)>0&&userGitHub;
         });

    }

    onChangeText = (value:string) => {

        console.log("prova",value.toString());

        if(value===""){

            this.setState({filteredList: this.state.listUser});

        }else {
            /* let resultList = this.state.list.map(function(value){
                         //return value.parse("login");
             })
     */
            console.log("result", this.filterUser(value));


            this.setState({filteredList: this.state.filteredList});

        }
    }



    render() {
        return (
            <SearchBar  callback={this.onChangeText} >
            </SearchBar>
        );
    }
}
