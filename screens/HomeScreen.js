import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

import spatipay from '../assets/spatipay.png';

const { width } = Dimensions.get('window');
const CARD_WIDTH = width * 0.95; // 80% of screen width

const HomeScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigation = useNavigation(); // direct access sht
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  const carouselData = [
    { imageUrl: 'https://i.pinimg.com/originals/1f/3c/e3/1f3ce3f2fb77aeb542d616158e3b40a7.gif', genre: 'Chill', quote: "Embrace the tranquility." }, // Chill
    { imageUrl: 'https://i.pinimg.com/originals/bc/57/43/bc5743245f004c7ea45cd8a71991c661.gif', genre: 'Electronic', quote: "Let the beats take over." }, // Electronic
    { imageUrl: 'https://ahaslides.com/wp-content/uploads/2023/12/Music.gif', genre: 'Hip-Hop', quote: "Drop the beat, feel the vibe." }, // Hip Hop
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        (prevIndex + 1) % carouselData.length
      );
    }, 3500); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Scroll to the current index whenever it changes
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        x: currentIndex * CARD_WIDTH,
        animated: true,
      });
    }
  }, [currentIndex]);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={require('../assets/blackwave.jpg')} style={styles.gradientBlack} />

        <View style={styles.titleContainer}>
          <Text style={styles.title}>Listen to your</Text>
          <Text style={styles.title2}>favorite music</Text>
        </View>

        <TouchableOpacity style={styles.profileImageContainer}>
          <Image source={spatipay} style={styles.profileImage} />
        </TouchableOpacity>

        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Topic, Artist, Song"
            placeholderTextColor="#888"
            onChangeText={setSearchTerm}
            value={searchTerm}
          />
        </View>
      </View>

      {/* Content */}
      <ScrollView style={styles.content}>
        {/* Carousel Section */}
        <View style={styles.section}>
          <ScrollView
            ref={carouselRef}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            contentContainerStyle={styles.carouselContainer}
          >
            {carouselData.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.carouselCard}
                activeOpacity={0.8} // Add for visual feedback on press
              >
                <Image source={{ uri: item.imageUrl }} style={styles.carouselImage} />
                <View style={styles.genreContainer}>
                  <Text style={styles.genreText}>{item.genre}</Text>
                  <Text style={styles.genreInfo}>{item.quote}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Top of the Week */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Top of the Week</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {topWeekSongs.map((song, index) => (
              <TouchableOpacity key={index} style={styles.trackCard} onPress={() => navigation.navigate('SongDetails', { song: song })}>
                <Image source={{ uri: song.imageUrl }} style={styles.trackImage} />
                <Text style={styles.trackTitle}>{song.title}</Text>
                <Text style={styles.trackArtist}>{song.artist}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Categories */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Category</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {categoryData.map((item, index) => (
              <TouchableOpacity key={index} style={styles.categoryButton}>
                <Text style={styles.categoryText}>{item.name}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Moods */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Mood</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {moodData.map((mood, index) => ( // Use 'mood' instead of 'item'
              <TouchableOpacity key={index} style={styles.moodCard} onPress={() => navigation.navigate('AlbumScreen', { mood })}>
                <Image source={{ uri: mood.imageUrl }} style={styles.moodImage} />
                <View style={styles.moodTextContainer}>
                  <Text style={styles.moodText}>{mood.name}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Recommendations */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recommend for you</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {recommendData.map((recommendation, index) => (
              <TouchableOpacity key={index} style={styles.recommendCard} onPress={() => navigation.navigate('TopHitPH', { recommendation })}>
                <Image source={{ uri: recommendation.imageUrl }} style={styles.recommendImage} />
                <Text style={styles.recommendText}>{recommendation.title}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton}>
          <Ionicons name="home-outline" size={24} color="#fff" />
          <Text style={styles.footerButtonText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('SearchScreen')}>
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
    backgroundColor: '#0e1111',
  },
  header: {
    padding: 20,
    marginTop: 18,
  },
  profileImageContainer: {
    position: 'absolute',
    left: '90%',
    top: 35,
    borderColor: '#fff',
    borderWidth: 2,
    borderRadius: 50,
    overflow: 'hidden',
  },
  profileImage: {
    width: 40,
    height: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
  },
  title2: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1ed760',
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
  },
  searchInput: {
    flex: 1,
    color: '#fff',
    fontSize: 16,
    marginLeft: 10,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },

  // Carousel Styles
  carouselContainer: {
    paddingHorizontal: 10,
  },
  carouselCard: {
    marginRight: 15,
    width: 379,
    overflow: 'hidden', // <-- Add this line
    borderRadius: 10,  // <-- Apply borderRadius to the card
  },
  carouselImage: {
    width: '100%',
    height: 200,
  },
  genreContainer: {
    position: 'absolute',
    bottom: 25,
    left: 10,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  genreText: {
    color: '#1ed760', // spotify green
    fontWeight: 'bold',
    fontSize: 23,
    textShadowColor: 'rgba(0, 0, 0, 0.7)', // Shadow color (black with opacity)
    textShadowOffset: { width: 1, height: 1 }, // Shadow offset
    textShadowRadius: 2, // Shadow blur radius
  },
  genreInfo: {
    color: 'white',
    fontSize: 18,
    fontStyle: 'italic',
    textShadowColor: 'rgba(0, 0, 0, 0.9)', // Shadow color (black with opacity)
    textShadowOffset: { width: 4, height: 2 }, // Shadow offset
    textShadowRadius: 5, // Shadow blur radius
  },

  // Track Card Styles
  trackCard: {
    marginRight: 15,
    width: 140,
  },
  trackImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  trackTitle: {
    color: '#fff',
    marginTop: 5,
  },
  trackArtist: {
    color: '#888',
    fontSize: 12,
  },

  // Category Button Styles
  categoryButton: {
    backgroundColor: '#1db954',
    borderRadius: 20,
    padding: 10,
    marginRight: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  categoryText: {
    color: '#000',
    fontSize: 14,
    fontWeight: 'bold',
  },

  // Mood Card Styles
  moodCard: {
    marginRight: 15,
    width: 130,
  },
  moodImage: {
    width: '100%',
    height: 80,
    borderRadius: 10,
  },
  moodTextContainer: {
    position: 'absolute',
    bottom: 25,
    left: 22,
    paddingHorizontal: 15,
    paddingVertical: 4,
  },
  moodText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 1)', // Shadow color (black with opacity)
    textShadowOffset: { width: 2, height: 2 }, // Shadow offset
    textShadowRadius: 18, // Shadow blur radius
  },

  // Recommend Card Styles
  recommendCard: {
    marginRight: 15,
    width: 150,
  },
  recommendImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  recommendText: {
    color: '#fff',
    marginTop: 5,
  },
  // Footer Styles
  footer: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#232b2b',
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
    position: 'absolute',
    marginTop: '-125%',
    opacity: 0.1,
  },
});

const carouselData = [
  { imageUrl: 'https://i.pinimg.com/originals/1f/3c/e3/1f3ce3f2fb77aeb542d616158e3b40a7.gif', genre: 'Chill', quote: "Embrace the tranquility." }, // Chill
  { imageUrl: 'https://i.pinimg.com/originals/bc/57/43/bc5743245f004c7ea45cd8a71991c661.gif', genre: 'Electronic', quote: "Let the beats take over." }, // Electronic
  { imageUrl: 'https://ahaslides.com/wp-content/uploads/2023/12/Music.gif', genre: 'Hip-Hop', quote: "Drop the beat, feel the vibe." }, // Hip Hop
];

// Placeholder Data 
const topWeekSongs = [
  {
    imageUrl: 'https://linkstorage.linkfire.com/medialinks/images/cd42dc51-29cf-44a8-bc43-d0c2d6346d1e/artwork-440x440.jpg',
    title: 'APT',
    artist: 'Bruno Mars, ROSE',
    "lyrics": [
      {
        "section": "Intro",
        "lines": [
          "Chaeyeongiga joahaneun raendeom geim",
          "Raendeom geim",
          "Game start"
        ]
      },
      {
        "section": "Chorus",
        "lines": [
          "Apateu, apateu",
          "Apateu, apateu",
          "Apateu, apateu",
          "Uh, uh-huh, uh-huh",
          "Apateu, apateu",
          "Apateu, apateu",
          "Apateu, apateu",
          "Uh, uh-huh, uh-huh"
        ]
      },
      {
        "section": "Verse 1",
        "lines": [
          "Kissy face, kissy face",
          "Sent to your phone, but",
          "I'm tryna kiss your lips for real (Uh-huh, uh-huh)",
          "Red hearts, red hearts",
          "That's what I'm on, yeah",
          "Come give me somethin' I can feel, oh-oh, oh"
        ]
      },
      {
        "section": "Pre-Chorus",
        "lines": [
          "Don't you want me like I want you, baby?",
          "Don't you need me like I need you now?",
          "Sleep tomorrow, but tonight, go crazy",
          "All you gotta do is just meet me at the"
        ]
      },
      {
        "section": "Chorus",
        "lines": [
          "Apateu, apateu",
          "Apateu, apateu",
          "Apateu, apateu",
          "Uh, uh-huh, uh-huh",
          "Apateu, apateu",
          "Apateu, apateu",
          "Apateu, apateu",
          "Uh, uh-huh, uh-huh"
        ]
      },
      {
        "section": "Verse 2",
        "lines": [
          "It's whatever (Whatever), it's whatever (Whatever)",
          "It's whatever (Whatever) you like (Woo)",
          "Turn this apateu into a club (Uh-huh, uh-huh)",
          "I'm talkin' drink, dance, smoke, freak, party all night (Come on)",
          "Geonbae, geonbae, girl, what's up? Oh-oh, oh"
        ]
      },
      {
        "section": "Pre-Chorus",
        "lines": [
          "Don't you want me like I want you, baby?",
          "Don't you need me like I need you now?",
          "Sleep tomorrow, but tonight, go crazy",
          "All you gotta do is just meet me at the"
        ]
      },
      {
        "section": "Chorus",
        "lines": [
          "Apateu, apateu",
          "Apateu, apateu",
          "Apateu, apateu",
          "Uh, uh-huh, uh-huh",
          "Apateu, apateu",
          "Apateu, apateu",
          "Apateu, apateu",
          "Uh, uh-huh, uh-huh"
        ]
      },
      {
        "section": "Bridge",
        "lines": [
          "Hey, so now you know the game",
          "Are you ready?",
          "'Cause I'm comin' to get ya, get ya, get ya",
          "Hold on, hold on",
          "I'm on my way",
          "Yeah, yeah, yeah-yeah, yeah",
          "I'm on my way",
          "Hold on, hold on",
          "I'm on my way",
          "Yeah, yeah, yeah-yeah, yeah",
          "I'm on my way"
        ]
      },
      {
        "section": "Pre-Chorus",
        "lines": [
          "Don't you want me like I want you, baby?",
          "Don't you need me like I need you now?",
          "Sleep tomorrow, but tonight, go crazy",
          "All you gotta do is just meet me at the"
        ]
      },
      {
        "section": "Chorus",
        "lines": [
          "Apateu, apateu",
          "Apateu, apateu",
          "Apateu, apateu",
          "Just meet me at the (Uh, uh-huh, uh-huh)",
          "Apateu, apateu",
          "Apateu, apateu",
          "Apateu, apateu",
          "Just meet me at the (Uh, uh-huh, uh-huh)",
          "Apateu, apateu",
          "Apateu, apateu",
          "Apateu, apateu",
          "Just meet me at the (Uh, uh-huh, uh-huh)",
          "Apateu, apateu",
          "Apateu, apateu",
          "Apateu, apateu",
          "Uh, uh-huh, uh-huh"
        ]
      }
    ],
  },
  {
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Lady_Gaga_and_Bruno_Mars_-_Die_with_a_Smile.png/220px-Lady_Gaga_and_Bruno_Mars_-_Die_with_a_Smile.png',
    title: 'Die with a Smile',
    artist: 'Bruno Mars, Lady Gaga',
    "lyrics": [
      {
        "section": "Intro",
        "lines": [
          "(Ooh, ooh)"
        ]
      },
      {
        "section": "Verse 1",
        "lines": [
          "I, I just woke up from a dream",
          "Where you and I had to say goodbye",
          "And I don't know what it all means",
          "But since I survived, I realized"
        ]
      },
      {
        "section": "Pre-Chorus",
        "lines": [
          "Wherever you go, that's where I'll follow",
          "Nobody's promised tomorrow",
          "So I'ma love you every night like it's the last night",
          "Like it's the last night"
        ]
      },
      {
        "section": "Chorus",
        "lines": [
          "If the world was ending",
          "I'd wanna be next to you",
          "If the party was over",
          "And our time on Earth was through",
          "I'd wanna hold you just for a while",
          "And die with a smile",
          "If the world was ending",
          "I'd wanna be next to you"
        ]
      },
      {
        "section": "Post-Chorus",
        "lines": [
          "(Ooh, ooh)"
        ]
      },
      {
        "section": "Verse 2",
        "lines": [
          "Ooh, lost, lost in the words that we scream",
          "I don't even wanna do this anymore",
          "'Cause you already know what you mean to me",
          "And our love's the only war worth fighting for"
        ]
      },
      {
        "section": "Pre-Chorus",
        "lines": [
          "Wherever you go, that's where I'll follow",
          "Nobody's promised tomorrow",
          "So I'ma love you every night like it's the last night",
          "Like it's the last night"
        ]
      },
      {
        "section": "Chorus",
        "lines": [
          "If the world was ending",
          "I'd wanna be next to you",
          "If the party was over",
          "And our time on Earth was through",
          "I'd wanna hold you just for a while",
          "And die with a smile",
          "If the world was ending",
          "I'd wanna be next to you"
        ]
      },
      {
        "section": "Bridge",
        "lines": [
          "Right next to you",
          "Next to you",
          "Right next to you",
          "Oh-oh"
        ]
      },
      {
        "section": "Chorus",
        "lines": [
          "If the world was ending",
          "I'd wanna be next to you",
          "If the party was over",
          "And our time on Earth was through",
          "I'd wanna hold you just for a while",
          "And die with a smile",
          "If the world was ending",
          "I'd wanna be next to you",
          "If the world was ending",
          "I'd wanna be next to you"
        ]
      },
      {
        "section": "Outro",
        "lines": [
          "(Ooh, ooh)",
          "I'd wanna be next to you"
        ]
      }
    ],
  },
  {
    imageUrl: 'https://images.genius.com/5e7bf410789d01a90983b2641b88e5bd.1000x1000x1.png',
    title: 'Birds of a Feather',
    artist: 'Billie Eilish',
    "lyrics": [
      {
        "section": "Intro",
        "lines": []
      },
      {
        "section": "Verse 1",
        "lines": [
          "I want you to stay",
          "'Til I'm in the grave",
          "'Til I rot away, dead and buried",
          "'Til I'm in the casket you carry",
          "If you go, I'm goin' too, uh",
          "'Cause it was always you (Alright)",
          "And if I'm turnin' blue, please don't save me",
          "Nothin' left to lose without my baby"
        ]
      },
      {
        "section": "Refrain",
        "lines": [
          "Birds of a feather, we should stick together, I know",
          "I said I'd never think I wasn't better alone",
          "Can't change the weather, might not be forever",
          "But if it's forever, it's even better"
        ]
      },
      {
        "section": "Pre-Chorus",
        "lines": [
          "And I don't know what I'm cryin' for",
          "I don't think I could love you more",
          "It might not be long, but baby, I"
        ]
      },
      {
        "section": "Chorus",
        "lines": [
          "I'll love you 'til the day that I die",
          "'Til the day that I die",
          "'Til the light leaves my eyes",
          "'Til the day that I die"
        ]
      },
      {
        "section": "Verse 2",
        "lines": [
          "I want you to see, hm",
          "How you look to me, hm",
          "You wouldn't believe if I told ya",
          "You would keep the compliments I throw ya",
          "But you're so full of shit, uh",
          "Tell me it's a bit, oh",
          "Say you don't see it, your mind's polluted",
          "Say you wanna quit, don't be stupid"
        ]
      },
      {
        "section": "Pre-Chorus",
        "lines": [
          "And I don't know what I'm cryin' for",
          "I don't think I could love you more",
          "Might not be long, but baby, I",
          "Don't wanna say goodbye"
        ]
      },
      {
        "section": "Chorus",
        "lines": [
          "Birds of a feather, we should stick together, I know ('Til the day that I die)",
          "I said I'd never think I wasn't better alone ('Til the light leaves my eyes)",
          "Can't change the weather, might not be forever ('Til the day that I die)",
          "But if it's forever, it's even better"
        ]
      },
      {
        "section": "Post-Chorus",
        "lines": [
          "I knew you in another life",
          "You had that same look in your eyes",
          "I love you, don't act so surprised"
        ]
      }
    ],
  },
];

const categoryData = [
  { name: 'Pop' },
  { name: 'Rock' },
  { name: 'Electronic' },
  { name: 'Acoustic' },
  { name: 'Hip-Hop' },
  { name: 'Love' },
  { name: 'R&B' },
  { name: 'Rap' },

];

const moodData = [
  {
    imageUrl: 'https://img.freepik.com/premium-photo/colorful-smiley-balls_1061150-143194.jpg?semt=ais_hybrid',
    name: "Happy",
  },
  {
    imageUrl: 'https://t3.ftcdn.net/jpg/06/72/90/46/360_F_672904604_lVP0gB88VflKEc5VZ4b9B7X2VJRnWCS1.jpg',
    name: "Romantic",
  },
  {
    imageUrl: 'https://img.freepik.com/premium-photo/lofi-music-chill-vibes-sunset-background-wallpaper_684882-324.jpg',
    name: "    Chill",
  },
];

const recommendData = [
  {
    imageUrl: 'https://charts-images.scdn.co/assets/locale_en/regional/weekly/region_ph_default.jpg',
    title: "Top Songs - Philippines (Weekly)",
  },
  {
    imageUrl: 'https://charts-images.scdn.co/assets/locale_en/regional/daily/region_ph_default.jpg',
    title: "Top 50 - Philippines",
  },
  {
    imageUrl: 'https://charts-images.scdn.co/assets/locale_en/viral/daily/region_ph_default.jpg',
    title: "Viral 50 - Philippines",
  },
];

export default HomeScreen;