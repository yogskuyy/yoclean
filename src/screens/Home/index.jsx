import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet } from 'react-native';
import ListHorizontal from '../../components/ListHorizontal';
import Index from '../../components/index';
import data from '../../data/data';
import colors from '../../theme/colors';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';


export default function Home({ bookmarkedItems, onToggleBookmark }) {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Semua');

  const filteredData = data.filter(
    (item) =>
      (selectedCategory === 'Semua' || item.category === selectedCategory) &&
      item.title.toLowerCase().includes(search.toLowerCase())
  );

  const navigation = useNavigation();

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

      <ListHorizontal
        setSelectedCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
      />

<TouchableOpacity
  style={{
    backgroundColor: colors.blue(1),
    padding: 10,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: 'center',
  }}
  onPress={() => navigation.navigate('FormScreen')}
>
  <Text style={{ color: '#fff', fontWeight: 'bold' }}>+ Tambah Data</Text>
</TouchableOpacity>


      <ScrollView style={styles.list} contentContainerStyle={{ paddingBottom: 100 }}>
        {filteredData.length > 0 ? (
          <Index
            data={filteredData}
            bookmarkedItems={bookmarkedItems}
            onToggleBookmark={onToggleBookmark}
          />
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
});
 