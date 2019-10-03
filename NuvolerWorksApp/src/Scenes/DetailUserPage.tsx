import React from 'react';
import {UserGitHub} from "../Model/UserGitHub";
import {GitHubServices} from "../Network/GitHubServices";
import {
    Animated,
    FlatList,
    Image,
    ImageBackground,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text, TouchableOpacity,
    View
} from "react-native";
import {CardDetailRow} from '../Components/CardComponents/CardDetailRow';
import { NavigationStackProp } from 'react-navigation-stack';
import {COLOR_HIGHLIGHT, COLOR_NEGATIVE, COLOR_TEXT} from "../Styles/Colors";
import {Repository} from "../Model/Repository";
import {CardUser} from "../Components/CardComponents/CardUser";
import {CardRepository} from "../Components/CardComponents/CardRepository";
const BackgroundApp = require( '../Assets/images/BackgroundApp.png');
const ArrowUp = require( '../Assets/images/ArrowUp.png');
const ArrowDown = require( '../Assets/images/ArrowDown.png');

interface Props {
    navigation: NavigationStackProp<{user:UserGitHub}>;


};
interface State {

    followers: Array<UserGitHub>;
    repositories:Array<Repository>;
    userGithub:UserGitHub;
    isShowingFollowers:boolean;
    isShowingRepositories:boolean;

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
            isShowingFollowers:false,
            isShowingRepositories:false
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

  onPressShowFollowers = () => {
        this.setState({
             isShowingFollowers:!this.state.isShowingFollowers
        });
  }
    onPressShowRepositories = () => {
        this.setState({
            isShowingRepositories:!this.state.isShowingRepositories
        });
    }

    renderItem = (item:UserGitHub) => <CardUser
        user={item}
        onClick={this.onClick}
        showArrow={false}
    />

    renderItemRepository = (item:Repository) => <CardRepository
        repository={item}   />

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
                            <TouchableOpacity style={styles.RowTitleFlat} onPress={this.onPressShowFollowers}>
                                <Text style={styles.TextTitleFlat}>{"Followers:"}</Text>
                                <View style={styles.ViewAlignRight}>
                                     <Image source={this.state.isShowingFollowers?ArrowDown:ArrowUp} style={styles.HideableImage}/>
                                </View>

                            </TouchableOpacity>
                            {this.state.isShowingFollowers&&<FlatList<UserGitHub>
                            data={this.state.followers}
                            renderItem={item => this.renderItem(item.item)}
                        />}

                            <TouchableOpacity style={styles.RowTitleFlat} onPress={this.onPressShowRepositories}>
                                <Text style={styles.TextTitleFlat}>{"Repositories:"}</Text>
                                <View style={styles.ViewAlignRight}>
                                    <Image source={this.state.isShowingRepositories?ArrowDown:ArrowUp} style={styles.HideableImage}/>
                                </View>

                            </TouchableOpacity>
                            {this.state.isShowingRepositories&&<FlatList<Repository>
                                data={this.state.repositories}
                                renderItem={item => this.renderItemRepository(item.item)}
                            />}

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
    RowTitleFlat:{
        flexDirection: 'row',
        marginTop:30,
        padding:20,
        flex:1,
        borderRadius: 10,
        backgroundColor:COLOR_NEGATIVE,
    },
    TextTitleFlat:{
        fontSize:19,
        color:COLOR_TEXT,

    },
    HideableImage:{
        alignContent: 'center',
    },
    ViewAlignRight:{
        alignContent: 'center',
        flex:1,
        flexDirection:'column',

    }
});

export default styles;
