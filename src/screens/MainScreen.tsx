import React, { useState } from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { roll } from '../api/random';
import RollButton from '../components/RollButton';

const MainScreen = () => {

    const [errorMsg, setErrorMsg] = useState( '' );

    const generateRandom = async () => {

        try {

            const res = await roll( 1, 6, 3 );

            return res.data.result.random.data
        
        } catch( err ) {

            console.log( err );
            setErrorMsg( 'Encountered an error, please try again' );

            return [];

        }
        
    };

    // generateRandom();

    return (
        <SafeAreaView style={ styles.container }>
            <StatusBar 
                translucent
                backgroundColor='transparent' 
                barStyle='light-content'
            />

            <Text h2 style={ styles.title }>Really Random</Text>
            <Text style={ styles.subtitle }>A true random dice roller</Text>

            <RollButton 
                title="Roll d4"
                onPress={ () => console.log( 'd4' ) } 
            />
        </SafeAreaView>
    );

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#111111',
        flex: 1,
    },
    title: {
        textAlign: 'center',
        marginBottom: 20,
        marginTop: 20,
        color: '#ffffff',
    },
    subtitle: {
        fontSize: 15,
        textAlign: 'center',
        color: '#ffffff',
    },
});

export default MainScreen;