import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import useRandom from '../hooks/useRandom';

interface RollListProps {
    result: Array<Number>
};

const RollList = ( { result }: RollListProps )=> {

    return (
        <FlatList 
            style={ styles.list }
            data={ result }
            keyExtractor={ ( item: any, index: number ) => {
                return index.toString()
            }}
            renderItem={ ( {item} ) => {
                return (
                    <Text style={ styles.item }>{ item }</Text>
                )
            }}
        />
    );

}

const styles = StyleSheet.create({

    item: {

        paddingVertical: 20,
        backgroundColor: '#666666',
        marginBottom: 1,
        color: '#ffffff',
        fontSize: 16,
        textAlign: 'center',

    },
    list: {

    },

});

export default RollList;