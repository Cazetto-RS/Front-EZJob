import React from 'react';
import { View, Text } from "react-native"
import styles from "../style/StyleHome"

export function Home({navigation}): any {

    function navToSecondPage() {
        navigation.navigate('SeconPage')
    }

    return (
        <View style={styles.container}>
            <Text>Texto</Text>
        </View>
    );
} 