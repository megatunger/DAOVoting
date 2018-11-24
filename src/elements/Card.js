import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native';
import { Title } from './Title';
import LinearGradient from 'react-native-linear-gradient';

export const Card = props => {
  return (
    <TouchableWithoutFeedback onPress={() => props.nav.navigate('detail')}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={['#00c091', '#04795c']}
        style={styles.container}
      >
        <View style={styles.left}>
          <Image
            style={{ width: '100%', height: '100%', padding: 20 }}
            source={require('../images/logo3.png')}
          />
          <View
            style={{
              position: 'absolute',
              margin: 100,
              backgroundColor: '#000',
              width: 120,
              height: 30
            }}
          >
            <Text style={{ color: '#ffff', textAlign: 'center' }}>
              2 days left
            </Text>
          </View>
        </View>
        <View style={styles.right}>
          <Text style={{ fontSize: 17, color: '#ffff' }}>title</Text>
          <Text style={{ color: '#ffff' }}>
            aslkdfjwpoienvksnvasnvkadsn;foajwe;i
          </Text>
          <Text style={{ fontSize: 13, color: '#ffff', bottom: -40 }}>
            votes
          </Text>
        </View>
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    width: Dimensions.get('window').width - 20,
    height: 150,
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 20,
    borderRadius: 5
  },
  left: { width: '50%', alignItems: 'center', padding: 10 },
  right: { width: '50%', alignItems: 'center', padding: 10 }
});
