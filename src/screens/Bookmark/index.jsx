import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import ItemSmall from '../../components/ItemSmall';
import colors from '../../theme/colors';

export default function Bookmark({ bookmarkedItems = [], onToggleBookmark }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bookmark</Text>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {bookmarkedItems.length > 0 ? (
          bookmarkedItems.map((item, index) => (
            <ItemSmall
              key={`${item.id}-${index}`} // key unik dari id dan index
              item={item}
              isBookmarked={true}
              onToggleBookmark={onToggleBookmark}
            />
          ))
        ) : (
          <Text style={styles.empty}>Belum ada layanan yang dibookmark.</Text>
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
    paddingTop: 50,
  },
  scrollContainer: {
    paddingBottom: 100,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: colors.white(1),
    marginBottom: 20,
  },
  empty: {
    color: colors.grey(0.7),
    fontSize: 16,
    textAlign: 'center',
    marginTop: 40,
  },
});
