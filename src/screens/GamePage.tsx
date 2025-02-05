import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Card from '../components/Card';
import Header from '../components/Header';

const GamePage = ({navigation}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.dateFilter}>
        <TouchableOpacity style={styles.filterButton}>
          <Image
            source={require('../assets/filter.png')}
            style={styles.image}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.dropdownButton}
          onPress={toggleDropdown}>
          <Text style={styles.dropdownLabel}>Date | Hour...</Text>
          <Icon
            name={isOpen ? 'chevron-up' : 'chevron-down'}
            size={20}
            color="#145E94"
            style={styles.icon}
          />
        </TouchableOpacity>
        {isOpen && (
          <View style={styles.dropdownMenu}>
            <Text style={styles.dropdownItem}>Option 1</Text>
          </View>
        )}
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Doubles games</Text>
      </TouchableOpacity>

      <ScrollView>
        <Card navigation={navigation} />
        <Card navigation={navigation} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  dateFilter: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 8,
    borderBottomColor: '#EEEEEE',
    borderBottomWidth: 1,
    paddingHorizontal: 20,
  },
  dropdownButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 5,
    borderWidth: 1,
    marginLeft: 10,
    borderColor: '#EEEEEE',
    paddingHorizontal: wp('2%'),
    width: wp('48%'), // Approx 182px
    height: hp('4%'), // Approx 31px
    borderRadius: wp('12%'), // Responsive for 48px-like radius
  },
  dropdownLabel: {
    color: '#000000',
    marginLeft: 10,
    fontFamily: 'Rubik',
    fontSize: wp('3.8%'), // Approx 14px on most screens
    fontWeight: '400',
    lineHeight: hp('1.5%'), // Responsive line-height, approx 12.25px
    textAlign: 'center',
  },
  icon: {
    width: wp('5%'), // Adjust icon size
    height: wp('5%'),
    resizeMode: 'contain',
  },
  dropdownMenu: {
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  dropdownItem: {
    paddingVertical: 5,
    fontSize: 12,
    color: '#333',
  },
  button: {
    backgroundColor: 'white',
    borderColor: '#145E94',
    borderWidth: 1,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 15,
    width: wp('33%'), // Approx 125px
    height: hp('4.5%'), // Approx 34px
    marginTop: 10,
    marginLeft: 20,
  },
  filterButton: {
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  image: {
    width: wp('7%'),
    height: wp('7%'),
  },
  buttonText: {
    color: '#145E94',
    fontSize: 12,
    width: wp('33%'), // Approx 125px
    height: hp('4.5%'), // Approx 34px
    textAlign: 'center',
    alignSelf: 'center',
    textAlignVertical: 'center',
  },
});

export default GamePage;
