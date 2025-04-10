import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function ItemSmall({ item, isBookmarked, onBookmarkPress }) {
  return (
    <View style={styles.card}>
      {item.image ? (
        <Image
          source={{ uri: item.image }}
          style={styles.imageSmall}
        />
      ) : (
        <Text style={styles.imageError}>Gambar tidak tersedia</Text>
      )}
      <View style={styles.textContainer}>
        <View style={styles.headerRow}>
          <Text style={styles.cardTitle}>{item.title}</Text>
          <TouchableOpacity onPress={() => onBookmarkPress(item)}>
            <Text style={[styles.starIcon, { color: isBookmarked ? '#FFD700' : '#999' }]}>★</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.cardDescription}>{item.description}</Text>
        <TouchableOpacity onPress={() => console.log(`${item.title} Clicked!`)}>
          <Text style={styles.readMoreText}>Read More</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginBottom: 20,
    padding: 10,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  imageSmall: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  imageError: {
    color: '#000',
    fontSize: 14,
    textAlign: 'center',
    padding: 10,
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    flex: 1,
  },
  cardDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  readMoreText: {
    color: '#0066CC',
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 5,
  },
  starIcon: {
    fontSize: 22,
    marginLeft: 8,
  },
});
