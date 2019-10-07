import React from 'react';
import {SearchBar} from '../Components/SearchBar';
import {UserGitHub} from "../Model/UserGitHub";
import {FlatList, ImageBackground, SafeAreaView, StyleSheet} from "react-native";
import {CardUser} from '../Components/CardComponents/CardUser';
import { NavigationStackProp } from 'react-navigation-stack';
const BackgroundApp = require( '../Assets/images/BackgroundApp.png');
import { connect } from "react-redux";
import { AppState } from "../store";

import { GitHubState } from "../store/github/types";
import {setUserDetails, setUsers} from "../store/github/actions";
import {thunkFetchUsers} from "../store/thunk";


interface Props {
    navigation: NavigationStackProp;

};

interface AppProps{
    setUsers:typeof setUsers;
    setUserDetails:typeof setUserDetails;
    gitHub: GitHubState;
    thunkFetchUser: any;

}
interface State {

    listUser: Array<UserGitHub>;
    filteredList:Array<UserGitHub>
}

class MainScene extends React.PureComponent<Props, State,AppProps> {
    constructor(props: Props) {
        super(props);


        this.state = {
            listUser:[],
            filteredList:[]
        };

    }

    async componentDidMount(){

        await this.props.thunkFetchUsers("This message was sent by a thunk!");

        this.setState({filteredList:this.props.gitHub.users});
        this.setState({listUser:this.props.gitHub.users);

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

         this.props.setUserDetails(value);

        this.props.navigation.navigate("DetailUser",{'user':value});

    }


    renderItem = (user:UserGitHub) => <CardUser
        user={user}
        onClick={this.onClick}
        showArrow={true}
    />

    render() {
        return (
            <SafeAreaView >
                <ImageBackground source={BackgroundApp} style={styles.ImageBackground} >

                    <SearchBar placeholder={"Insert a username"} callback={this.onChangeText}  />
                    <FlatList<UserGitHub>
                        keyExtractor={item => item.id+""}
                        data={this.state.filteredList}
                        renderItem={item => this.renderItem(item.item)}
                    />
                </ImageBackground>
            </SafeAreaView>
        );
    }
}

export const styles = StyleSheet.create({
    ImageBackground: {

        width:'100%',
        height:'100%'
    },
    SearchBar:{
        margin:'10px'
    }
});


const mapStateToProps = (state: AppState) => ({

    gitHub: state.github,

});

export default connect(
    mapStateToProps,
    { setUserDetails, setUsers,thunkFetchUsers}
)(MainScene);