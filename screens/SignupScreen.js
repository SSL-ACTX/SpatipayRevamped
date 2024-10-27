import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SignupScreen = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            {/* Logo */}
            <Image
                source={require('../assets/spatipay.png')} // Replace with your logo
                style={styles.logo}
                resizeMode="cover"
            />

            <Text style={styles.welcomeText}>Welcome</Text>
            <Text style={styles.signInText}>Sign in to continue</Text>

            {/* Username Input */}
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Username"
                    placeholderTextColor="#888"
                    onChangeText={setUsername}
                    value={username}
                />
            </View>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    placeholderTextColor="#888"
                    onChangeText={setEmail}
                    value={email}
                />
            </View>

            {/* Password Input */}
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    placeholderTextColor="#888"
                    onChangeText={setPassword}
                    value={password}
                    secureTextEntry
                />
            </View>

            {/* Login Button */}
            <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('HomeScreen')}>
                <Text style={styles.loginButtonText}>Sign In</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
                <Text style={styles.noAccountText}>Already have an account? <Text style={{ color: '#1db954' }}>Sign in!</Text></Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    logo: {
        width: 100,
        height: 100,
        borderRadius: 60,
        marginBottom: 30,
        zIndex: 2,
    },
    welcomeText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginBottom: 10,
    },
    signInText: {
        fontSize: 16,
        color: '#FFFFFF',
        marginBottom: 30,
    },
    inputContainer: {
        width: '100%',
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#333333',
        borderRadius: 8,
        paddingHorizontal: 18,
        paddingVertical: 12,
    },
    input: {
        color: '#gray',
    },
    loginButton: {
        backgroundColor: '#1DB954',
        paddingHorizontal: 30,
        paddingVertical: 15,
        borderRadius: 24,
        marginBottom: 20,
    },
    loginButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
        textShadowColor: 'rgba(0, 0, 0, 0.7)', // Shadow color (black with opacity)
        textShadowOffset: { width: 1, height: 1 }, // Shadow offset
        textShadowRadius: 2, // Shadow blur radius
    },
    noAccountText: {
        marginTop: 10,
        fontSize: 16,
        color: '#888',
        textAlign: 'center',
    },
});

export default SignupScreen;