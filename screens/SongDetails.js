import React, { useState } from 'react'; // Import useState here 
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';


const SongDetails = () => {
    const route = useRoute();
    const song = route.params.song;
    const lyrics = song.lyrics;
    const navigation = useNavigation(); // direct access sht
    const [progress, setProgress] = useState(0.2); // State for progress

    // Simulate progress (replace with your actual logic)
    // You'd typically update progress based on music playback
    const updateProgress = () => {
        setTimeout(() => {
            const newProgress = progress + 0;
            if (newProgress <= 1) {
                setProgress(newProgress);
                updateProgress(); // Keep updating until it reaches 1
            }
        }, 3000); // Adjust the timeout for the speed of the progress bar
    };

    // Call updateProgress to start the simulation
    updateProgress();

    return (
        <View style={styles.container}>
            <View style={styles.songInfoContainer}>
                <TouchableOpacity style={styles.backButtonContainer} onPress={() => navigation.navigate('HomeScreen')}>
                    <Ionicons name="chevron-back-outline" size={30} color="#fff" />
                </TouchableOpacity>
                <Text style={styles.songTitle}>{song.title}</Text>
                <TouchableOpacity style={styles.optionsButtonContainer}>
                    <Ionicons name="ellipsis-vertical-outline" size={30} color="#fff" />
                </TouchableOpacity>
            </View>

            <Image source={{ uri: song.imageUrl }} style={styles.songImage} />

            <View style={styles.songDetailsContainer}>
                <Text style={styles.songArtist}>{song.artist}</Text>
                {/* Fake progress bar */}
                <View style={styles.progressBar}>
                    <View style={[styles.progressBarFill, { width: `${progress * 100}%` }]} />
                </View>

                <View style={styles.playerControls}>
                    <Text style={styles.currentTime}>0:24</Text>
                    <Ionicons name="shuffle-outline" size={25} color="white" />
                    <Ionicons name="play-back-outline" size={25} color="white" />
                    <View style={styles.playButton}>
                        <Ionicons name="play-circle-outline" size={30} color="white" />
                    </View>
                    <Ionicons name="play-forward-outline" size={25} color="white" />
                    <Ionicons name="repeat-outline" size={25} color="white" />
                    <Text style={styles.totalTime}>03:40</Text>
                </View>

                {/* Lyrics - adjust styling based on the image*/}
                <ScrollView style={styles.lyricsScrollContainer} contentContainerStyle={styles.lyricsScrollContentContainer}>
                    <View style={styles.lyricsContainer}>
                        {song.lyrics.map((section, index) => (
                            <View key={index} style={styles.lyricsSectionContainer}>
                                <Text style={styles.lyricsSectionTitle}>{section.section}</Text>
                                {section.lines.map((line, lineIndex) => (
                                    <Text key={lineIndex} style={styles.lyricsText}>
                                        {line}
                                    </Text>
                                ))}
                            </View>
                        ))}
                    </View>
                </ScrollView>


            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212', // Dark background
    },
    songInfoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
    },
    backButtonContainer: {
        padding: 10,
    },
    songTitle: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
    },
    optionsButtonContainer: {
        padding: 10,
    },
    songImage: {
        width: '100%',
        height: 200,
        borderRadius: 10,
    },
    songDetailsContainer: {
        padding: 20,
    },
    songArtist: {
        fontSize: 16,
        color: '#fff',
        marginBottom: 15,
    },
    currentTime: {
        color: '#fff',
        fontSize: 14,
    },
    playerControls: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingHorizontal: 20,
        paddingVertical: 5,
        paddingBottom: 25, 
        borderBottomWidth: 0.3,
        borderBlockColor: 'gray',
    },
    playButton: {
        backgroundColor: '#1db954',
        borderRadius: 60,
        padding: 10,
        borderWidth: 1.5,
        borderColor: '#fff',
    },
    totalTime: {
        color: '#fff',
        fontSize: 14,
    },
    lyricsContainer: {
        marginTop: 20,
        backgroundColor: '#232b2b',
        padding: 15,
        borderRadius: 10,
    },
    lyricsText: {
        color: '#999',
        fontSize: 16,
        lineHeight: 24,
    },
    lyricsSectionTitle: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
        paddingTop: 10,
        paddingBottom: 10,
    },
    lyricsScrollContentContainer: {
        paddingBottom: 450,
    },
    progressBar: {
        width: '90%',
        height: 5,
        alignSelf: 'center',
        backgroundColor: '#333',
        borderRadius: 5,
        marginVertical: 10,
    },
    progressBarFill: {
        height: '100%',
        backgroundColor: '#1db954', // Spotify green
        borderRadius: 5,
    },
});

export default SongDetails; 