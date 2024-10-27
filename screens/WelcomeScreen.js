import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const WelcomeScreen = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground source={require('../assets/blackwave.jpg')} style={styles.backgroundImage}>
      <View style={styles.overlay} /> 
      <View style={styles.container}>
        <Image source={require('../assets/spatipay.png')} style={styles.walletImage} />
        <Text style={styles.appName}>Spatipay</Text> 
        <Text style={styles.appDescription}>Where Musical Excellence Meets Professionalism</Text> 
        <TouchableOpacity style={styles.getStartedButton} onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={styles.getStartedButtonText}>Get Started</Text> 
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject, 
    backgroundColor: 'rgba(0, 0, 0, 0.86)', 
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  walletImage: {
    width: 200,
    height: 200,
    marginBottom: 10,
    borderRadius: 120,
  },
  appName: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  appDescription: {
    fontSize: 16,
    color: '#888',
    marginBottom: 20,
  },
  getStartedButton: {
    backgroundColor: '#1db954', 
    padding: 15,
    borderRadius: 24,
  },
  getStartedButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default WelcomeScreen;