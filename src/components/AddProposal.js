import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, Button } from 'react-native';
import { Subscribe } from 'unstated';
import AddProposalContainer from '../containers/AddProposal';
import Icon from 'react-native-vector-icons/FontAwesome';

//TODo import your slyte from elements
//TODO import your container you want to Subscribe

/**
 * Build up screen
 */
export class AddProposalView extends React.Component {
  render() {
    const { propersal } = this.props;

    return (
      <View style={styles.container}>
        <Image
          style={{ width: 190 / 1.8, height: 66 / 1.8, marginTop: 28 }}
          source={require('../images/logo3.png')}
        />
        <View style={styles.card}>
          <TextInput
            onChangeText={e => propersal.changeTitle(e)}
            placeholder="Type your proposal title…"
          />
          <View style={styles.textAreaContainer}>
            <TextInput
              onChangeText={e => {
                propersal.changeContent(e);
              }}
              style={styles.textArea}
              underlineColorAndroid="transparent"
              placeholder="Type something"
              placeholderTextColor="grey"
              multiline={true}
            />
          </View>
          <View style={{ alignItems: 'center' }}>
            <Text>
              {propersal.state.token} tokens = {propersal.state.token} days left
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              marginTop: 10,
              justifyContent: 'center'
            }}
          >
            <Icon
              onPress={() => propersal.decToken()}
              name="minus-circle"
              color={'#00C091'}
              size={36}
            />
            <Text style={{ margin: 10 }}>{propersal.state.token}</Text>
            <Icon
              onPress={() => propersal.incToken()}
              name="plus-circle"
              color={'#00C091'}
              size={36}
            />
          </View>
          <Button title="SUBMIT" onPress={() => propersal.postPropersal()} />
        </View>
      </View>
    );
  }
}

/**
 * Subscribe to container to get data
 */
export class AddProposal extends React.Component {
  render() {
    return (
      <Subscribe to={[AddProposalContainer]}>
        {propersal => <AddProposalView propersal={propersal} />}
      </Subscribe>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#392E42',
    alignItems: 'center'
  },
  card: {
    backgroundColor: '#ffff',
    width: '90%',
    height: '80%',
    borderRadius: 5,
    marginTop: 30,
    padding: 10
  },
  textAreaContainer: {
    borderColor: '#D3D3D3',
    borderWidth: 1,
    padding: 5,
    borderRadius: 5
  },
  textArea: {
    height: 150,
    top: -50
  }
});
