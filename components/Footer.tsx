import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => {
    return (
        <View style={styles.footer}>
            <Text style={styles.footerText}>Pie de página</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    footer: {
        backgroundColor: 'blue',
        padding: 20,
        alignItems: 'center',
    },
    footerText: {
        color: 'white',
        fontSize: 20,
    },
});

export default Footer;
