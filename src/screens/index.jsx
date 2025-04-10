import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Home from './screens/Home';
import Bookmark from './screens/Bookmark';
import Profile from './screens/Profile';
import colors from './theme/colors';

export default function App() {
  const [activeTab, setActiveTab] = useState('Home');
  const [bookmarkedItems, setBookmarkedItems] = useState([]);

  const handleToggleBookmark = (item) => {
    const exists = bookmarkedItems.find((b) => b.id === item.id);
    if (exists) {
      setBookmarkedItems(bookmarkedItems.filter((b) => b.id !== item.id));
    } else {
      setBookmarkedItems([...bookmarkedItems, item]);
    }
  };

  return (
    <View style={styles.container}>
      {activeTab === 'Home' && (
        <Home
          bookmarkedItems={bookmarkedItems}
          onToggleBookmark={handleToggleBookmark}
        />
      )}
      {activeTab === 'Bookmark' && (
        <Bookmark bookmarkedItems={bookmarkedItems} />
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
  },
  bottomTab: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: colors.white(1),
    borderTopWidth: 1,
    borderColor: colors.grey(0.3),
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
