import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Listen to your favorite music</Text>
        <Image source={{ uri: 'https://via.placeholder.com/50' }} style={styles.profileImage} />
      </View>
      <View style={styles.search}>
        <TextInput
          style={styles.searchInput}
          placeholder="Topic, Artist, Song"
        />
      </View>
      <Text style={styles.sectionTitle}>Top of the week</Text>
      <View style={styles.grid}>
        <TouchableOpacity style={styles.gridItem}>
          <Image source={{ uri: 'https://via.placeholder.com/100' }} style={styles.gridImage} />
          <Text style={styles.gridText}>Rihanna -  Needed Me</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.gridItem}>
          <Image source={{ uri: 'https://via.placeholder.com/100' }} style={styles.gridImage} />
          <Text style={styles.gridText}>Snoop Dogg -  Drop It Like It's Hot</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.sectionTitle}>Category</Text>
      <View style={styles.category}>
        <TouchableOpacity style={styles.categoryItem}>
          <Text style={styles.categoryText}>Pop</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryItem}>
          <Text style={styles.categoryText}>Rock</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryItem}>
          <Text style={styles.categoryText}>Jazz</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryItem}>
          <Text style={styles.categoryText}>Acoustic</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.sectionTitle}>Mood</Text>
      <View style={styles.grid}>
        <TouchableOpacity style={styles.gridItem}>
          <Image source={{ uri: 'https://via.placeholder.com/100' }} style={styles.gridImage} />
          <Text style={styles.gridText}>Happy</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.gridItem}>
          <Image source={{ uri: 'https://via.placeholder.com/100' }} style={styles.gridImage} />
          <Text style={styles.gridText}>Alone</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.gridItem}>
          <Image source={{ uri: 'https://via.placeholder.com/100' }} style={styles.gridImage} />
          <Text style={styles.gridText}>Work</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.sectionTitle}>Recommend for you</Text>
      <View style={styles.grid}>
        <TouchableOpacity style={styles.gridItem}>
          <Image source={{ uri: 'https://via.placeholder.com/100' }} style={styles.gridImage} />
          <Text style={styles.gridText}>Hot Acoustics</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.gridItem}>
          <Image source={{ uri: 'https://via.placeholder.com/100' }} style={styles.gridImage} />
          <Text style={styles.gridText}>Happy Hits</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181818',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  search: {
    marginBottom: 20,
  },
  searchInput: {
    backgroundColor: '#282828',
    padding: 10,
    borderRadius: 10,
    color: '#fff',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  grid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  gridItem: {
    flex: 1,
    marginRight: 10,
    backgroundColor: '#282828',
    padding: 10,
    borderRadius: 10,
  },
  gridImage: {
    width: '100%',
    height: 100,
    borderRadius: 10,
  },
  gridText: {
    color: '#fff',
    textAlign: 'center',
    marginTop: 5,
  },
  category: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  categoryItem: {
    backgroundColor: '#282828',
    padding: 10,
    borderRadius: 10,
  },
  categoryText: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default App;