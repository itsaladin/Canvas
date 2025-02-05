import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'; // Ant Design Icons

const UserCard = () => {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <TouchableOpacity style={styles.shareButton}>
          <Icon name="sharealt" size={24} color="#000" />
        </TouchableOpacity>
        <View style={styles.userImages}>
          {[
            require('../assets/ball.png'),
            require('../assets/rec.png'),
            require('../assets/pro.png'),
            require('../assets/rec.png'),
          ].map((uri, index) => (
            <View key={index} style={styles.userContainer}>
              <Image source={uri} style={styles.profileImage} />
              <View style={styles.activeDot} />
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    overflow: 'hidden',
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
  },
  shareButton: {
    padding: 8,
  },
  userImages: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  userContainer: {
    position: 'relative',
    marginHorizontal: 5,
  },
  profileImage: {
    width: 32,
    height: 32,
    borderRadius: 20,
  },
  activeDot: {
    position: 'absolute',
    bottom: 0,
    right: 2,
    width: 8,
    height: 8,
    backgroundColor: '#88EC65',
    borderRadius: 4,
  },
});

export default UserCard;
