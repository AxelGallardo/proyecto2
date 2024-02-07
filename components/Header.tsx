import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Header = () => {
    const [isEnabled, setIsEnabled] = useState(false);

    const toggleSwitch = () => {
        setIsEnabled(previousState => !previousState);
    };

    const handleSettingsPress = () => {
        // Lógica para manejar el press del botón de configuración
        console.log('Botón de configuración presionado');
    };

    return (
        <View style={styles.header}>
            <View style={styles.switchContainer}>
                <TouchableOpacity onPress={toggleSwitch}>
                    <Text style={styles.switchText}>Visible</Text>
                </TouchableOpacity>
                <Switch
                    trackColor={{ false: '#767577', true: '#81b0ff' }}
                    thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>
            <View style={styles.centerContainer}>
                <Text style={styles.headerText}>Olimpochat</Text>
            </View>
            <TouchableOpacity onPress={handleSettingsPress} style={styles.settingsButton}>
                <View style={styles.circle}>
                    <View style={styles.innerCircle} />
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        padding: 20,
    },
    switchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    switchText: {
        color: 'white',
        marginRight: 5,
    },
    centerContainer: {
        flex: 4, // Ocupa aproximadamente 4/5 del espacio restante
        alignItems: 'center',
    },
    headerText: {
        color: 'white',
        fontSize: 24,
        textAlign: 'center',
    },
    settingsButton: {
        padding: 10,
    },
    circle: {
        width: 24,
        height: 24,
        borderRadius: 12,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    innerCircle: {
        width: 16,
        height: 16,
        borderRadius: 8,
        backgroundColor: '#767577',
    },
});

export default Header;
