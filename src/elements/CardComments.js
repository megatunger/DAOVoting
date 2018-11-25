import React from 'react';
import { Avatar } from 'react-native-elements';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Title } from './Title';
import LinearGradient from 'react-native-linear-gradient';
import { BlurView, VibrancyView } from 'react-native-blur';
export const Card = props => {
  console.log(props);
  return (
    <View style={{ flexDirection: 'row' }}>
      <View style={styles.left}>
        <Avatar
          medium
          rounded
          source={require('../images/Face.png')}
          onPress={() => console.log('Works!')}
          activeOpacity={0.7}
        />
      </View>
      <View style={styles.right}>
        <Text style={{ fontSize: 16, color: '#ffffff', marginTop: 7 }}>
          {props.data.comment}
        </Text>
        <Text
          style={{ fontSize: 13, color: '#dbdbdb', bottom: -65, right: -40 }}
        >
          votes
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'column',
          marginVertical: 10,
          justifyContent: 'space-between'
        }}
      >
        <Icon name="thumbs-up" color={'white'} size={32} />
        <Icon name="thumbs-down" color={'white'} size={36} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    width: Dimensions.get('window').width - 50,
    height: 200,
    flexDirection: 'row',
    marginLeft: 8,
    marginBottom: 30,
    borderRadius: 5,
    shadowColor: '#000',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9
  },
  left: { marginLeft: 0, marginTop: 20 },
  right: { width: '60%', alignItems: 'center', padding: 10, marginLeft: 10 }
});
