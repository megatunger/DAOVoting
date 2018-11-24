import React from 'react';
import TouchableScale from 'react-native-touchable-scale';
import { Button } from 'react-native-elements';
import {
  Alert,
  ImageBackground,
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  StatusBar,
  TextInput,
  SafeAreaView,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView
} from 'react-native';
import axios from 'axios';
import { Subscribe } from 'unstated';
import { Title } from '../elements/Title.js';
import { API } from '../../config';
//TODo import your slyte from elements
//TODO import your container you want to Subscribe

/**
 * Build up screen
 */
export class LoginScreenView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };
  }

  onLogin() {
    const { username, password } = this.state;
    // TODO call api to auth user
    //axios.get(`API/auth?username=${username}&password=${password}`).then();
    // Alert.alert('Credentials', `${username} + ${password}`);
    this.props.navigation.navigate('App');
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{ width: 458 / 1.8, height: 136 / 1.8, marginBottom: 30 }}
          source={require('../images/logo.png')}
        />
        <Text
          style={{
            fontSize: 15,
            color: '#EEEEEE',
            lineHeight: 20,
            fontWeight: '700',
            textAlign: 'left',
            marginLeft: -275,
            marginBottom: 10
          }}
        >
          ID
        </Text>
        <TextInput
          value={this.state.username}
          onChangeText={username => this.setState({ username })}
          // placeholder={'Enter your ID number here'}
          style={styles.input}
          placeholderTextColor="#BBBBBB"
        />
        <Text
          style={{
            fontSize: 15,
            color: '#EEEEEE',
            lineHeight: 20,
            fontWeight: '700',
            textAlign: 'left',
            marginLeft: -225,
            marginBottom: 10
          }}
        >
          Password
        </Text>
        <TextInput
          value={this.state.password}
          onChangeText={password => this.setState({ password })}
          // placeholder={'Type your password'}
          secureTextEntry={true}
          style={styles.input}
          placeholderTextColor="#EEEEEE"
        />
        <Text style={{ color: '#EEEEEE', marginLeft: -50 }}>
          <Text>You should sign in via your</Text>
          <Text style={{ fontWeight: 'bold' }}> ID number</Text>
        </Text>
        <View stlye={styles.input}>
          <Button
            title={'Sign in'}
            onPress={this.onLogin.bind(this)}
            buttonStyle={{
              marginTop: 40,
              backgroundColor: '#00C091',
              width: 300,
              height: 45,
              borderColor: 'transparent',
              borderWidth: 0,
              borderRadius: 5
            }}
            component={TouchableScale}
            friction={90} //
            tension={100} // These props are passed to the parent component (here TouchableScale)
            activeScale={0.95} //
          />
        </View>
      </View>
    );
  }
}

/**
 * Subscribe to container to get data
 */
export class LoginScreen extends React.Component {
  render() {
    return <Subscribe to={[]}>{/* {() =>} */}</Subscribe>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#392E42'
  },
  input: {
    width: 300,
    height: 45,
    padding: 10,
    borderWidth: 1,
    marginBottom: 20,
    backgroundColor: 'rgba(197,197,197,0.35)',
    borderRadius: 5
  }
});
