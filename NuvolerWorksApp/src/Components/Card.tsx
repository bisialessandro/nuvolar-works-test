import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image, ImageURISource} from 'react-native';
import {COLOR_HIGHLIGHT,COLOR_NEGATIVE} from '../Styles/Colors';
import {UserGitHub} from "../Model/UserGitHub";
import {UtilsImage} from "../Utils/UtilsImage";
const emptyAvatar = require('../Assets/EmptyAvatar.jpeg');
import {FONT_TITLE_WEIGHT} from '../Styles/Font.tsx';

export interface Props {

    onClick : (clickedReference:UserGitHub) => void ;
    user:UserGitHub;

}

interface State {


}

export class Card extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);


        this.state = {
            avatar:emptyAvatar
        }

    }



    render() {
        return (
            <View style={styles.CardContainer} >
                <TouchableOpacity onPress={( () =>this.props.onClick)} >
                    <View style={styles.RowStatistics} >
                        <View style={styles.leftSizeView}>
                            <Image source={{uri:this.props.user.avatar_url}} style={styles.ImgStyle}/>

                            <Text style={styles.textTitleDescription}>{}</Text>
                            <Text style={styles.textTitleDescription}>{this.props.user.login}</Text>
                        </View>


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
                height:'15%',
                backgroundColor:' -webkit-linear-gradient(left, rgba(255,175,75,1) 0%, rgba(241,111,92,1) 39%, rgba(255,175,75,1) 62%, rgba(255,175,75,1) 65%, rgba(255,146,10,1) 89%, rgba(255,146,10,1) 100%',
                flexDirection: 'column',
                borderRadius: 10,
            },
                Img:{
                width:'5%',
                height:'10px'
            },
                Row:{
                margin:20,
                flexDirection: 'row'
            },
                RowStatistics:{
                margin:20,
                flexDirection: 'row',
                justifyContent:'space-between',
                alignItems:'center'
            },
                leftSizeView:{
                flexDirection: 'row',

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

        textTitleDescription:{
              fontWeight:FONT_TITLE_WEIGHT,
              paddingLeft:10



            },

            });


export default styles;