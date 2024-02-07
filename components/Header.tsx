import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>Olimpaaao</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'blue',
        padding: 20,
        alignItems: 'center',
    },
    headerText: {
        color: 'white',
        fontSize: 20,

    },
});

export default Header;

