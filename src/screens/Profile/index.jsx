import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, Alert } from 'react-native';
import * as Animatable from 'react-native-animatable';
import colors from '../../theme/colors';
import axios from 'axios';
import { useIsFocused, useNavigation } from '@react-navigation/native';

const API_URL = 'https://682607c9397e48c91314b34e.mockapi.io/api/artikel';

export default function Profile() {
  const [artikel, setArtikel] = useState([]);
  const isFocused = useIsFocused();
  const navigation = useNavigation();

  const fetchData = async () => {
    try {
      const response = await axios.get(API_URL);
      setArtikel(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    if (isFocused) fetchData();
  }, [isFocused]);

  const handleDelete = async (id) => {
    Alert.alert('Konfirmasi', 'Yakin ingin menghapus artikel ini?', [
      { text: 'Batal' },
      {
        text: 'Hapus',
        onPress: async () => {
          try {
            await axios.delete(`${API_URL}/${id}`);
            fetchData();
          } catch (error) {
            console.error('Error deleting:', error);
          }
        },
      },
    ]);
  };

  const renderItem = ({ item }) => (
    <View style={styles.articleCard}>
      <Image source={{ uri: item.image }} style={styles.articleImage} />
      <View style={styles.articleContent}>
        <Text style={styles.articleTitle}>{item.title}</Text>
        <Text style={styles.articleDesc}>{item.description}</Text>
        <Text style={styles.articleMeta}>{item.price} • {item.date}</Text>
        <Text style={styles.articleMeta}>🔖 {item.bookmarkCount}</Text>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.editBtn} onPress={() => navigation.navigate('FormScreen', { isEdit: true, data: item })}>
  <Text style={styles.btnText}>Edit</Text>
</TouchableOpacity>
          <TouchableOpacity style={styles.deleteBtn} onPress={() => handleDelete(item.id)}>
            <Text style={styles.btnText}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Animatable.View animation="fadeInDown" duration={800} style={styles.topSection}>
        <Image source={{ uri: 'https://i.pravatar.cc/150?img=3' }} style={styles.avatar} />
        <View style={styles.stats}>
          <View style={styles.stat}><Text style={styles.statNumber}>10</Text><Text style={styles.statLabel}>Postingan</Text></View>
          <View style={styles.stat}><Text style={styles.statNumber}>4.2K</Text><Text style={styles.statLabel}>Pengikut</Text></View>
          <View style={styles.stat}><Text style={styles.statNumber}>120</Text><Text style={styles.statLabel}>Mengikuti</Text></View>
        </View>
      </Animatable.View>

      <Animatable.View animation="fadeInUp" delay={300} style={styles.userInfo}>
        <Text style={styles.fullName}>Raka Wahyu Prayoga</Text>
        <Text style={styles.username}>@yogskuyyyy</Text>
        <Text style={styles.bio}>Hidup itu sederhana, kita yang bikin ribet 😄</Text>
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editText}>Edit Profil</Text>
        </TouchableOpacity>
      </Animatable.View>

      <Animatable.View animation="fadeInUp" delay={600} style={{ flex: 1 }}>
        <FlatList
          data={artikel}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          contentContainerStyle={{ paddingBottom: 100 }}
        />
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({ 
  container: { flex: 1, backgroundColor: colors.darkBlue(3), padding: 15 },
  topSection: { flexDirection: 'row', alignItems: 'center' },
  avatar: { width: 90, height: 90, borderRadius: 45, borderWidth: 1.5, borderColor: colors.white(0.9) },
  stats: { flexDirection: 'row', justifyContent: 'space-around', flex: 1, marginLeft: 20 },
  stat: { alignItems: 'center' },
  statNumber: { fontSize: 18, fontWeight: 'bold', color: colors.white(1) },
  statLabel: { fontSize: 13, color: colors.grey(0.6) },
  userInfo: { marginTop: 15 },
  fullName: { fontSize: 16, fontWeight: 'bold', color: colors.white(1) },
  username: { color: colors.grey(0.6), marginBottom: 4 },
  bio: { color: colors.white(0.9), marginBottom: 8 },
  editButton: { borderWidth: 1, borderColor: colors.white(0.8), borderRadius: 6, paddingVertical: 6, alignItems: 'center', marginTop: 5 },
  editText: { color: colors.white(1), fontWeight: '500' },
  articleCard: { backgroundColor: colors.darkBlue(2), borderRadius: 10, padding: 10, marginVertical: 8, flexDirection: 'row' },
  articleImage: { width: 90, height: 90, borderRadius: 8 },
  articleContent: { flex: 1, marginLeft: 10 },
  articleTitle: { color: colors.white(1), fontWeight: 'bold', fontSize: 16 },
  articleDesc: { color: colors.grey(0.7), fontSize: 14, marginVertical: 4 },
  articleMeta: { color: colors.grey(0.5), fontSize: 12 },
  buttonRow: { flexDirection: 'row', marginTop: 8 },
  editBtn: { marginRight: 10, backgroundColor: '#4CAF50', padding: 6, borderRadius: 4 },
  deleteBtn: { backgroundColor: '#F44336', padding: 6, borderRadius: 4 },
  btnText: { color: 'white', fontWeight: '600' },
});
