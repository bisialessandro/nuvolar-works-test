import React from 'react';
import {UserGitHub} from "../Model/UserGitHub";
import {GitHubServices} from "../Network/GitHubServices";
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
const BackgroundApp = require( '../Assets/images/BackgroundApp.png');


interface Props {
    navigation: NavigationStackProp<{user:UserGitHub}>;


};
interface State {

    followers: Array<UserGitHub>;
    repositories:Array<Repository>;
    userGithub:UserGitHub;

}

export class DetailUserPage extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        let userDetails = this.props.navigation.getParam('user', null);

        if(userDetails==null){
            console.log("Error",userDetails);
        }



      this.state = ({
            followers:[],
            repositories:[],
            userGithub:userDetails,

        })

    }

    async componentDidMount(){


      let result = await GitHubServices.prototype.getFollowers("",this.state.userGithub.login);

      if(result!=null) {

          this.setState({
              followers: result
          });
      }
        let resultRepo = await GitHubServices.prototype.getRepositories("",this.state.userGithub.login);

        if(resultRepo!=null) {

            this.setState({
                repositories: resultRepo
            });
        }

        console.log("Error",resultRepo);
    }

    onClick = (value:UserGitHub) => {

    }


    renderItemUser = (item:UserGitHub) => <CardUser
        user={item}
        onClick={this.onClick}
        showArrow={false}
    />

    renderItemUserFlat = () => <FlatList<UserGitHub>
        data={this.state.followers}
        renderItem={item => this.renderItemUser(item.item)} />

    renderItemRepository = (item:Repository) =><CardRepository repository={item} />

    renderItemRepositoryFlat = () =><FlatList<Repository>
            data={this.state.repositories}
            renderItem={item => this.renderItemRepository(item.item)}
        />



            render() {
        return (
            <SafeAreaView >
                <ImageBackground source={BackgroundApp} style={styles.ImageBackground} >

                    <ScrollView>

                        <View style={styles.ViewColumn}>
                            <View style={styles.ViewImage}>
                                    <Image source={ {uri:this.state.userGithub.avatar_url}} style={styles.AvatarStyle}/>
                            </View>
                            <CardDetailRow title={"Username: "}  value={this.state.userGithub.login} />
                            <CardDetailRow title={"GitUrl:   "}  value={this.state.userGithub.gists_url} />
                            <CardDetailRow title={"HtmlUrl:   "}  value={this.state.userGithub.html_url} />

                            <ShowHiddenComponent renderItem={this.renderItemUserFlat} title={"Followers:"}/>

                           <ShowHiddenComponent renderItem={this.renderItemRepositoryFlat}  title={"Repositories:"} />

                        </View>


                    </ScrollView>



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

export default styles;
