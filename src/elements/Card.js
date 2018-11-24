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
import { BlurView, VibrancyView } from 'react-native-blur';
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
            style={{ width: '100%', height: '100%', padding: 20, borderRadius: 5 }}
            source={require('../images/canteen.png')}
          />
          <View
            style={{
              position: 'absolute',
              margin: 140,
              backgroundColor: 'rgba(52, 52, 52, 0.8)',
              width:97,
              height: 30
            }}
          >
            <Text style={{ color: '#ffff', textAlign: 'center',marginTop: 5 }}>
              2 days left
            </Text>
          </View>
        </View>
        <View style={styles.right}>
          <Text style={{ fontSize: 20, fontWeight:'600', lineHeight:22, letterSpacing:-0.41, color: '#ffff', marginLeft: -23}}>Title Goes Here</Text>
          <Text style={{ fontSize: 16, color: '#ffffff', marginTop: 7 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </Text>
          <Text style={{ fontSize: 13, color: '#dbdbdb', bottom: -65, right: -40 }}>
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
    width: Dimensions.get('window').width - 50,
    height: 200,
    flexDirection: 'row',
    justifyContent: 'center',
    marginLeft: 8,
    marginBottom: 30,
    borderRadius: 5,
    shadowColor: "#000",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    
    elevation: 9,
    

  },
  left: { width: '50%', alignItems: 'center', padding: 10 },
  right: { width: '50%', alignItems: 'center', padding: 10 }
});
