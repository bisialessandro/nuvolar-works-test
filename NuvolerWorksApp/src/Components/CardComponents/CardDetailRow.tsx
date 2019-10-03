import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {COLOR_NEGATIVE} from '../../Styles/Colors';
import {FONT_TITLE_WEIGHT} from '../../Styles/Font';


interface Props {
    title:string;
    value:string;
}

interface State {


}

export class CardDetailRow extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);


    }

    render() {
        return (
            <View style={styles.CardContainer} >
                            <View style={styles.leftSizeView}>
                                <Text style={styles.textTitle}>{this.props.title}</Text>
                                <Text style={styles.textDescription}>{this.props.value}</Text>
                            </View>
            </View>

        );
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
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'flex-start',
        padding:20
    },
    textTitle:{
        fontWeight:FONT_TITLE_WEIGHT,
        paddingLeft:10

    },
    textDescription:{
        fontWeight:FONT_TITLE_WEIGHT,
        paddingLeft:10

    },

});


export default styles;