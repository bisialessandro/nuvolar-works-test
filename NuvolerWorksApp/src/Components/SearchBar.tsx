import React from 'react';
import { StyleSheet, Text, View,TextInput} from 'react-native';
import {COLOR_HIGHLIGHT,COLOR_NEGATIVE} from '../Styles/Colors';


export interface Props {

    callback : (filteredList:string) => void ;



}

interface State {


}

export class
SearchBar extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

    }


    filterResultsCallback = (text : string) => {

        this.props.callback(text);
    }


    render() {
        return (
            <View style={styles.root}>
                 <TextInput  style={styles.TextInput}
                             onChangeText={text => this.filterResultsCallback( text )}
                 >

        </TextInput>

            </View>
    );
    }
}

// styles
const styles = StyleSheet.create({
    root: {
        width:'80%',
        alignItems: 'center',
        alignSelf: 'center',
    },
    buttons: {
        flexDirection: 'row',
        minHeight: 70,
        alignItems: 'stretch',
        alignSelf: 'center',
        borderWidth: 5,
    },
    button: {
        flex: 1,
        paddingVertical: 0,
    },
    greeting: {
        color: '#999',
        fontWeight: 'bold',
    },
    TextInput: {
        marginTop: 0,
        width:'80%',
        borderBottomWidth: 2,
        borderBottomColor: COLOR_HIGHLIGHT,
        backgroundColor:COLOR_NEGATIVE,
        padding:10
    }
});