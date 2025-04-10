import React, { useRef, useEffect } from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Easing,
} from 'react-native';

export default function ItemSmall({ item, isBookmarked, onBookmarkPress }) {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const pulseAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    // Fade-in animation saat komponen pertama kali render
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();

    // Animasi pulse untuk ikon bookmark
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1.2,
          duration: 500,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 500,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  const handleBookmarkToggle = () => {
    if (typeof onBookmarkPress === 'function') {
      onBookmarkPress(item);
    } else {
      console.warn('onBookmarkPress is not a function');
    }
  };

  const formattedDate = item.date || '10 April 2025';
  const bookmarkCount = item.bookmarkCount || 1000;

  return (
    <Animated.View style={[styles.card, { opacity: fadeAnim }]}>
      {item.image ? (
        <Image source={{ uri: item.image }} style={styles.imageLarge} />
      ) : (
        <View style={styles.imagePlaceholder}>
          <Text style={styles.imageError}>Gambar tidak tersedia</Text>
        </View>
      )}

      <View style={styles.textContainer}>
        <View style={styles.headerRow}>
          <Text style={styles.cardTitle}>{item.title}</Text>
          <TouchableOpacity onPress={handleBookmarkToggle}>
            <Animated.Text
              style={[
                styles.starIcon,
                {
                  color: isBookmarked ? '#FDCB6E' : '#ccc',
                  transform: [{ scale: pulseAnim }],
                },
              ]}
            >
              ★
            </Animated.Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.cardDescription}>{item.description}</Text>

        <Text style={styles.infoText}>
          {bookmarkCount.toLocaleString()} orang telah bookmark ini
        </Text>
        <Text style={styles.infoText}>
          Diposting pada {formattedDate}
        </Text>

        <TouchableOpacity onPress={() => console.log(`${item.title} Clicked!`)}>
          <Text style={styles.readMoreText}>Lihat Selengkapnya</Text>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FAFAFA',
    borderRadius: 18,
    marginBottom: 24,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#ECECEC',
  },
  imageLarge: {
    width: '100%',
    aspectRatio: 16 / 9,
    backgroundColor: '#EAEAEA',
  },
  imagePlaceholder: {
    width: '100%',
    aspectRatio: 16 / 9,
    backgroundColor: '#EAEAEA',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageError: {
    color: '#AAA',
    fontSize: 13,
    fontStyle: 'italic',
  },
  textContainer: {
    padding: 16,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  cardTitle: {
    fontSize: 17,
    fontWeight: '500',
    color: '#333',
    flex: 1,
    marginRight: 8,
  },
  cardDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 8,
    lineHeight: 20,
  },
  infoText: {
    fontSize: 13,
    color: '#999',
    marginTop: 6,
  },
  readMoreText: {
    color: '#4A90E2',
    fontSize: 14,
    fontWeight: '500',
    marginTop: 12,
  },
  starIcon: {
    fontSize: 22,
    textAlign: 'center',
  },
});
