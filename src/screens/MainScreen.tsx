import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import random from '../api/random';

const MainScreen = () => {

    const generateRandom = async () => {

        const res = await random.post( '', { 
            jsonrpc: "2.0",
            method: "generateIntegers",
            params: {
                "apiKey": "load-api-key-here",
                "n": 3,
                "min": 1,
                "max": 6,
                "replacement": true,
                "base": 10,
                "pregeneratedRandomization": null
            },
            id: 1154
        });
    
        console.log( res.data );
    
    };

    // generateRandom();

    return (
        <View>
            <Text>MainScreen</Text>
        </View>
    );

}

const styles = StyleSheet.create({

});

export default MainScreen;