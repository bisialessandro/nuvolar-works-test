import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {Repository} from "../../Model/Repository";
import {COLOR_HIGHLIGHT, COLOR_NEGATIVE, COLOR_TEXT} from "../../Styles/Colors";
import {FONT_SMALL_SIZE, FONT_TITLE_SIZE, FONT_TITLE_WEIGHT} from "../../Styles/Font.js";

interface  Props {
    repository:Repository;
}
interface State {
    
}

export class CardRepository extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);


    }

    render(){

       return <View style={styles.CardContainer} >

            <View style={styles.leftSizeView}>
                <Text style={styles.textTitle}>{this.props.repository.name}</Text>
                <Text style={styles.textDescription}>{this.props.repository.description}</Text>
            </View>


        </View>
    }
}

const styles = StyleSheet.create({
    CardContainer: {

        borderWidth: 0.5,
        flex:1,
        height:'15%',
        backgroundColor:COLOR_NEGATIVE,
        flexDirection: 'column',
    },

    leftSizeView:{
        flexDirection: 'column',
        justifyContent: 'flex-start',
        padding:20
    },
    textTitle:{
        fontWeight:FONT_TITLE_WEIGHT,
        paddingLeft:10,
        fontSize:FONT_TITLE_SIZE,
        color:COLOR_HIGHLIGHT

    },
    textDescription:{
        fontWeight:FONT_TITLE_WEIGHT,
        paddingLeft:10,
        fontSize:FONT_SMALL_SIZE ,
        color:COLOR_TEXT
    }

});


export default styles;