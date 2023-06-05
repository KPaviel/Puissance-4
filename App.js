import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Logo from './assets/logo.png';

const Stack = createStackNavigator();

function AccueilScreen({ navigation }) {
    const handleNeedHelp = () => {
        navigation.navigate('AideAccueil');
    };

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.logoContainer}>
                    <Image source={Logo} style={styles.logo} />
                </View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Connexion')}
                >
                    <Text style={styles.buttonText}>Connexion</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Inscription')}
                >
                    <Text style={styles.buttonText}>Inscription</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleNeedHelp}>
                    <Text style={styles.helpText}>Besoin d'aide ?</Text>
                </TouchableOpacity>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}



function InscriptionScreen({ navigation }) {
    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleUsernameChange = (text) => {
        setUsername(text);
    };

    const handleNameChange = (text) => {
        setName(text);
    };

    const handleEmailChange = (text) => {
        setEmail(text);
    };

    const handleSubmit = () => {
        console.log('Nom d\'utilisateur:', username);
        console.log('Nom:', name);
        console.log('Adresse e-mail:', email);
    };
    const handleNeedHelp = () => {
        navigation.navigate('AideInscription');
    };

    const handleAlreadyHaveAccount = () => {
        navigation.navigate('Connexion');
    };

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <TextInput
                    style={styles.input}
                    placeholder="Nom d'utilisateur"
                    value={username}
                    onChangeText={handleUsernameChange}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Nom"
                    value={name}
                    onChangeText={handleNameChange}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Adresse e-mail"
                    value={email}
                    onChangeText={handleEmailChange}
                />
                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                    <Text style={styles.buttonText}>S'inscrire</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleAlreadyHaveAccount}>
                    <Text style={styles.helpText}>Déjà un compte ?</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

function ConnexionScreen() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (text) => {
        setUsername(text);
    };

    const handlePasswordChange = (text) => {
        setPassword(text);
    };

    const handleSubmit = () => {
        console.log('Nom d\'utilisateur:', username);
        console.log('Mot de passe:', password);
    };

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <TextInput
                    style={styles.input}
                    placeholder="Nom d'utilisateur"
                    value={username}
                    onChangeText={handleUsernameChange}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Mot de passe"
                    secureTextEntry
                    value={password}
                    onChangeText={handlePasswordChange}
                />
                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                    <Text style={styles.buttonText}>Se connecter</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

function AideAccueilScreen() {
    const [email, setEmail] = useState('');

    const handleEmailChange = (text) => {
        setEmail(text);
    };

    const handleSubmit = () => {
        console.log('Adresse e-mail:', email);
    };

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <TextInput
                    style={styles.input}
                    placeholder="Adresse e-mail"
                    value={email}
                    onChangeText={handleEmailChange}
                />
                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                    <Text style={styles.buttonText}>Envoyer</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFC00',
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoContainer: {
        marginBottom: 20,
    },
    logo: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
    },
    button: {
        backgroundColor: 'black',
        paddingVertical: 13,
        paddingHorizontal: 25,
        borderRadius: 20,
        marginVertical: 11,
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    helpContainer: {
        marginTop: 0,
        fontSize: 17,
    },
    helpText: {
        fontSize: 12,
        fontStyle: 'italic',
        color: '#555555',
    },
    input: {
        width: '80%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
});

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Accueil" component={AccueilScreen} />
                <Stack.Screen name="Inscription" component={InscriptionScreen} />
                <Stack.Screen name="Connexion" component={ConnexionScreen} />
                <Stack.Screen name="AideAccueil" component={AideAccueilScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

