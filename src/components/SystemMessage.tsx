import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // For icons

const SystemMessage = () => {
  return (
    <View style={styles.card}>
      <View style={styles.leftSide}>
        <View
          style={{
            justifyContent: 'space-between',
            flex: 1,
            flexDirection: 'row',
          }}>
          <Text style={styles.newsTitle}>System Message</Text>
          <TouchableOpacity style={styles.shareButton}>
            <Icon name="share-variant" size={18} color="#145E94" />
          </TouchableOpacity>
        </View>

        <Text style={styles.paragraph}>
          Lorem Ipsum is a term for a completely common meaningless text -
          sometimes also called Lorem Ipsum!
        </Text>

        <View style={styles.footer}>
          <View style={styles.footerLeft}>
            <Icon name="clock-time-four-outline" size={14} color="#145E94" />
            <Text style={styles.timeText}> an hour ago</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  shareButton: {
    padding: 4,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 15,
    overflow: 'hidden',
    marginHorizontal: 16,
    borderWidth: 1,
    borderColor: '#e0e0e0',
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
    width: '100%',
    height: 100,
    borderRadius: 15,
    resizeMode: 'cover',
  },
  newsTitle: {
    color: '#145E94',
    fontFamily: 'Rubik',
    fontSize: wp('3.8%'), // Responsive font size (~14px for most screens)
    fontWeight: '400',
    lineHeight: hp('1.8%'),
  },
  paragraph: {
    color: '#555',
    fontFamily: 'Rubik',
    fontSize: wp('4.5%'), // Adjusts font size based on the screen width (approx 16px)
    fontWeight: '400',
    lineHeight: hp('2.5%'), // Line height adjusts proportionally to the screen height
  },
  footer: {
    flexDirection: 'row',
    marginVertical: 5,
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
    color: '#777',
    fontSize: 12,
  },
});

export default SystemMessage;
