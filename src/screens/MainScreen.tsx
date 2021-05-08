import React from 'react';
import { StyleSheet, StatusBar, View } from 'react-native';
import { Text } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import RollButton from '../components/RollButton';
import RollList from '../components/RollList';
import useRandom from '../hooks/useRandom';

const MainScreen = () => {

    const [generateRandom, clearResult, result, errorMsg] = useRandom();

    return (
        <SafeAreaView style={ styles.container }>
            <StatusBar 
                translucent
                backgroundColor='transparent' 
                barStyle='light-content'
            />
                
            <Text h2 style={ styles.title }>Really Random</Text>
            <Text style={ styles.subtitle }>A true random dice roller</Text>

            <View style={ styles.btnContainer }>

                <RollButton 
                    title="d4"
                    onPress={ () => {
                            generateRandom( 1, 4, 1 );
                        } 
                    }
                />
                
                <RollButton 
                    title="d6"
                    onPress={ () => {
                            generateRandom( 1, 6, 1 );
                        } 
                    }
                />

                <RollButton 
                    title="d8"
                    onPress={ () => {
                            generateRandom( 1, 8, 1 );
                        } 
                    }
                />

                <RollButton 
                    title="d10"
                    onPress={ () => {
                            generateRandom( 1, 10, 1 );
                        } 
                    }
                />

                <RollButton 
                    title="d12"
                    onPress={ () => {
                            generateRandom( 1, 12, 1 );
                        } 
                    }
                />

                <RollButton 
                    title="d20"
                    onPress={ () => {
                            generateRandom( 1, 20, 1 );
                        } 
                    }
                />

                <RollButton 
                    title="d100"
                    onPress={ () => {
                            generateRandom( 1, 100, 1 );
                        } 
                    }
                />

                <RollButton
                    title="Clear"
                    onPress={ () => {
                            
                            clearResult();

                        }
                    }
                />

            </View>           

            <View style={ styles.listContainer }>
                <Text style={ styles.subtitle }>Rolls</Text>
        
                {
                    ( errorMsg ) ? 
                    <Text style={ styles.error }>{ errorMsg }</Text>
                    : null
                }

                <RollList 
                    result={ result }
                />
            </View>

        </SafeAreaView>
    );

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#111111',
        flex: 1,
    },
    btnContainer:{
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 15,
    },
    listContainer: {
        flex: 2,
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
        marginBottom: 30,
    },
    error: {
        padding: 20,
        backgroundColor: '#ffffff',
        color: '#f00f00',

    },
});

export default MainScreen;