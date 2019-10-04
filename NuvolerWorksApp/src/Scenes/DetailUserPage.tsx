import React from 'react';
import {UserGitHub} from "../Model/UserGitHub";
import {
    FlatList,
    Image,
    ImageBackground,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    View
} from "react-native";
import {CardDetailRow} from '../Components/CardComponents/CardDetailRow';
import { NavigationStackProp } from 'react-navigation-stack';
import {Repository} from "../Model/Repository";
import {CardUser} from "../Components/CardComponents/CardUser";
import {CardRepository} from "../Components/CardComponents/CardRepository";
import {ShowHiddenComponent} from "../Components/ShowHiddenComponent";
import {AppState} from "../store";
import {connect} from "react-redux";
import {thunkFetchFollowers, thunkFetchRepositories} from "../store/thunk";
import {GitHubState} from "../store/github/types";
const BackgroundApp = require( '../Assets/images/BackgroundApp.png');


interface Props {
    navigation: NavigationStackProp;


};

interface AppProps{
    gitHub: GitHubState;
    thunkFetchRepositories : any;
    thunkFetchFollowers: any;

}
interface State {



}

class DetailUserPage extends React.Component<Props, State,AppProps> {
    constructor(props: Props) {
        super(props);
    }

    async componentDidMount(){

      await this.props.thunkFetchRepositories(this.props.gitHub.userDetails.login);

      await this.props.thunkFetchFollowers(this.props.gitHub.userDetails.login);


    }

    onClick = (value:UserGitHub) => {

    }


    renderItemUser = (item:UserGitHub) => <CardUser
        user={item}
        onClick={this.onClick}
        showArrow={false}
    />

    renderItemUserFlat = () => <FlatList<UserGitHub>
        data={this.props.gitHub.followers}
        renderItem={item => this.renderItemUser(item.item)} />

    renderItemRepository = (item:Repository) =><CardRepository repository={item} />

    renderItemRepositoryFlat = () =><FlatList<Repository>
            data={this.props.gitHub.repositories}
            renderItem={item => this.renderItemRepository(item.item)}
        />


        render() {
        return (
            <SafeAreaView >
                <ImageBackground source={BackgroundApp} style={styles.ImageBackground} >

                    <ScrollView>

                        <View style={styles.ViewColumn}>
                            <View style={styles.ViewImage}>
                                    <Image source={ {uri:this.props.gitHub.userDetails.avatar_url}} style={styles.AvatarStyle}/>
                            </View>
                            <CardDetailRow title={"Username: "}  value={this.props.gitHub.userDetails.login} />
                            <CardDetailRow title={"GitUrl:   "}  value={this.props.gitHub.userDetails.gists_url} />
                            <CardDetailRow title={"HtmlUrl:   "}  value={this.props.gitHub.userDetails.html_url} />

                            <ShowHiddenComponent renderItem={this.renderItemUserFlat} title={"Followers:"}/>

                           <ShowHiddenComponent renderItem={this.renderItemRepositoryFlat}  title={"Repositories:"} />

                        </View>


                    </ScrollView>



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
    },
    ViewColumn:{
        flex:1,
        margin:10,
        flexDirection:'column',

    },
    ViewImage:{
            alignItems:'center',
            flexDirection:'column',
            flex:1,
        margin:10
    },
    AvatarStyle:{
        width:'30%',
        height:100
    },
    Img:{
        width:'15%',
        height:'40px'
    },


});

const mapStateToProps = (state: AppState) => ({

    gitHub: state.github,

});

export default connect(
    mapStateToProps,
    {  thunkFetchRepositories,thunkFetchFollowers  }
)(DetailUserPage);


