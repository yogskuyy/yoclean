import React, { useState } from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const ServiceCard = ({ title, price, description, imageUrl, onPress }: 
  { title: string, price: string, description: string, imageUrl: string, onPress: () => void }): React.JSX.Element => {
  
  return (
    <TouchableOpacity onPress={onPress} style={styles.serviceCard}>
      <Image 
        source={{ uri: imageUrl }} 
        style={styles.serviceImage}
        resizeMode="cover"
      />
      <View style={styles.serviceContent}>
        <Text style={styles.serviceTitle}>{title}</Text>
        <Text style={styles.servicePrice}>{price}</Text>
        <Text style={styles.serviceDescription}>{description}</Text>
        <TouchableOpacity style={styles.bookButton}>
          <Text style={styles.bookButtonText}>Booking Sekarang</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const App = (): React.JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark';
  const [selectedTab, setSelectedTab] = useState('home');

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  const vehicleCleaningServices = [
    {
      id: '1',
      title: 'Cuci Mobil Standar',
      price: 'Rp 75.000',
      description: 'Pembersihan eksterior menyeluruh untuk mobil.',
      imageUrl: 'https://images.unsplash.com/photo-1615228402326-7adf9a257f2b?w=600',
    },
    {
      id: '2',
      title: 'Detailing Premium',
      price: 'Rp 350.000',
      description: 'Pembersihan interior dan eksterior profesional.',
      imageUrl: 'https://images.unsplash.com/photo-1552630415-16f4d9341b58?w=600',
    },
    {
      id: '3',
      title: 'Detailing Premium',
      price: 'Rp 350.000',
      description: 'Pembersihan interior dan eksterior profesional.',
      imageUrl: 'https://images.unsplash.com/photo-1552630415-16f4d9341b58?w=600',
    },
    {
      id: '4',
      title: 'Detailing Premium',
      price: 'Rp 350.000',
      description: 'Pembersihan interior dan eksterior profesional.',
      imageUrl: 'https://images.unsplash.com/photo-1552630415-16f4d9341b58?w=600',
    },
  ];

  const renderHeader = () => (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>yoClean</Text>
      <Text style={styles.headerSubtitle}>Layanan Cuci Kendaraan Profesional</Text>
    </View>
  );

  const renderHome = () => (
    <View style={styles.homeContainer}>
      <ImageBackground
        source={{ uri: 'https://images.unsplash.com/photo-1585313640520-c0b6bef7f1c0?w=800' }}
        style={styles.heroBanner}
      >
        <View style={styles.heroOverlay}>
          <Text style={styles.heroTitle}>Bersihkan Kendaraanmu</Text>
          <Text style={styles.heroSubtitle}>Cepat, Bersih, Profesional</Text>
          <TouchableOpacity style={styles.heroButton}>
            <Text style={styles.heroButtonText}>Booking Sekarang</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
      
      <View style={styles.serviceTitleContainer}>
        <Text style={styles.serviceSectionTitle}>Layanan Kami</Text>
      </View>
      
      <FlatList
        data={vehicleCleaningServices}
        renderItem={({ item }) => (
          <ServiceCard
            title={item.title}
            price={item.price}
            description={item.description}
            imageUrl={item.imageUrl}
            onPress={() => console.log(`Layanan dipilih: ${item.title}`)}
          />
        )}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.serviceList}
        scrollEnabled={false}
      />
    </View>
  );

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {renderHeader()}
        {renderHome()}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    backgroundColor: '#F7F9FC',
  },
  header: {
    backgroundColor: '#007AFF',
    padding: 20,
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    elevation: 5,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#EDEDED',
  },
  homeContainer: {
    padding: 15,
  },
  heroBanner: {
    height: 250,
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 20,
  },
  heroOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heroTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
  },
  heroSubtitle: {
    fontSize: 16,
    color: '#EDEDED',
    marginBottom: 10,
  },
  heroButton: {
    backgroundColor: '#FF9500',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  heroButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  serviceCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
    marginBottom: 15,
    overflow: 'hidden',
  },
  serviceImage: {
    width: '100%',
    height: 150,
  },
  serviceContent: {
    padding: 15,
  },
  serviceTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  servicePrice: {
    fontSize: 16,
    fontWeight: '600',
    color: '#007AFF',
    marginVertical: 5,
  },
  serviceDescription: {
    fontSize: 14,
    color: '#666',
  },
  bookButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 8,
    borderRadius: 8,
    marginTop: 10,
    alignItems: 'center',
  },
  bookButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  serviceTitleContainer: {
    marginBottom: 15,
  },
  serviceSectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  serviceList: {
    paddingBottom: 20,
  },
});

export default App;
