import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image, ImageURISource} from 'react-native';
import {COLOR_HIGHLIGHT,COLOR_NEGATIVE} from '../../Styles/Colors';
import {UserGitHub} from "../../Model/UserGitHub";
import {UtilsImage} from "../../Utils/UtilsImage";
const emptyAvatar = require('../../Assets/images/EmptyAvatar.jpeg');
const RightArrow = require('../../Assets/images/RightArrow.png');
import {FONT_TITLE_WEIGHT} from '../../Styles/Font.js';

interface Props {

    onClick : (clickedReference:UserGitHub) => void ;
    user:UserGitHub;
    showArrow:boolean;


}

interface State {



}

export class CardUser extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);


        this.state = {
            avatar:emptyAvatar,

        }

    }



    render() {
        return (
            <View style={styles.CardContainer} >
                <TouchableOpacity onPress={( () =>this.props.onClick(this.props.user))} >
                    <View style={styles.MainRow} >
                        <View style={styles.leftSizeView}>
                            <Image source={{uri:this.props.user.avatar_url}}
                                   style={styles.ImgStyle}/>


                                <View style={styles.leftSizeView}>
                                    <Text style={styles.textTitleDescription}>{"Username: "}</Text>
                                    <Text style={styles.textTitleDescription}>{this.props.user.login}</Text>
                                </View>

                            </View>

                        {this.props.showArrow&&<Image source={RightArrow} style={styles.ImgStyle}/>}


                    </View>

                </TouchableOpacity>

            </View>

        );
    }
}

const styles = StyleSheet.create({
                CardContainer: {
                margin:5,
                flex:1,
                height:'15%',
                backgroundColor:COLOR_HIGHLIGHT,
                flexDirection: 'column',
                borderRadius: 10,
            },
                CardContainerSelcted: {
                margin:5,
                flex:1,
                flexDirection: 'column',
            },

                Img:{
                width:'5%',
                height:'10px'
            },
                Row:{
                margin:20,
                flexDirection: 'row'
            },
                MainRow:{
                margin:20,
                flexDirection: 'row',
                justifyContent:'space-between',
                alignItems:'center'
            },
                leftSizeView:{
                flexDirection: 'row',
                    alignItems:'center',
                justifyContent: 'flex-start'
            },
                rightSizeView:{
                justifyContent: 'flex-end'
            },
                spaceBetween:{

            },
                ImgStyle:{
                width:40,
                height:40
            },
          ImgStyleArrow:{
               height:40,
              width:40,

          }   ,

        textTitleDescription:{
              fontWeight:FONT_TITLE_WEIGHT,
              paddingLeft:10

            },

            });


export default styles;