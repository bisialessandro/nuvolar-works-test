import React from 'react';
import {SearchBar} from '../Components/SearchBar';
import {UserGitHub} from "../Model/UserGitHub";
import {GitHubServices} from "../Network/GitHubServices";
import {Animated, FlatList, ImageBackground, SafeAreaView, StyleSheet} from "react-native";
import {CardUser} from '../Components/CardComponents/CardUser';
import { NavigationStackProp } from 'react-navigation-stack';
import {COLOR_HIGHLIGHT} from "../Styles/Colors";
const BackgroundApp = require( '../Assets/images/BackgroundApp.png');

interface Props {
    navigation: NavigationStackProp;
};
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

    /*async requestData(){


        let gitHubServ = new GitHubServices();

        //let result = await gitHubServ.getUsers("q=tom+repos:%3E42+followers:%3E1000");
        let result = await gitHubServ.getUsers("q=language:typeScript");


        this.setState({filteredList:result?result:[]});
        this.setState({listUser:result?result:[]});

    }
*/
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


        this.props.navigation.navigate("DetailUser",{'user':value});

    }


    renderItem = (item:UserGitHub) => <CardUser
        user={item}
        onClick={this.onClick}
        key={item.id}
        showArrow={true}
    />

    render() {
        return (
            <SafeAreaView >
                <ImageBackground source={BackgroundApp} style={styles.ImageBackground} >
                    <SearchBar placeholder={"Insert a username"} callback={this.onChangeText}  />
                    <FlatList<UserGitHub>
                        data={this.state.filteredList}
                        renderItem={item => this.renderItem(item.item)}
                    />
                </ImageBackground>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    ImageBackground: {

        width:'100%',
        height:'100%'
    },
    SearchBar:{
        margin:'10px'
    }
});

export default styles;