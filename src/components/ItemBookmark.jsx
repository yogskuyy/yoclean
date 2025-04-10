import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../theme/colors';

export default function ItemBookmark({ item, onToggleBookmark }) {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <TouchableOpacity
        onPress={() => onToggleBookmark(item)}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Hapus Bookmark</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: colors.white(1),
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.black(1),
  },
  description: {
    marginTop: 5,
    fontSize: 14,
    color: colors.grey(0.8),
  },
  button: {
    marginTop: 10,
    backgroundColor: colors.red(0.9),
    paddingVertical: 8,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: colors.white(1),
    fontWeight: '600',
  },
});
