/**
 * yoCleaning - Cleaning Service App
 * Made with React Native
 *
 * @format
 */

import React, { useState } from 'react';
import type { PropsWithChildren } from 'react';
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
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({ children, title }: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function ServiceCard({ title, price, description, imageUrl, onPress }: 
  { title: string, price: string, description: string, imageUrl: string, onPress: () => void }): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  
  return (
    <TouchableOpacity 
      onPress={onPress}
      style={[
        styles.serviceCard,
        {
          backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
        }
      ]}>
      <Image 
        source={{ uri: imageUrl }} 
        style={styles.serviceImage}
        resizeMode="cover"
      />
      <View style={styles.serviceContent}>
        <Text style={styles.serviceTitle}>{title}</Text>
        <Text style={styles.servicePrice}>{price}</Text>
        <Text style={styles.serviceDescription}>{description}</Text>
        <View style={styles.bookButton}>
          <Text style={styles.bookButtonText}>Pesan Sekarang</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  const [selectedTab, setSelectedTab] = useState('home');

  const cleaningServices = [
    {
      id: '1',
      title: 'Standard Cleaning',
      price: 'Rp 150.000',
      description: 'Basic cleaning service for your home or office.',
      imageUrl: 'https://source.unsplash.com/random/300x200/?cleaning',
    },
    {
      id: '2',
      title: 'Deep Cleaning',
      price: 'Rp 350.000',
      description: 'Thorough cleaning for those tough-to-reach areas.',
      imageUrl: 'https://source.unsplash.com/random/300x200/?deep-cleaning',
    },
    {
      id: '3',
      title: 'Office Cleaning',
      price: 'Rp 500.000',
      description: 'Professional cleaning for your office space.',
      imageUrl: 'https://source.unsplash.com/random/300x200/?office-cleaning',
    },
    {
      id: '4',
      title: 'Post-Construction',
      price: 'Rp 750.000',
      description: 'Clean-up after your construction or renovation project.',
      imageUrl: 'https://source.unsplash.com/random/300x200/?construction-cleaning',
    },
  ];

  const renderHeader = () => {
    return (
      <View style={styles.header}>
        <Text style={styles.headerTitle}>yoClean</Text>
        <Text style={styles.headerSubtitle}>Professional Cleaning Services</Text>
      </View>
    );
  };

  const renderHeroBanner = () => {
    return (
      <ImageBackground
        source={{ uri: 'https://source.unsplash.com/random/800x400/?cleaning-service' }}
        style={styles.heroBanner}
      >
        <View style={styles.heroOverlay}>
          <Text style={styles.heroTitle}>Professional Cleaning</Text>
          <Text style={styles.heroSubtitle}>For Your Home & Office</Text>
          <TouchableOpacity style={styles.heroButton}>
            <Text style={styles.heroButtonText}>Book Now</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  };

  const renderFeatures = () => {
    return (
      <View style={styles.featuresContainer}>
        <View style={styles.featureItem}>
          <Image 
            source={{ uri: 'https://source.unsplash.com/random/100x100/?eco-friendly' }}
            style={styles.featureIcon}
          />
          <Text style={styles.featureTitle}>Eco-Friendly</Text>
        </View>
        <View style={styles.featureItem}>
          <Image 
            source={{ uri: 'https://source.unsplash.com/random/100x100/?professional' }}
            style={styles.featureIcon}
          />
          <Text style={styles.featureTitle}>Professional</Text>
        </View>
        <View style={styles.featureItem}>
          <Image 
            source={{ uri: 'https://source.unsplash.com/random/100x100/?guarantee' }}
            style={styles.featureIcon}
          />
          <Text style={styles.featureTitle}>Guaranteed</Text>
        </View>
      </View>
    );
  };

  const renderHome = () => {
    return (
      <View style={styles.homeContainer}>
        {renderHeroBanner()}
        
        <View style={styles.banner}>
          <Text style={styles.bannerText}>Get 20% off your first cleaning!</Text>
        </View>
        
        {renderFeatures()}
        
        <Section title="Our Services">
          Choose from our range of professional cleaning services
        </Section>
        
        <FlatList
          data={cleaningServices}
          renderItem={({ item }) => (
            <ServiceCard
              title={item.title}
              price={item.price}
              description={item.description}
              imageUrl={item.imageUrl}
              onPress={() => console.log(`Selected service: ${item.title}`)}
            />
          )}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.serviceList}
        />
        
        <View style={styles.testimonialSection}>
          <Text style={styles.testimonialTitle}>Testimoni dari pelanggan</Text>
          <View style={styles.testimonialCard}>
            <Image 
              source={{ uri: 'https://source.unsplash.com/random/100x100/?portrait' }}
              style={styles.testimonialImage}
            />
            <Text style={styles.testimonialText}>"bersih dan kerjanya cepat"</Text>
            <Text style={styles.testimonialAuthor}>- yanto.</Text>
          </View>
        </View>
      </View>
    );
  };

  const renderAccount = () => {
    return (
      <View style={styles.accountContainer}>
        <Section title="My Account">
          Manage your bookings and profile
        </Section>
        <View style={styles.profileCard}>
          <Image 
            source={{ uri: 'https://source.unsplash.com/random/150x150/?avatar' }}
            style={styles.profileImage}
          />
          <Text style={styles.profileName}>John Doe</Text>
          <Text style={styles.profileEmail}>john.doe@example.com</Text>
          <TouchableOpacity style={styles.profileButton}>
            <Text style={styles.profileButtonText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
        <Section title="My Bookings">
          View your upcoming and past bookings
        </Section>
        <View style={styles.bookingCard}>
          <Text style={styles.bookingTitle}>Standard Cleaning</Text>
          <Text style={styles.bookingDate}>March 22, 2025 - 10:00 AM</Text>
          <Text style={styles.bookingStatus}>Status: Confirmed</Text>
        </View>
      </View>
    );
  };

  const renderBookings = () => {
    return (
      <View style={styles.bookingsContainer}>
        <Section title="Book a Cleaning">
          Choose a service and schedule your cleaning
        </Section>
        <View style={styles.bookingForm}>
          <Text style={styles.bookingLabel}>Service Type</Text>
          <View style={styles.bookingSelect}>
            <Text>Standard Cleaning</Text>
          </View>
          
          <Text style={styles.bookingLabel}>Date & Time</Text>
          <View style={styles.bookingSelect}>
            <Text>Select Date and Time</Text>
          </View>
          
          <Text style={styles.bookingLabel}>Address</Text>
          <View style={styles.bookingSelect}>
            <Text>Enter your address</Text>
          </View>
          
          <TouchableOpacity style={styles.bookingSubmit}>
            <Text style={styles.bookingSubmitText}>Book Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const renderTabContent = () => {
    switch (selectedTab) {
      case 'home':
        return renderHome();
      case 'bookings':
        return renderBookings();
      case 'account':
        return renderAccount();
      default:
        return renderHome();
    }
  };

  return (
    <View style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        style={backgroundStyle}>
        {renderHeader()}
        {renderTabContent()}
      </ScrollView>
      <View style={styles.tabBar}>
        <TouchableOpacity 
          style={[styles.tabItem, selectedTab === 'home' && styles.activeTab]} 
          onPress={() => setSelectedTab('home')}>
          <Text style={styles.tabText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.tabItem, selectedTab === 'bookings' && styles.activeTab]} 
          onPress={() => setSelectedTab('bookings')}>
          <Text style={styles.tabText}>Book</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.tabItem, selectedTab === 'account' && styles.activeTab]} 
          onPress={() => setSelectedTab('account')}>
          <Text style={styles.tabText}>Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 24,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: '400',
  },
  header: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#2E86C1',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#FFFFFF',
    marginTop: 4,
  },
  homeContainer: {
    flex: 1,
  },
  heroBanner: {
    height: 200,
    width: '100%',
    justifyContent: 'center',
  },
  heroOverlay: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    padding: 20,
  },
  heroTitle: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  heroSubtitle: {
    color: '#FFFFFF',
    fontSize: 16,
    marginTop: 5,
  },
  heroButton: {
    backgroundColor: '#2E86C1',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 15,
    alignSelf: 'flex-start',
  },
  heroButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  featuresContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
    backgroundColor: '#FFFFFF',
  },
  featureItem: {
    alignItems: 'center',
  },
  featureIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  featureTitle: {
    marginTop: 8,
    fontWeight: '500',
  },
  banner: {
    backgroundColor: '#F39C12',
    padding: 15,
    marginHorizontal: 15,
    marginTop: 15,
    borderRadius: 8,
  },
  bannerText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  serviceList: {
    paddingHorizontal: 15,
    paddingBottom: 20,
  },
  serviceCard: {
    marginVertical: 10,
    borderRadius: 8,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  serviceImage: {
    height: 150,
    width: '100%',
  },
  serviceContent: {
    padding: 15,
  },
  serviceTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2E86C1',
  },
  servicePrice: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 4,
  },
  serviceDescription: {
    fontSize: 14,
    marginTop: 8,
    color: '#555',
  },
  bookButton: {
    backgroundColor: '#2E86C1',
    padding: 10,
    borderRadius: 6,
    alignItems: 'center',
    marginTop: 12,
  },
  bookButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  tabBar: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#DDD',
    backgroundColor: '#FFFFFF',
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    padding: 15,
  },
  activeTab: {
    borderTopWidth: 3,
    borderTopColor: '#2E86C1',
  },
  tabText: {
    fontSize: 14,
    fontWeight: '500',
  },
  accountContainer: {
    flex: 1,
    paddingBottom: 20,
  },
  profileCard: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    margin: 15,
    borderRadius: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  profileEmail: {
    fontSize: 16,
    color: '#555',
    marginTop: 4,
  },
  profileButton: {
    backgroundColor: '#2E86C1',
    padding: 10,
    borderRadius: 6,
    alignItems: 'center',
    marginTop: 15,
    paddingHorizontal: 20,
  },
  profileButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  bookingCard: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    margin: 15,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  bookingTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  bookingDate: {
    fontSize: 16,
    marginTop: 4,
  },
  bookingStatus: {
    fontSize: 14,
    color: '#27AE60',
    marginTop: 8,
    fontWeight: '500',
  },
  bookingsContainer: {
    flex: 1,
    paddingBottom: 20,
  },
  bookingForm: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    margin: 15,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  bookingLabel: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 8,
    marginTop: 15,
  },
  bookingSelect: {
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 6,
    padding: 12,
  },
  bookingSubmit: {
    backgroundColor: '#2E86C1',
    padding: 15,
    borderRadius: 6,
    alignItems: 'center',
    marginTop: 20,
  },
  bookingSubmitText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  testimonialSection: {
    padding: 20,
    backgroundColor: '#F8F9FA',
    marginTop: 15,
  },
  testimonialTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  testimonialCard: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  testimonialImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginBottom: 15,
  },
  testimonialText: {
    fontSize: 14,
    fontStyle: 'italic',
    textAlign: 'center',
    marginBottom: 10,
  },
  testimonialAuthor: {
    fontWeight: '600',
    color: '#2E86C1',
  },
});

export default App;