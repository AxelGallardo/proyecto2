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
            <View style={styles.olimpoContainer}>
                <Text style={styles.headerText}>OlimpoChat</Text>
            </View>
            <View style={styles.switchContainer}>
                <TouchableOpacity onPress={toggleSwitch} style={styles.switchButton}>
                    <Text style={styles.switchText}>{isEnabled ? 'Visible' : 'Oculto'}</Text>
                </TouchableOpacity>
                <Switch
                    trackColor={{ false: '#767577', true: '#FF00FF' }}
                    thumbColor={isEnabled ? 'white' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>

            <TouchableOpacity onPress={handleSettingsPress} style={styles.settingsButton}>
                <Icon name="settings" size={24} color="white" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'transparent', // Cambiado el color de fondo
        paddingVertical: 20, // Modificado para mayor espacio
        paddingHorizontal: 15, // Modificado para mayor espacio
    },
    switchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    switchButton: {
        paddingHorizontal: 10, // Añadido para espaciar el botón del switch
    },
    switchText: {
        color: 'white',
        marginRight: 5,
        fontSize: 16, // Ajustado el tamaño de fuente
    },
    olimpoContainer: {
        flex: 1, // Modificado para ocupar espacio restante
        alignItems: 'flex-start', // Alineado hacia la izquierda
        justifyContent: 'flex-start', // Alineado hacia la izquierda
    },
    headerText: {
        color: 'white',
        fontSize: 22,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    settingsButton: {
        padding: 10,
    },
});

export default Header;
