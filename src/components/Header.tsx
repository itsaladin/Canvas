import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

const Header = () => {
  return (
    <View style={styles.header}>
      <View
        style={{
          borderColor: '#4774AD',
          borderWidth: 0.8,
          borderRadius: 50,
          padding: 2,
          marginRight: 10,
        }}>
        <Image
          style={styles.profilePic}
          source={require('../assets/pro.png')}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.name}>Noam Penn (Panther)</Text>
        <Text style={styles.title}>a tennis player</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 85,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
    alignItems: 'center',
    backgroundColor: '#1F1B1B',
    flexDirection: 'row',
    paddingHorizontal: 16,
  },
  profilePic: {
    width: 50,
    height: 50,
  },
  textContainer: {
    justifyContent: 'center',
  },
  name: {
    fontFamily: 'Rubik',
    fontSize: RFValue(14),
    fontWeight: '400',
    lineHeight: RFValue(12.25),
    textAlign: 'left',
    color: '#FFFFFF',
  },
  title: {
    color: '#B0AAAA',
    fontFamily: 'Poppins',
    fontSize: RFValue(12),
    fontWeight: '400',
    lineHeight: RFValue(10.5),
    paddingTop: 3,
  },
});

export default Header;
