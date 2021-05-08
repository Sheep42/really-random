import React from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import RollButton from '../components/RollButton';
import RollList from '../components/RollList';
import useRandom from '../hooks/useRandom';

const MainScreen = () => {

    const [generateRandom, result, errorMsg] = useRandom();

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
                onPress={ () => {
                        generateRandom( 1, 4, 1 );
                    } 
                }
            />

            <RollList 
                result={ result }
            />
 
            {
                ( errorMsg ) ? 
                    <Text style={ styles.error }>{ errorMsg }</Text>
                : null
            }
            
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
    error: {
        padding: 20,
        backgroundColor: '#ffffff',
        color: '#f00f00',

    },
    text: {
        color: '#ffffff',
    }
});

export default MainScreen;