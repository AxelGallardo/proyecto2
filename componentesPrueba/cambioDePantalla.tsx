import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const HomeScreen = ({ navigation }) => {
    return (
        <LinearGradient
            colors={['violet', 'indigo', 'blue', 'green', 'yellow', 'orange', 'red']}
            style={styles.container}
        >
            <View style={styles.content}>
                <Text>Hola, este es tu contenido.</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Details')}>
                    <Text>Ir a la siguiente pantalla</Text>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    );
};

const DetailsScreen = () => {
    return (
        <LinearGradient
            colors={['violet', 'indigo', 'blue', 'green', 'yellow', 'orange', 'red']}
            style={styles.container}
        >
            <View style={styles.content}>
                <Text>Esta es la pantalla de detalles.</Text>
            </View>
        </LinearGradient>
    );
};

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Details" component={DetailsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        padding: 20,
        borderRadius: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
    },
});

export default App;
