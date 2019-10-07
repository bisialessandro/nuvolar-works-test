import React from "react";
import {Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {COLOR_HIGHLIGHT, COLOR_NEGATIVE, COLOR_TEXT} from "../Styles/Colors";
const ArrowUp = require( '../Assets/images/ArrowUp.png');
const ArrowDown = require( '../Assets/images/ArrowDown.png');

interface Props {


    title: string;
    renderItem:() => void;


}

interface State {

    isClicked:boolean;

}

export class ShowHiddenComponent extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            isClicked:false
        }

    }

    click = () => {
        this.setState({isClicked:!this.state.isClicked});
    }

    render() {
        return (
            <View>
            <TouchableOpacity style={styles.RowTitleFlat} onPress={()=>this.click()}>
                <View style={styles.ViewColumnCenter}>
                    <Text style={styles.TextTitleFlat}>{this.props.title}</Text>
                </View>
                <View style={styles.ViewColumnCenter}>
                    <View style={styles.ViewAlignRight}>
                        <Image source={this.state.isClicked?ArrowDown:ArrowUp} style={styles.HideableImage}/>
                    </View>
                </View>

            </TouchableOpacity>
                {this.state.isClicked&&this.props.renderItem()}
            </View>
        );
    }
}


// styles
const styles = StyleSheet.create({
    RowTitleFlat:{
        flexDirection: 'row',
        marginTop:30,
        padding:20,
        flex:1,
        alignContent:'center',
        borderRadius: 10,
        backgroundColor:COLOR_NEGATIVE,
    },
    ViewColumnCenter:{
        flexDirection:'column',
        alignContent:'flex-end',
        flex:1
    },
    HideableImage:{

        alignContent: 'flex-end',
    },
    ViewAlignRight:{

        flexDirection:'row-reverse',
    },

    TextTitleFlat:{
        fontSize:19,
        color:COLOR_TEXT,

    },
});