import React from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface BtnProps {

    title: String,
    onPress: Function,

};

const RollButton = ( { title, onPress }: BtnProps ) => {

    return (
        <TouchableOpacity 
            onPress={ () => onPress() } 
            style={ styles.button }
        >
            <Text style={ styles.buttonText }>{ title }</Text>
        </TouchableOpacity>
    );

}

const styles = StyleSheet.create({
    button: {
        width: '25%',
        textAlign: 'center',
        alignSelf: 'center',
        marginVertical: 30,
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#7ba3d1',
        borderRadius: 5,
    },
    buttonText: {
        fontSize: 16,
        color: '#ffffff',
    },
});

export default RollButton;