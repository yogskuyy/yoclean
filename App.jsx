import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import ListHorizontal from './src/components/ListHorizontal';
import Index from './src/components/Index';
import Bookmark from './src/screens/Bookmark';
import Profile from './src/screens/Profile';
import data from './src/data/data';
import colors from './src/theme/colors';

export default function App() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [activeTab, setActiveTab] = useState('Home');
  const [bookmarkedItems, setBookmarkedItems] = useState([]);

  const filteredData = data.filter(
    (item) =>
      (selectedCategory === 'Semua' || item.category === selectedCategory) &&
      item.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleToggleBookmark = (item) => {
    const isBookmarked = bookmarkedItems.find((b) => b.id === item.id);
    if (isBookmarked) {
      setBookmarkedItems((prev) => prev.filter((b) => b.id !== item.id));
    } else {
      setBookmarkedItems((prev) => [...prev, item]);
    }
  };

  return (
    <View style={styles.container}>
      {activeTab === 'Home' && (
        <>
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
          <ScrollView style={styles.list} contentContainerStyle={{ paddingBottom: 100 }}>
            {filteredData.length > 0 ? (
              <Index
                data={filteredData}
                bookmarkedItems={bookmarkedItems}
                onToggleBookmark={handleToggleBookmark}
              />
            ) : (
              <Text style={styles.noResult}>Tidak ada hasil ditemukan</Text>
            )}
          </ScrollView>
        </>
      )}

      {activeTab === 'Bookmark' && (
        <Bookmark
          bookmarkedItems={bookmarkedItems}
          onToggleBookmark={handleToggleBookmark}
        />
      )}

      {activeTab === 'Profile' && <Profile />}

      <View style={styles.bottomTab}>
        {['Home', 'Bookmark', 'Profile'].map((tab) => (
          <TouchableOpacity
            key={tab}
            onPress={() => setActiveTab(tab)}
            style={styles.tabButton}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === tab && styles.activeTabText,
              ]}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBlue(3),
    padding: 15,
    paddingBottom: 80,
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
  bottomTab: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: colors.white(1),
    borderTopWidth: 1,
    borderColor: colors.grey(0.3),
    zIndex: 999,
  },
  tabButton: {
    alignItems: 'center',
  },
  tabText: {
    fontSize: 14,
    color: colors.grey(0.7),
  },
  activeTabText: {
    color: colors.blue(1),
    fontWeight: 'bold',
  },
});
