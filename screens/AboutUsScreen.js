import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const teamData = [
  {
    name: 'Kurt Mellina',
    role: 'UI/UX Designer',
    contribution: "As the UI/UX Designer, Kurt crafted the app's initial design in Figma, focusing on creating a user-friendly interface and an engaging user experience. \n\nHis attention to detail ensured that every element was visually appealing and functionally intuitive, setting the foundation for a successful application.",
    imageUrl: 'https://i.ibb.co/FHGbH71/download.jpg', // Placeholder image
  },
  {
    name: 'Jameel Tutungan',
    role: 'Frontend/Backend Developer - User Persona',
    contribution: 'Played a pivotal role as both a frontend and backend developer, tackling all coding tasks with ease. \n\nHis ability to seamlessly integrate user persona insights into the development process allowed for a more tailored and effective user experience, bringing the team’s vision to life.',
    imageUrl: 'https://i.ibb.co/ZfxQ2YK/461598146-4059792147582777-75358189503223332-n.webp',
  },
  {
    name: 'John Kenneth Sangco',
    role: '60-30-10',
    contribution: "Spatipay's 60/30/10 color theory is a design technique used to create visually appealing color schemes, and it's divided into three parts.",
    imageUrl: 'https://i.ibb.co/RTLzYxt/439921816-1723628964828942-5825253512076196182-n.webp',
  },
  {
    name: 'Charles Kenjie Noronio',
    role: '60-30-10',
    contribution: "Charles Kenjie Noronio uses the 60-30-10 rule to improve the design of the layout and this rule helps him to balance the elements and accents the colors of it. \n\nBy using this rule, he can contribute in creating a user-friendly design and minimalist design.",
    imageUrl: 'https://i.ibb.co/FHGbH71/download.jpg',
  },
  {
    name: 'James Timothy Abetchuela',
    role: 'Spacing',
    contribution: "Spacing is vital for a good user interface. It allows for clear visualization by separating objects, reducing some possibilities of an accidental tap on a wrong place, and provides aesthetic consistency contributing to a polished appearance. \n\nProper space allows for responsive design so that layouts change across various screen sizes without disrupting the usability of the page. It is generally the case that well-designed spacings lead to a more intuitive and engaging user experience.",
    imageUrl: 'https://i.ibb.co/FHGbH71/download.jpg',
  },
  {
    name: 'Johnpaul Sombilon',
    role: 'Typography',
    contribution: "Typography is an art of arranging type for the purposes of making written language legible and readable, in a very aesthetically pleasing manner as well. \n\nIt deals with the proper selection of the right kind of fonts, managing the line spacing, letter spacing, and font size to achieve design harmony. Typography is absolutely critical in both print and digital media since it plays a role in the way one conveys information and brings out the feel of the layout.",
    imageUrl: 'https://i.ibb.co/XDxpvxY/463779766-1934363750379462-4246227973407069304-n.webp',
  },
];

const AboutUs = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
              <Ionicons name="chevron-back-outline" size={30} color="white" />
            </TouchableOpacity>
            <Text style={styles.headerText}>About Us</Text>
            <TouchableOpacity style={styles.optionsButtonContainer}>
              <Ionicons name="book-outline" size={30} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>

        {teamData.map((member, index) => (
          <View key={index} style={styles.memberContainer}>
            <Image source={{ uri: 'https://i.ibb.co/qCLGTCV/gradient.jpg' }} style={styles.gradient} />
            <Image source={{ uri: member.imageUrl }} style={styles.memberImage} />
            <View style={styles.memberInfo}>
              <Text style={styles.memberName}>{member.name}</Text>
              <Text style={styles.memberRole}>{member.role}</Text>
              <Text style={styles.memberContribution}>{member.contribution}</Text>
            </View>
          </View>
        ))}
      </ScrollView>

      <Text style={styles.separator}>  </Text>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('HomeScreen')}>
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
    padding: 20,
  },
  header: {
    backgroundColor: '#0e1111',
    padding: 20,
    paddingTop: 20,
    paddingBottom: 25
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backButton: {
    padding: 0,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  memberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#232b2b',
    padding: 15,
    borderRadius: 10,
    overflow: 'hidden',
  },
  memberImage: {
    width: 90,
    height: 90,
    borderWidth: 1,
    borderRadius: 60,
    marginRight: 25,
    zIndex:  2,
  },
  memberInfo: {
    flex: 1,
  },
  memberName: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#1ed760',
  },
  memberRole: {
    fontSize: 16,
    color: '#fff', // Light gray 
    paddingBottom: 5,
  },
  memberContribution: {
    fontSize: 15,
    color: '#D3D3D3', // Light gray 
    textAlign: 'justify',
  },
  separator: {
    padding: 20,
  },
  // Footer Styles
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#232b2b',
    position: 'absolute', // Position it absolutely
    bottom: 0, // Place it at the bottom
    width: '114%', // Full width
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
  gradient: {
    position: 'absolute',
    height: 300,
    width: 120,
    opacity: 0.9,
    zIndex: 1,
  },
});

export default AboutUs;