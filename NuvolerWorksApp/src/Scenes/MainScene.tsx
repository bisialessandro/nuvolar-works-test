import React from 'react';
import {SearchBar} from '../Components/SearchBar';
import {UserGitHub} from "../Model/UserGitHub";
import {GitHubServices} from "../Network/GitHubServices";
import {Animated,FlatList,View} from "react-native";
import {Card} from '../Components/Card';
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

        //let result = await gitHubServ.getUsers("q=tom+repos:%3E42+followers:%3E1000");
        let result = await gitHubServ.getUsers("q=language:typeScript");


        this.setState({filteredList:result?result:[]});
        this.setState({listUser:result?result:[]});



    }

     async requestData(){



    }

    filterUser = (value:string) => {

          let newArray : Array<UserGitHub> ;

          newArray = [];

           this.state.listUser.forEach(userGitHub => {

              if(userGitHub.login.toUpperCase().indexOf(value.toUpperCase())>-1)
                  newArray.push(userGitHub);
         });

           return newArray;

    }

    onChangeText = (value:string) => {


        if(value===""){

            this.setState({filteredList: this.state.listUser});

        }else {

            let filterUser = this.filterUser(value);

            this.setState({filteredList: filterUser?filterUser:[]});

        }
    }


    onClick = (value:UserGitHub) => {


     }


    renderItem = (item:UserGitHub) => <Card
        user={item}
        onClick={this.onClick}
    />

    render() {
        return (
            <View>
            <SearchBar placeholder={"Insert a username"} callback={this.onChangeText} />
                <FlatList<UserGitHub>
                    data={this.state.filteredList}
                    renderItem={item => this.renderItem(item.item)}
                    />
            </View>
        );
    }
}
