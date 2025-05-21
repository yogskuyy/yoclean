
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';

export default function FormScreen() {
  const [data, setData] = useState([
    {
      id: '1',
      title: 'Cuci Mobil Standar',
      price: 'Rp 75.000',
      description: 'Pembersihan eksterior menyeluruh untuk mobil.',
      image: 'https://i.pinimg.com/736x/c0/f1/18/c0f118f50f63ff81b75074ca9640d3b7.jpg',
      bookmarkCount: 1250,
      date: '10 April 2025',
    },
    {
      id: '2',
      title: 'Detailing Premium',
      price: 'Rp 350.000',
      description: 'Pembersihan interior dan eksterior profesional.',
      image: 'https://i.pinimg.com/736x/e6/6b/69/e66b69fe43fe26780ae09757b14cd5ee.jpg',
      bookmarkCount: 980,
      date: '8 April 2025',
    },
  ]);

  const [formData, setFormData] = useState({
    title: '',
    price: '',
    description: '',
    image: '',
    bookmarkCount: '',
    date: '',
  });

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = () => {
    const newId = (data.length + 1).toString(); // Membuat ID baru untuk data yang ditambahkan
    const newData = { ...formData, id: newId, bookmarkCount: parseInt(formData.bookmarkCount) };
    setData([...data, newData]); // Menambahkan data baru ke array data
    console.log('Data Form Submitted:', newData);
    setFormData({ title: '', price: '', description: '', image: '', bookmarkCount: '', date: '' }); // Reset form
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Form Tambah Data</Text>

      {/* Input untuk title */}
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={formData.title}
        onChangeText={(text) => handleInputChange('title', text)} // Mengubah nilai title
      />

      {/* Input untuk price */}
      <TextInput
        style={styles.input}
        placeholder="Price"
        value={formData.price}
        onChangeText={(text) => handleInputChange('price', text)} // Mengubah nilai price
      />

      {/* Input untuk description */}
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={formData.description}
        onChangeText={(text) => handleInputChange('description', text)} // Mengubah nilai description
      />

      {/* Input untuk image URL */}
      <TextInput
        style={styles.input}
        placeholder="Image URL"
        value={formData.image}
        onChangeText={(text) => handleInputChange('image', text)} // Mengubah nilai image URL
      />

      {/* Input untuk bookmarkCount */}
      <TextInput
        style={styles.input}
        placeholder="Bookmark Count"
        value={formData.bookmarkCount}
        onChangeText={(text) => handleInputChange('bookmarkCount', text)} // Mengubah nilai bookmarkCount
        keyboardType="numeric"
      />

      {/* Input untuk date */}
      <TextInput
        style={styles.input}
        placeholder="Date"
        value={formData.date}
        onChangeText={(text) => handleInputChange('date', text)} // Mengubah nilai date
      />

      <Button title="Submit" onPress={handleSubmit} />
      
      {/* Menampilkan data yang telah ditambahkan */}
      <View style={styles.dataContainer}>
        <Text style={styles.dataTitle}>Data yang Tersimpan:</Text>
        {data.map((item) => (
          <View key={item.id} style={styles.dataItem}>
            <Text>{item.title} - {item.price}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  dataContainer: {
    marginTop: 20,
    width: '100%',
  },
  dataTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  dataItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
});
