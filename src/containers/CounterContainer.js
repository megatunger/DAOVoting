import { Container } from 'unstated';
import { API } from '../../config';
import axios from 'axios';
import { AsyncStorage } from 'react-native';
export default class CounterContainer extends Container {
  // init state with default value
  state = { voting: false };

  /**
   *  state mutation
   */
  getComment = async id => {
    let a = await AsyncStorage.getItem('user');
    a = JSON.parse(a);
    const url = `${API}/proposal/${id}`;
    const options = {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      },
      url
    };
    axios.defaults.headers.common['Authorization'] = a.payload.token;

    let res = await axios(options);

    this.setState({ voting: res.data });
  };
}
