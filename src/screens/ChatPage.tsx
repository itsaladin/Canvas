import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import UserCard from '../components/ActiveUser';
import ChatHeader from '../components/ChatHeader';
import Divider from '../components/Divider';

const ChatPage = () => {
  const [inputText, setInputText] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: 'Hello! How are you today? This is a longer test message to check bubble alignment.',
      timestamp: '14:01',
      user: true,
    },
    {
      id: 2,
      text: 'Sure, everything is fine! ',
      timestamp: '14:02',
      user: false,
    },
    {
      id: 3,
      text: 'Great, lets catch up later!',
      timestamp: '14:05',
      user: true,
    },
    {
      id: 4,
      text: 'Hurry up!',
      timestamp: '14:05',
      user: false,
    },
  ]);

  const handleSend = () => {
    if (inputText.trim()) {
      setMessages([
        ...messages,
        {
          id: messages.length + 1,
          text: inputText,
          timestamp: '14:10',
          user: true,
        },
      ]);
      setInputText('');
    }
  };

  return (
    <View style={styles.container}>
      <ChatHeader />
      <UserCard />
      <Divider />
      <ScrollView style={styles.chatContainer}>
        {messages.map((msg, index) => (
          <View
            key={msg.id}
            style={[
              styles.messageContainer,
              msg.user ? styles.sentMessage : styles.receivedMessage,
            ]}>
            {!msg.user && (
              <Image
                source={{
                  uri: msg.user
                    ? 'https://picsum.photos/123'
                    : 'https://picsum.photos/1234',
                }}
                style={styles.profilePic}
              />
            )}
            <View style={styles.messageContent}>
              {index === messages.length - 1 && msg.user ? (
                <LinearGradient
                  colors={['#34506D', '#3498DB']}
                  style={styles.lastMessageBubble}>
                  <Text style={styles.messageTextWhite}>{msg.text}</Text>
                  <Text style={styles.timestampGradient}>{msg.timestamp}</Text>
                </LinearGradient>
              ) : (
                <View style={styles.messageBubble}>
                  <Text style={styles.messageText}>{msg.text}</Text>
                  <Text style={styles.timestamp}>{msg.timestamp}</Text>
                </View>
              )}
            </View>
            {msg.user && (
              <Image
                source={{
                  uri: msg.user
                    ? 'https://picsum.photos/123'
                    : 'https://picsum.photos/1234',
                }}
                style={styles.profilePicRight}
              />
            )}
          </View>
        ))}
      </ScrollView>

      <Divider />
      <View style={styles.inputContainer}>
        <TouchableOpacity style={styles.fileButton}>
          <Icon name="plus" size={26} color="#145E94" />
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          value={inputText}
          onChangeText={setInputText}
          placeholder="Add a comment..."
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
          <Icon name="send" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  chatContainer: {
    flex: 1,
    marginTop: 5,
  },
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingHorizontal: 10,
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  profilePicRight: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginLeft: 10,
  },
  messageContent: {
    maxWidth: '75%',
  },
  messageBubble: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 4,
    borderColor: '#D9D9D9',
    borderWidth: 1,
  },
  lastMessageBubble: {
    borderRadius: 10,
    padding: 10,
  },
  messageText: {
    color: '#210C0C',
    fontFamily: 'Rubik',
    fontSize: wp('4.5%'), // Approx 16px on standard screen width
    fontWeight: '300',
    lineHeight: hp('2.8%'), // Approx 20px based on typical screen height
  },
  messageTextWhite: {
    color: '#fff',
  },
  timestamp: {
    fontSize: 8,
    color: '#999',
    marginTop: 4,
  },
  timestampGradient: {
    fontSize: 8,
    color: 'white',
    marginTop: 4,
    marginLeft: 30,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
  },
  fileButton: {
    padding: 10,
    borderRadius: 24,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 24,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginHorizontal: 10,

    fontFamily: 'Rubik',
    fontSize: wp('4%'), // Approx 16px
    fontWeight: '400',
    lineHeight: hp('2.2%'), // Approx 14px
  },
  sendButton: {
    backgroundColor: '#145E94',
    padding: 7,
    borderRadius: 24,
  },
  sentMessage: {
    justifyContent: 'flex-end',
  },
  receivedMessage: {
    justifyContent: 'flex-start',
  },
});

export default ChatPage;
