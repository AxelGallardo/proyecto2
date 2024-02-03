import React from 'react';
import { View, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const App = () => {
    return (
        <LinearGradient
            colors={['#FF007F', '#FF6FD8', '#8B008B', '#4B0082']} // Tonos de fucsia y morado
            style={styles.container}>
            {/* Contenido de tu aplicación */}
            <View style={styles.content}>
                <Text style={styles.text}>Hola, este es tu contenido.</Text>
            </View>
        </LinearGradient>
    );
};

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        padding: 20,
        borderRadius: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.8)', // Fondo semi-transparente blanco para mejorar la legibilidad
    },
    text: {
        color: '#333', // Color del texto para mejorar la legibilidad
    },
};

export default App;
