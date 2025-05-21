import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

const categories = ['Semua', 'Mobil', 'Motor'];

const ListHorizontal = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        horizontal
        keyExtractor={(item) => item}
        renderItem={({ item }) => {
          const isSelected = selectedCategory === item;
          return (
            <TouchableOpacity
              style={[
                styles.categoryButton,
                isSelected && styles.selectedCategory,
              ]}
              onPress={() => setSelectedCategory(item)}
            >
              <Text
                style={[
                  styles.categoryText,
                  isSelected && styles.selectedText,
                ]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          );
        }}
        contentContainerStyle={styles.centeredList}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 8,
  },
  centeredList: {
    justifyContent: 'center',
    flexGrow: 1,
  },
  categoryButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: '#004080',
    borderRadius: 6,
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
    height: 35,
    minWidth: 65,
  },
  selectedCategory: {
    backgroundColor: '#007BFF',
  },
  categoryText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  selectedText: {
    color: '#FFF',
  },
});

export default ListHorizontal;
