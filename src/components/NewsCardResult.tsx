import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Sharealt from 'react-native-vector-icons/AntDesign';
import Calendar from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Divider from './Divider';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const NewsCardResult = () => {
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

        <View>
          <Text style={styles.scoreText}>1 - 3</Text>
          <Text style={styles.scoreSubText}>1 - 0</Text>
          <Text style={styles.scoreSubText}>1 - 2</Text>
          <Text style={styles.scoreText}>4 - 3</Text>
        </View>

        {/* Right Side with Placeholder Users */}
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
            <Text style={styles.playerType}>(Partner)</Text>
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
    height: hp('31%'), // Responsive height, approx 238px
    borderRadius: wp('2%'), // Proportional for 8px-like effect
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
  userVSContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'gray',
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
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  chatButton: {
    borderBottomRightRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 50,
    height: '100%',
  },
  chatButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  player: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  profileContainer: {
    position: 'relative', // Required for absolute positioning of child elements
    width: 60, // Match the size of the profile picture
    height: 60, // Match the size of the profile picture
    alignItems: 'center', // Center the profile picture
    justifyContent: 'center', // Center the profile picture
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
    bottom: 0, // Align to the bottom
    right: 0, // Align to the right
    zIndex: 1, // Ensure it appears on top of the profile picture
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
  scoreText: {
    fontSize: 16,
    textAlign: 'center',
  },
  scoreSubText: {
    fontSize: 12,
    textAlign: 'center',
    borderColor: '#EEEEEE',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 3,
    paddingHorizontal: 10,
  },
});

export default NewsCardResult;
