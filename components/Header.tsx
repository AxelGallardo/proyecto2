import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>Olimpo Chat</Text>
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
        fontFamily: 'Alpaca_Scarlett_Demo', // Nombre de la fuente
    },
});

export default Header;
