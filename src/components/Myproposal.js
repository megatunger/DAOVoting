import React from 'react';
import { View, Text } from 'react-native';
import { Subscribe } from 'unstated';
//TODo import your slyte from elements
//TODO import your container you want to Subscribe

/**
* Build up screen
*/
class MyproposalView extends React.Component {
render() {
return (
<View>
    <Text>Myproposal</Text>
</View>
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
    {() =>}
</Subscribe>
);
}
}