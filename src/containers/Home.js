/**
 *
 * Home
 *
 */

import React from 'react';
import { Container } from 'unstated';
import { API } from '../../config';
import axios from 'axios';
import { withNavigation } from 'react-navigation';

class HomeCon extends Container {
  // eslint-disable-line react/prefer-stateless-function
  // init state
  state = {};

  /**
   * manage and mutate state here
   */
  getProposal = async () => {
    const url = `${API}/proposal`;
    const options = {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      },
      url
    };
    let res = await axios(options);
    this.setState({ proposals: res.data });
  };
}

export default HomeCon;
