import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, ScrollView, Image } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const AlbumScreen = () => {
  const navigation = useNavigation(); // direct access sht

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="chevron-back-outline" size={30} color="white" />
        <Text style={styles.headerText}>Mood</Text>
        <Ionicons name="ellipsis-vertical-outline" size={30} color="white" />
      </View>

      <ImageBackground
        source={{ uri: 'https://cdns-images.dzcdn.net/images/cover/1a2ff1ad7241739d524583d6f775c379/0x1900-000000-80-0-0.jpg' }}
        style={styles.albumCover}
        blurRadius={3}
      >
        <Image source={require('../assets/blackgradient.png')} style={styles.gradientBlack} />

        <View style={styles.albumInfo}>
          <Text style={styles.albumTitle}>Mood - Chill</Text>
          <Text style={styles.albumArtist}>Playlist</Text>
          <Ionicons style={styles.playButton} name="play-circle-outline" size={30} color="white" />
          <Ionicons style={styles.shuffleButton} name="shuffle-outline" size={30} color="white" />
        </View>
      </ImageBackground>

      <ScrollView>
        <View style={styles.songList}>
          {songData.map((song, index) => (
            <TouchableOpacity key={index} style={styles.songItem}>
              <View style={styles.songInfo}>
                <Text style={[styles.songTitle, song.title === 'Let Me Down Slowly' ? styles.highlightedSongTitle : null]}>{song.title}</Text>
                <Text style={styles.songArtist}>{song.artist}</Text>
              </View>
              <View style={styles.songActions}>
                <Ionicons name="play-outline" size={20} color="white" />
                <Text>     </Text>
                <Ionicons name="heart-outline" size={20} color="#1db954" />
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('HomeScreen')}>
          <Ionicons name="home-outline" size={24} color="#fff" />
          <Text style={styles.footerButtonText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('SearchScreen')}>
          <Ionicons name="search-outline" size={24} color="#fff" />
          <Text style={styles.footerButtonText}>Search</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.footerButton}>
          <Ionicons name="people-outline" size={24} color="#fff" />
          <Text style={styles.footerButtonText}>About Us</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const songData = [
  { title: 'Let Me Down Slowly', artist: 'Alec Benjamin' },
  { title: 'Love You For A Long Time', artist: 'Maggie Rogers' },
  { title: "I Don't Want It At All", artist: 'Kim Petras' },
  { title: 'Love on Top', artist: 'Beyonce' },
  { title: 'Sunday Best', artist: 'Surfaces' },
  { title: "Can't Stop the Feeling", artist: 'Justin Timberlake' },
  { title: '22', artist: 'Taylor Swift' },
  { title: "I'm Coming Out", artist: 'Diana Ross' },
  { title: 'Shut Up and Dance', artist: 'Walk the Moon' },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 20,
    position: 'absolute',
    width: '100%',
    zIndex: 1,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textShadowColor: 'rgba(0, 0, 0, 0.9)',
    textShadowOffset: { width: 4, height: 2 },
    textShadowRadius: 5,
  },
  albumCover: {
    height: 350,
    width: '100%',
    justifyContent: 'flex-end', // Align content to the bottom
    paddingBottom: 30,
    borderBottomWidth: 5,
    borderBottomColor: 'lightgray',
  },
  albumInfo: {
    paddingHorizontal: 20,
    marginBottom: 5,
  },
  albumTitle: {
    position: 'absolute',
    top: 5,
    left: 20,
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1ed760',
    textShadowColor: 'rgba(0, 0, 0, 0.9)',
    textShadowOffset: { width: 4, height: 2 },
    textShadowRadius: 5,
  },
  albumArtist: {
    position: 'absolute',
    top: 35,
    left: 20,
    fontSize: 20,
    color: 'lightgray',
    textShadowColor: 'rgba(0, 0, 0, 0.9)',
    textShadowOffset: { width: 4, height: 2 },
    textShadowRadius: 5,
  },
  playButton: {
    width: 60,
    height: 60,
    backgroundColor: '#1da954',
    borderRadius: 60,
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: 1.5,
    borderColor: '#fff',
    marginLeft: '85%',
  },
  shuffleButton: {
    position: 'absolute',
    width: 80,
    height: 80,
    right: 55,
    paddingHorizontal: 15,
    paddingVertical: 15,
    textShadowColor: 'rgba(0, 0, 0, 0.9)',
    textShadowOffset: { width: 4, height: 2 },
    textShadowRadius: 5,
  },
  songList: {
    marginTop: 10,
  },
  songItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  highlightedSongTitle: {
    color: '#1ed760', // or any other color you want
  },
  songInfo: {
    flex: 1, // Allow song title and artist to take available space
  },
  songTitle: {
    fontSize: 16,
    color: 'white',
  },
  songArtist: {
    fontSize: 15,
    color: '#808080',
  },
  songActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  // Footer Styles
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#232b2b',
    position: 'absolute', // Position it absolutely
    bottom: 0, // Place it at the bottom
    width: '100%', // Full width
    paddingTop: 10,
    paddingBottom: 10,
    zIndex: 5,
  },
  footerButton: {
    alignItems: 'center',
  },
  footerIcon: {
    width: 24,
    height: 24,
    marginBottom: 5,
    tintColor: '#fff',
  },
  footerButtonText: {
    color: '#fff',
    fontSize: 12,
  },
  gradientBlack: {
    marginBottom: -100,
  }
});

export default AlbumScreen;