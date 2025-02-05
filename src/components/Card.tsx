import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Sharealt from 'react-native-vector-icons/AntDesign';
import Calendar from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Divider from './Divider';

import LinearGradient from 'react-native-linear-gradient';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const Card = ({navigation}) => {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.title}>Yarkon Park, Tel Aviv | Court #2</Text>
        <TouchableOpacity>
          <Sharealt
            name="sharealt"
            style={{
              width: wp('4.5%'), // Approx 17.37px
              height: hp('4.3%'), // Approx 18.53px
              paddingTop: 5,
            }}
            size={20}
            color="#145E94"
          />
        </TouchableOpacity>
      </View>

      {/* Card Subheader */}
      <View style={styles.subHeader}>
        <View style={styles.infoRow}>
          <Calendar name="calendar" size={15} color="#145E94" />
          <Text style={styles.infoText}>02/24/2023</Text>
          <Icon
            name="clock-outline"
            size={16}
            color="#145E94"
            style={styles.iconSpacing}
          />
          <Text style={styles.infoText}>5:30 PM</Text>
          <Calendar
            name="message-circle"
            size={16}
            color="#145E94"
            style={styles.iconSpacing}
          />
          <Text style={styles.infoText}>12 Comments</Text>
        </View>
      </View>
      <Divider />

      <View style={styles.body}>
        <View style={styles.userContainer}>
          <View style={styles.player}>
            <View style={styles.profileContainer}>
              <View style={styles.outlinedBorder}>
                <Image
                  source={require('../assets/pro1.png')}
                  style={styles.profilePic}
                />
              </View>
              <Image
                source={require('../assets/bra.png')} // Brazil flag
                style={styles.countryLogo}
              />
            </View>
            <Text style={styles.playerName}>Mandler T.</Text>
            <Text style={styles.playerType}>(PRO)</Text>
          </View>

          <View style={[styles.player, {marginLeft: 10}]}>
            <View style={styles.profileContainer}>
              <View style={styles.outlinedBorder}>
                <Image
                  source={require('../assets/pro2.png')}
                  style={styles.profilePic}
                />
              </View>
              <Image
                source={require('../assets/bra.png')} // Brazil flag
                style={styles.countryLogo}
              />
            </View>
            <Text style={styles.playerName}>Oz Y.</Text>
            <Text style={styles.playerType}>(The Wiz)</Text>
          </View>
        </View>

        <Text style={styles.vsText}>VS.</Text>

        {/* Right Side with Placeholder Users */}
        <View style={styles.userContainer}>
          <View style={[styles.player, {marginRight: 10}]}>
            <View style={styles.placeholderUser}>
              <Icon name="plus" size={28} color="#145E94" />
            </View>
            <Text style={styles.placeholderText}>player</Text>
            <Text style={styles.nicknameText}>Nickname</Text>
          </View>

          <View style={styles.player}>
            <View style={styles.placeholderUser}>
              <Icon name="plus" size={28} color="#145E94" />
            </View>
            <Text style={styles.placeholderText}>player</Text>
            <Text style={styles.nicknameText}>Nickname</Text>
          </View>
        </View>
      </View>

      <Divider />
      <View style={styles.footer}>
        <View style={styles.footerLeft}>
          <View style={styles.row}>
            <Icon name="water-outline" size={16} color="#145E94" />
            <Text style={styles.infoText}>25% Precipitation</Text>
          </View>
          <View style={styles.row}>
            <Icon name="weather-cloudy" size={16} color="#145E94" />
            <Text style={styles.infoText}>Cloudy</Text>
          </View>
        </View>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Chat');
          }}>
          <LinearGradient
            colors={['#3498DB', '#34506D']}
            style={styles.chatButton}>
            <Text style={styles.chatButtonText}>Chat</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginVertical: 10,
    borderColor: '#EEEEEE',
    borderWidth: 1,
    width: wp('90%'), // Responsive width, approx 350px on a typical screen
    borderRadius: wp('2%'), // Proportional for 8px-like effect
    flex: 1, // Allow the card to grow dynamically
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 16,
    marginTop: 10,
  },
  title: {
    color: '#145E94',
    fontFamily: 'Rubik',
    fontSize: wp('4%'), // Approx 16px on most screens
    fontWeight: '400',
    lineHeight: hp('2%'),
  },
  subHeader: {
    marginBottom: 15,
    paddingHorizontal: 16,
    marginTop: 5,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconSpacing: {
    marginLeft: 10,
  },
  infoText: {
    color: '#B0AAAA',
    marginLeft: 4,
    fontFamily: 'Rubik',
    fontSize: wp('3.8%'), // Responsive font size (approx 14px)
    fontWeight: '400',
    lineHeight: hp('1.8%'), // Responsive line-height (approx 12.25px)
  },
  body: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 15,
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  vsText: {
    color: '#145E94',
    marginBottom: 40,
    padding: 1,
    fontFamily: 'Rubik',
    fontSize: wp('5.6%'), // Adjusted font size based on screen width (approx 21px)
    fontWeight: '400',
    lineHeight: hp('2.3%'), // Adjusted line height based on screen height (approx 18.38px)
  },
  placeholderUser: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#145E94',
  },
  placeholderText: {
    color: '#210C0C',
    paddingTop: 10,
    paddingBottom: 5,
    textAlign: 'center',
    fontFamily: 'Rubik',
    fontSize: wp('3.8%'), // Responsive font size, approx 14px on most screens
    fontWeight: '400',
    lineHeight: hp('2%'), // Responsive line-height, approx 12.25px
  },
  nicknameText: {
    color: '#B0AAAA',
    textAlign: 'center',
    marginTop: 2,
    fontFamily: 'Poppins',
    fontSize: wp('3.5%'), // Responsive font size (approx 12px)
    fontWeight: '400',
    lineHeight: hp('1.4%'),
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // paddingVertical: hp('1%'), // Responsive padding
  },
  footerLeft: {
    paddingLeft: wp('5%'), // Responsive padding
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  chatButton: {
    borderBottomRightRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: wp('10%'), // Responsive padding
    height: hp('6%'), // Responsive height
  },
  chatButtonText: {
    color: '#fff',
    fontSize: wp('4%'), // Responsive font size
    fontWeight: 'bold', // Responsive padding
  },
  player: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  profileContainer: {
    position: 'relative',
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  outlinedBorder: {
    borderColor: '#4774AD',
    borderWidth: 0.8,
    borderRadius: 50,
    padding: 2,
  },
  profilePic: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  countryLogo: {
    width: 20,
    height: 20,
    position: 'absolute',
    bottom: 0,
    right: 0,
    zIndex: 1,
  },
  playerName: {
    fontFamily: 'Rubik',
    fontSize: wp('3.8%'), // Responsive font size, approx 14px on most screens
    fontWeight: '400',
    lineHeight: hp('2%'), // Responsive line-height, approx 12.25px
    paddingTop: 10,
    paddingBottom: 5,
  },
  playerType: {
    color: '#B0AAAA',
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontSize: wp('3.5%'), // Responsive font size (approx 12px)
    fontWeight: '400',
    lineHeight: hp('1.4%'),
  },
});

export default Card;
