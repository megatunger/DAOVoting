/**
 *
 * AddProposal
 *
 */

import React from 'react';
import { Container } from 'unstated';
import axios from 'axios';
import { API } from '../../config';
import { Text, AsyncStorage } from 'react-native';
import { __await } from 'tslib';
class AddProposalContainer extends Container {
  // eslint-disable-line react/prefer-stateless-function
  // init state
  state = { token: 0 };

  /**
   * manage and mutate state here
   */
  changeTitle = title => {
    this.setState({ title });
  };
  changeContent = content => {
    this.setState({ content });
  };
  incToken = () => {
    if (this.state.token < 60) this.setState({ token: this.state.token + 1 });
  };
  decToken = () => {
    if (this.state.token > 0) this.setState({ token: this.state.token - 1 });
  };
  postPropersal = async () => {
    let a = await AsyncStorage.getItem('user');
    a = JSON.parse(a);

    const url = `${API}/proposal`;
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      data: JSON.stringify(this.state),
      url
    };
    axios.defaults.headers.common['Authorization'] = a.payload.token;
    try {
      await axios(options);
    } catch (error) {
      console.log(error);
    }
  };
}

export default AddProposalContainer;
