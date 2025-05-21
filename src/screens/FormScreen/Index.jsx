import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Alert, Image } from 'react-native';
import axios from 'axios';

const API_URL = 'https://682607c9397e48c91314b34e.mockapi.io/api/artikel';

export default function FormScreen({ route, navigation }) {
  const isEdit = route?.params?.isEdit;
  const editData = route?.params?.data;

  const [formData, setFormData] = useState({
    title: '',
    price: '',
    description: '',
    image: '',
    bookmarkCount: '',
    date: '',
  });

  useEffect(() => {
    if (isEdit && editData) {
      setFormData(editData);
    }
  }, [isEdit, editData]);

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = async () => {
    try {
      if (isEdit) {
        await axios.put(`${API_URL}/${formData.id}`, {
          ...formData,
          bookmarkCount: parseInt(formData.bookmarkCount),
        });
        Alert.alert('Berhasil', 'Data berhasil diperbarui!');
      } else {
        await axios.post(API_URL, {
          ...formData,
          bookmarkCount: parseInt(formData.bookmarkCount),
        });
        Alert.alert('Berhasil', 'Data berhasil ditambahkan!');
      }
      navigation.goBack();
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{isEdit ? 'Edit Data' : 'Form Tambah Data'}</Text>

      <TextInput
        style={styles.input}
        placeholder="Title"
        value={formData.title}
        onChangeText={(text) => handleInputChange('title', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Price"
        value={formData.price}
        onChangeText={(text) => handleInputChange('price', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={formData.description}
        onChangeText={(text) => handleInputChange('description', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Image URL"
        value={formData.image}
        onChangeText={(text) => handleInputChange('image', text)}
      />

      {formData.image ? (
        <Image
          source={{ uri: formData.image }}
          style={styles.imagePreview}
          resizeMode="cover"
        />
      ) : null}

      <TextInput
        style={styles.input}
        placeholder="Bookmark Count"
        value={formData.bookmarkCount.toString()}
        onChangeText={(text) => handleInputChange('bookmarkCount', text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Date"
        value={formData.date}
        onChangeText={(text) => handleInputChange('date', text)}
      />

      <Button title={isEdit ? 'Update' : 'Submit'} onPress={handleSubmit} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
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
  imagePreview: {
    width: '100%',
    height: 200,
    marginBottom: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
});
 