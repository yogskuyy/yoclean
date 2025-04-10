import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import colors from '../../theme/colors';

export default function Profile() {
  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Image
          source={{ uri: 'https://i.pravatar.cc/150?img=3' }}
          style={styles.avatar}
        />
        <View style={styles.stats}>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>10</Text>
            <Text style={styles.statLabel}>Postingan</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>4.2K</Text>
            <Text style={styles.statLabel}>Pengikut</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>120</Text>
            <Text style={styles.statLabel}>Mengikuti</Text>
          </View>
        </View>
      </View>

      <View style={styles.userInfo}>
        <Text style={styles.fullName}>Raka Wahyu Prayoga</Text>
        <Text style={styles.username}>@yogskuyyyy</Text>
        <Text style={styles.bio}>Hidup itu sederhana, kita yang bikin ribet 😄</Text>
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editText}>Edit Profil</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.contentPlaceholder}>
        <Text style={styles.placeholderText}>Belum ada konten yang diunggah</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBlue(3),
    padding: 15,
  },
  topSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 1.5,
    borderColor: colors.white(0.9),
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flex: 1,
    marginLeft: 20,
  },
  stat: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.white(1),
  },
  statLabel: {
    fontSize: 13,
    color: colors.grey(0.6),
  },
  userInfo: {
    marginTop: 15,
  },
  fullName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.white(1),
  },
  username: {
    color: colors.grey(0.6),
    marginBottom: 4,
  },
  bio: {
    color: colors.white(0.9),
    marginBottom: 8,
  },
  editButton: {
    borderWidth: 1,
    borderColor: colors.white(0.8),
    borderRadius: 6,
    paddingVertical: 6,
    alignItems: 'center',
    marginTop: 5,
  },
  editText: {
    color: colors.white(1),
    fontWeight: '500',
  },
  contentPlaceholder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    color: colors.grey(0.5),
    fontSize: 15,
  },
});
