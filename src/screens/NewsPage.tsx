import React from 'react';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Divider from '../components/Divider';
import Header from '../components/Header';
import NewsCard from '../components/NewsCard';
import NewsCardResult from '../components/NewsCardResult';
import SystemMessage from '../components/SystemMessage';

const NewsPage = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <View style={styles.card}>
          <ImageBackground
            source={require('../assets/rec.png')}
            style={styles.image}
            imageStyle={{borderRadius: 15}}>
            <View style={styles.overlayTextContainer}>
              <Text style={styles.subtitle}>
                Lorem Ipsum is a nickname for such a completely meaningless text
                - some Lorem Ipsum is
              </Text>
              <View style={styles.readingContainer}>
                <Icon name="clock-outline" size={16} color="#fff" />
                <Text style={styles.readingText}> 4 minutes of reading</Text>
              </View>
            </View>
          </ImageBackground>
        </View>

        <Divider />
        <NewsCard />
        <Divider />
        <NewsCard />
        <Divider />
        <NewsCardResult />
        <SystemMessage />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    overflow: 'hidden',
  },
  newsItem: {
    padding: 16,
    margin: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
  },
  card: {
    margin: 16,
    borderRadius: 15,
  },
  image: {
    width: wp('90%'), // Responsive width (approx 350px)
    height: hp('25%'), // Responsive height (approx 179px)
    borderRadius: wp('3%'), // Proportional for 12px-like effect
    backgroundColor: '#fff', // Assuming a background is needed
    opacity: 1, // Set to visible since opacity 0 hides the element
  },
  overlayTextContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.2)', // Lighter overlay
    borderRadius: 15,
  },
  readingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  readingText: {
    color: '#FFFFFF',
    fontFamily: 'Rubik',
    fontSize: wp('3.2%'), // Approx 12px
    fontWeight: '400',
    lineHeight: hp('1.5%'), // Approx 10.5px
  },
  subtitle: {
    color: '#fff',
    fontFamily: 'Rubik',
    fontSize: wp('4.2%'), // Roughly equivalent to 16px on a 390px wide screen
    fontWeight: '400',
    lineHeight: hp('2.4%'), // Approximately 19.68px relative to the screen height
  },
});

export default NewsPage;
