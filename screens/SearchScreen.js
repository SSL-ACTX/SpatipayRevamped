import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const SearchScreen = () => {
    const navigation = useNavigation();
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerContent}>
                    <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                        <Ionicons name="chevron-back-outline" size={30} color="white" />
                    </TouchableOpacity>
                    <Text style={styles.headerText}>Search</Text>
                    <TouchableOpacity style={styles.cameraIcon} onPress={() => console.log("Camera Pressed")}>
                        <Ionicons name="camera-outline" size={25} color="white" />
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>

                <View style={styles.searchContainer}>
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Topic, Artist, Song"
                        placeholderTextColor="#888"
                        onChangeText={setSearchTerm}
                        value={searchTerm}
                    />
                </View>

                <View style={styles.scrollViewContent}>
                    <Text style={styles.sectionTitle}>Discover something new</Text>
                    <View style={styles.discoverContainer}>
                        <TouchableOpacity style={styles.discoverItem} onPress={() => console.log("Anime Pressed")}>
                            <Image
                                source={{ uri: 'https://static.wikia.nocookie.net/bocchi-the-rock/images/f/f8/Episode_1-1.png/revision/latest?cb=20221018100438' }}
                                style={styles.discoverImage}
                            />
                            <Text style={styles.discoverText}>#anime</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.discoverItem} onPress={() => console.log("Future Bass Pressed")}>
                            <Image
                                source={{ uri: 'https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84850f7f09b9c2d2f49238d8fb' }}
                                style={styles.discoverImage}
                            />
                            <Text style={styles.discoverText}>#future bass</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.discoverItem} onPress={() => console.log("Mangas Pressed")}>
                            <Image
                                source={{ uri: 'https://images2.alphacoders.com/132/thumb-350-1325351.webp' }}
                                style={styles.discoverImage}
                            />
                            <Text style={styles.discoverText}>#mangas</Text>
                        </TouchableOpacity>
                    </View>

                    <Text style={styles.sectionTitle}>Browse all</Text>
                    <View style={styles.browseContainer}>
                        <TouchableOpacity style={styles.browseItem} onPress={() => console.log("Music Pressed")}>
                            <View style={styles.browseImageContainer}>
                                <Image
                                    source={{ uri: 'https://img.freepik.com/free-photo/cartoon-style-music-concept_23-2151056767.jpg?semt=ais_hybrid' }}
                                    style={styles.browseImage}
                                />
                            </View>
                            <Text style={styles.browseText}>Music</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.browseItem} onPress={() => console.log("Podcast Pressed")}>
                            <View style={styles.browseImageContainer}>
                                <Image
                                    source={{ uri: 'https://media.wired.com/photos/620eb0f39266d5d11c07b3c5/master/w_2560%2Cc_limit/Gear-Podcast-Gear-1327244548.jpg' }}
                                    style={styles.browseImage}
                                />
                            </View>
                            <Text style={styles.browseText}>Podcasts</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.browseItem} onPress={() => console.log("Live Events Pressed")}>
                            <View style={styles.browseImageContainer}>
                                <Image
                                    source={{ uri: 'https://media.istockphoto.com/id/936658580/photo/laser-show-rays-in-nightlife-party.jpg?s=612x612&w=0&k=20&c=jmsLCU-EJpLvF4LI8Xt2fiPV_6la_RsjBL2wuyVQpnQ=' }}
                                    style={styles.browseImage}
                                />
                            </View>
                            <Text style={styles.browseText}>Live Events</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.browseItem} onPress={() => console.log("Made for You Pressed")}>
                            <View style={styles.browseImageContainer}>
                                <Image
                                    source={{ uri: 'https://media.istockphoto.com/id/1225389480/photo/wireless-headphones-on-synthesizer-keyboard.jpg?s=612x612&w=0&k=20&c=f7pFOPHtN16JTN4Bt1zjBdOYnHveHU8cDUiT1Z-6i8M=' }}
                                    style={styles.browseImage}
                                />
                            </View>
                            <Text style={styles.browseText}>Made for You</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.browseItem} onPress={() => console.log("Romantic Pressed")}>
                            <View style={styles.browseImageContainer}>
                                <Image
                                    source={{ uri: 'https://media.istockphoto.com/id/185321380/photo/heart-on-music-sheet.jpg?s=612x612&w=0&k=20&c=wUrVRSTueobq3TxVyrmfUw86wVHSl-Y1nm3SC0N3Z5k=' }}
                                    style={styles.browseImage}
                                />
                            </View>
                            <Text style={styles.browseText}>Romantic</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.browseItem} onPress={() => console.log("Pop Pressed")}>
                            <View style={styles.browseImageContainer}>
                                <Image
                                    source={{ uri: 'https://media.istockphoto.com/id/1178171491/photo/flat-lay-retro-80s-pop-culture-objects-vinyl-player-headphones-video-tapes-film-camera-with.jpg?s=612x612&w=0&k=20&c=j1ruoXTQ2K_W0OUV8mrKcZrGpvy0-Cdxg_VH7v0cfHo=' }}
                                    style={styles.browseImage}
                                />
                            </View>
                            <Text style={styles.browseText}>Pop</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </ScrollView>

            <View style={styles.footer}>
                <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('HomeScreen')}>
                    <Ionicons name="home-outline" size={24} color="#fff" />
                    <Text style={styles.footerButtonText}>Home</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.footerButton}>
                    <Ionicons name="search-outline" size={24} color="#fff" />
                    <Text style={styles.footerButtonText}>Search</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('AboutUsScreen')}>
                    <Ionicons name="people-outline" size={24} color="#fff" />
                    <Text style={styles.footerButtonText}>About Us</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
    },
    header: {
        backgroundColor: '#121212',
        padding: 20,
        paddingTop: 40,
    },
    headerContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    backButton: {
        padding: 10,
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    cameraIcon: {
        padding: 10,
    },
    searchContainer: {
        marginTop: 20,
        backgroundColor: '#232b2b',
        borderRadius: 20,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1.5,
        borderColor: '#1ed760',
        marginHorizontal: 18,

    },
    searchInput: {
        flex: 1,
        color: '#fff',
        fontSize: 16,
        marginLeft: 10,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        marginLeft: 20,
        marginTop: 20,
        marginBottom: 10,
    },
    discoverContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    discoverItem: {
        width: '30%',
        alignItems: 'center',
        marginBottom: 20,
    },
    discoverImage: {
        width: '100%',
        height: 200,
        borderRadius: 14,
    },
    discoverText: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: -30,
        textShadowColor: 'rgba(0, 0, 0, 0.7)', // Shadow color (black with opacity)
        textShadowOffset: { width: 1, height: 1 }, // Shadow offset
        textShadowRadius: 2, // Shadow blur radius
    },
    browseContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    browseItem: {
        width: '48%',
        marginBottom: 25,
    },
    browseImageContainer: {
        backgroundColor: '#f59fba', // Pink/purple background
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        marginVertical: 5,
        overflow: 'hidden',
    },
    browseImage: {
        width: '100%',
        height: 100,
    },
    browseText: {
        marginTop: -50,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
        textShadowColor: 'rgba(0, 0, 0, 0.7)', // Shadow color (black with opacity)
        textShadowOffset: { width: 1, height: 1 }, // Shadow offset
        textShadowRadius: 2, // Shadow blur radius
    },
    separator: {
        paddingVertical: 10,
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
    scrollViewContent: {
        paddingBottom: 60, // Adjust as needed
    }
});

export default SearchScreen;
