import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Linking } from 'expo';

const DetailScreen = ({ navigation, route }) => {
  const movie = route.params.movie;
  const youtube_url = `https://www.youtube.com/watch?v=${movie.yt_trailer_code}`;

  const getStars = () => {
    let stars = '';
    return stars.padStart(movie.rating, '★');
  };

  const callYoutube = () => {
    Linking.openURL(youtube_url); 
  };

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        imageStyle={{ opacity: 0.4 }}
        style={styles.banner}
        source={{ uri: movie.background_image }}
      >
        <Image style={styles.cover} source={{ uri: movie.medium_cover_image }} />
        <View>
          <Text style={styles.title}>{movie.title_long}</Text>
        </View>
      </ImageBackground>
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.content}>
          <Text style={styles.year}>{`Ano: ${movie.year}`}</Text>
          <Text
            style={{ ...styles.rating, color: movie.rating > 6 ? 'yellow' : 'red' }}
          >{`Nota: ${movie.rating}`}</Text>
          <Text style={styles.rating}>{getStars()}</Text>

          <TouchableOpacity onPress={callYoutube}>
            <Text style={styles.youtube}>Assistir no Youtube</Text>
          </TouchableOpacity>

          <Text style={styles.subtitle}>Descrição</Text>
          <Text style={styles.description}>{movie.description_full}</Text>
          <Text style={styles.subtitle}>Generos</Text>
          {movie.genres.map((genre) => (
            <Text style={styles.description}>{` - ${genre}`}</Text>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  subtitle: {
    marginTop: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  youtube: {
    marginTop: 18,
    color: 'orange',
    fontWeight: 'bold',
  },
  content: {
    padding: 32,
  },
  description: {
    marginTop: 8,
    color: 'white',
    fontSize: 14,
  },
  banner: {
    padding: 16,
    alignItems: 'center',
    flexDirection: 'row',
  },
  cover: {
    marginLeft: 16,
    marginRight: 16,
    width: 100,
    height: 130,
  },
  side: {
    height: 100,
    marginLeft: 16,
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  year: {
    marginTop: 8,
    color: '#ccc',
    fontSize: 14,
  },
  rating: {
    marginTop: 8,
    color: 'yellow',
    fontSize: 12,
  },
});

export default DetailScreen;
