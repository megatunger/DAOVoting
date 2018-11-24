/**
 *
 * AddProposal
 *
 */

import React from 'react';
import { Container } from 'unstated';
import axios from 'axios';
import { API } from '../../config';

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
    console.log('decre');

    if (this.state.token > 0) this.setState({ token: this.state.token - 1 });
  };
  postPropersal = () => {
    axios.post();
  };
}

export default AddProposalContainer;
