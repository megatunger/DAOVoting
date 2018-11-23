import React from 'react';
import { View, Text, Button, Dimensions } from 'react-native';
import CounterContainer from '../containers/CounterContainer';
import { Subscribe } from 'unstated';
import { LineChart } from 'react-native-chart-kit';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      data: [
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100
      ]
    }
  ]
};

// Mock data object used for Contribution Graph

class CounterView extends React.Component {
  render() {
    return (
      <View>
        <LineChart
          data={data}
          width={Dimensions.get('window').width} // from react-native
          height={220}
          chartConfig={{
            backgroundColor: '#e26a00',
            backgroundGradientFrom: '#fb8c00',
            backgroundGradientTo: '#ffa726',
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16
            }
          }}
        />
      </View>
    );
  }
}

export class Counter extends React.Component {
  render() {
    return (
      <Subscribe to={[CounterContainer]}>
        {data => <CounterView data={data} />}
      </Subscribe>
    );
  }
}
