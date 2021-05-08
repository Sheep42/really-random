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
            data={ result }
            keyExtractor={ ( item: any, index: number ) => {
                return index.toString()
            }}
            renderItem={ ( {item} ) => {
                return (
                    <Text>{ item }</Text>
                )
            }}
        />
    );

}

const styles = StyleSheet.create({

});

export default RollList;