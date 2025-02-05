import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // For icons

const NewsCard = () => {
  return (
    <View style={styles.card}>
      <View style={styles.leftSide}>
        <Text style={styles.newsTitle}>News</Text>

        <Text style={styles.paragraph}>
          In recent days, adventurers have been exploring the untouched corners
          of the world.
        </Text>

        <View style={styles.footer}>
          <View style={styles.footerLeft}>
            <Icon name="clock-time-four-outline" size={14} color="#145E94" />
            <Text style={styles.timeText}> 1 hour ago</Text>
          </View>
          <View style={styles.footerRight}>
            <Icon name="chat" size={14} color="#145E94" />
            <Text style={styles.commentText}> 26 comments</Text>
          </View>
        </View>
      </View>

      <View style={styles.rightSide}>
        <Image source={require('../assets/ball.png')} style={styles.image} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    marginHorizontal: 16,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 10,
  },
  leftSide: {
    flex: 3, // 3/4 of the card
    justifyContent: 'flex-start',
  },
  rightSide: {
    flex: 1,
    alignSelf: 'center',
  },
  image: {
    resizeMode: 'cover',
    width: wp('20%'), // Responsive width (103px on 375px screen)
    height: hp('12%'), // Responsive height (84px on 812px screen)
    borderRadius: wp('3%'), // Roughly 12px equivalent
  },
  newsTitle: {
    color: '#145E94',
    fontFamily: 'Rubik',
    fontSize: wp('3.8%'), // Approx 14px
    fontWeight: '400',
    lineHeight: hp('2%'), // Approx 12.25px
  },
  paragraph: {
    color: '#000000',
    fontFamily: 'Rubik',
    fontSize: wp('4%'), // Approx 16px on most screens
    fontWeight: '400',
    lineHeight: hp('2.4%'), // Approx 19px based on screen height
    paddingTop: 5,
  },
  footer: {
    flexDirection: 'row',
    marginTop: 5,
  },
  footerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  footerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  timeText: {
    color: '#B0AAAA',
    fontFamily: 'Rubik',
    fontSize: wp('3.5%'), // Approximately 14px for typical screen
    fontWeight: '400',
    lineHeight: hp('1.8%'), // Roughly 12.25px dynamic line height
  },
  commentText: {
    color: '#B0AAAA',
    fontFamily: 'Rubik',
    fontSize: wp('3.5%'), // Approximately 14px for typical screen
    fontWeight: '400',
    lineHeight: hp('1.8%'), // Roughly 12.25px dynamic line height
  },
});

export default NewsCard;
