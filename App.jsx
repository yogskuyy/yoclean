import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet } from 'react-native';
import ListHorizontal from './src/components/ListHorizontal';
import Index from './src/components/Index';
import data from './src/data/data';
import colors from './src/theme/colors'; // Menggunakan warna dari colors.js

export default function App() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Semua');

  const filteredData = data.filter(
    (item) =>
      (selectedCategory === 'Semua' || item.category === selectedCategory) &&
      item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>YoClean</Text>
      <TextInput
        style={styles.searchBar}
        placeholder="Cari Kebutuhan Anda"
        placeholderTextColor={colors.grey(0.7)}
        value={search}
        onChangeText={setSearch}
      />
      <ListHorizontal setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory} />
      <ScrollView style={styles.list}>
        {filteredData.length > 0 ? (
          <Index data={filteredData} />
        ) : (
          <Text style={styles.noResult}>Tidak ada hasil ditemukan</Text>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: colors.darkBlue(3),  
    padding: 15, 
  },
  header: { 
    fontSize: 32, 
    fontWeight: 'bold', 
    color: colors.white(1), 
    textAlign: 'center', 
    marginBottom: 20, 
    textTransform: 'uppercase', 
    letterSpacing: 2, 
  },
  searchBar: {
    height: 45,
    backgroundColor: colors.lightGrey(1), 
    borderRadius: 12, 
    paddingHorizontal: 15, 
    fontSize: 16, 
    color: colors.black(1), 
    marginBottom: 15,
    borderWidth: 1, 
    borderColor: colors.blue(1),  
    shadowColor: colors.grey(0.5), 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4, 
  },
  list: { 
    marginTop: 10, 
  },
  noResult: { 
    color: colors.black(1),  
    textAlign: 'center', 
    marginTop: 20, 
    fontSize: 18, 
    fontWeight: '600',
    backgroundColor: colors.lightGrey(0.9), 
    padding: 15,
    borderRadius: 10,
  },
  readMore: {
    color: colors.blue(1),  
    fontWeight: 'bold',
    marginTop: 5,
  },
  selectedCategory: {
    backgroundColor: colors.blue(1),  
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
});



