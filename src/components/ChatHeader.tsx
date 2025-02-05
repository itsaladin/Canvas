import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ChatHeader = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>
        Monday, February 23 | 14:00 - Tel Aviv
      </Text>
      <TouchableOpacity>
        <Icon name="chevron-right" size={24} color="#145E94" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 25,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerText: {
    color: '#145E94',

    fontFamily: 'Rubik',
    fontSize: wp('5%'), // Adjusts font size responsively
    fontWeight: '400',
    lineHeight: hp('2.5%'), // Adjusts line height responsively
    textAlign: 'center',
  },
});

export default ChatHeader;
