import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const RowMovies = ({ item, onPress }) => {
  const getStars = () => {
    let stars = '';
    return stars.padStart(item.rating, '★');
  };

  return (
    <TouchableOpacity onPress={onPress} style={{ flexDirection: 'row', marginVertical: 8 }}>
      <Image style={styles.cover} source={{ uri: item.medium_cover_image }} />
      <View style={styles.side}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.year}>{`Ano: ${item.year}`}</Text>
        <Text
          style={{ ...styles.rating, color: item.rating > 6 ? 'yellow' : 'red' }}
        >{`Nota: ${item.rating}`}</Text>
        <Text style={styles.rating}>{getStars()}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cover: {
    marginLeft: 16,
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

export default RowMovies;
