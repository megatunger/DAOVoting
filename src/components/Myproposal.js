import React from 'react';
import { Dimensions,View, Text, StyleSheet, ScrollView, screenWidth } from 'react-native';
import { Subscribe } from 'unstated';
import { Avatar, Divider } from 'react-native-elements';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    chartConfig
  } from 'react-native-chart-kit'
//TODo import your slyte from elements
//TODO import your container you want to Subscribe

/**
* Build up screen
*/
export class MyproposalView extends React.Component {
render() {
    const data = [
        { name: 'Yes', number: 215, color: '#00C091', legendFontColor: '#7F7F7F', legendFontSize: 15 },
        { name: 'No', number: 120, color: '#FFFFFF', legendFontColor: '#7F7F7F', legendFontSize: 15 },
      ]

    const data2 = [0.4, 0.6, 0.8]
return (
<ScrollView style={styles.container}>
<View>
    <View style={{
      marginTop: 48,
      marginLeft: 30,
    }}>
    <Avatar
              medium
              rounded
              source={require('../images/Face.png')}
              onPress={() => console.log('Works!')}
              activeOpacity={0.7}
    />
    <Divider style={{ backgroundColor: 'white', marginTop: 20, marginRight: 30 }}/>
    <Text style = {{fontSize: 25, fontWeight: '700', letterSpacing: 0.4, color: 'white', marginTop: 20, marginRight: 30 }}>
            Joana as President Debate Club
    </Text>
    <Text style = {{fontSize: 17, fontWeight: '600', letterSpacing: -0.1, lineHeight: 24, color: '#777777', marginTop: 7, marginBottom: 10, marginRight: 30 }}>
            5 days ago
    </Text>
    <BarChart
        data={{
        labels: ['Class A', 'Class B', 'Class C'],
        datasets: [{
            data: [
            Math.round(Math.random() * 100),
            Math.round(Math.random() * 100),
            Math.round(Math.random() * 100),
            ]
        }]
        }}
        width={Dimensions.get('window').width-30-30} // from react-native
        height={220}
        chartConfig={{
                backgroundColor: '#e26a00',
                backgroundGradientFrom: '#038F7C',
                backgroundGradientTo: '#00C091',
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                    borderRadius: 16
                }
        }}
        bezier
        style={{
        marginVertical: 8,
        borderRadius: 16
        }}
    />
    <PieChart
            data={data}
            width={Dimensions.get('window').width-30-30}
            height={220}
            chartConfig={{
                backgroundColor: '#e26a00',
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                    borderRadius: 16
                }
            }}
            backgroundColor="#2F223B"
            accessor="number"
            paddingLeft="15"
            bezier
            style={{
                marginVertical: 8,
                borderRadius: 16
            }}
    />
    <ProgressChart
            data={data2}
            width={Dimensions.get('window').width-30-30}
            height={220}
            chartConfig={{
                backgroundColor: '#e26a00',
                backgroundGradientFrom: '#038F7C',
                backgroundGradientTo: '#00C091',
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                    borderRadius: 16
                }
            }}
            backgroundColor="#2F223B"
            paddingLeft="15"
            bezier
            style={{
                marginVertical: 8,
                borderRadius: 16
            }}
    />
    <Divider style={{ backgroundColor: 'white', marginTop: 20, marginRight: 188  }}/>
    <Text style = {{fontSize: 25, fontWeight: '700', letterSpacing: 0.4, color: 'white', marginTop: 20, marginRight: 30 }}>
            Changing Schedule Request
    </Text>
    <Text style = {{fontSize: 17, fontWeight: '600', letterSpacing: -0.1, lineHeight: 24, color: '#777777', marginTop: 7, marginBottom: 10, marginRight: 30 }}>
            12 days ago
    </Text>
    <BarChart
        data={{
        labels: ['Class A', 'Class B', 'Class C'],
        datasets: [{
            data: [
            Math.round(Math.random() * 100),
            Math.round(Math.random() * 100),
            Math.round(Math.random() * 100),
            ]
        }]
        }}
        width={Dimensions.get('window').width-30-30} // from react-native
        height={220}
        chartConfig={{
                backgroundColor: '#e26a00',
                backgroundGradientFrom: '#038F7C',
                backgroundGradientTo: '#00C091',
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                    borderRadius: 16
                }
        }}
        bezier
        style={{
        marginVertical: 8,
        borderRadius: 16
        }}
    />
    <PieChart
            data={data}
            width={Dimensions.get('window').width-30-30}
            height={220}
            chartConfig={{
                backgroundColor: '#e26a00',
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                    borderRadius: 16
                }
            }}
            backgroundColor="#2F223B"
            accessor="number"
            paddingLeft="15"
            bezier
            style={{
                marginVertical: 8,
                borderRadius: 16
            }}
    />
    </View>
</View>
</ScrollView>
);
}
}

/**
* Subscribe to container to get data
*/
export class Myproposal extends React.Component {
render() {
return (
<Subscribe to={[]}>
    {/* {() =>} */}
</Subscribe>
);
}
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#392E42',
    }
  });
  