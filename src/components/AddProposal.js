import React from 'react';
import { View, Text } from 'react-native';
import { Subscribe } from 'unstated';
//TODo import your slyte from elements
//TODO import your container you want to Subscribe

/**
* Build up screen
*/
class AddProposalView extends React.Component {
render() {
return (
<View style={{styles.StyleSheet}}>
    <Text>AddProposal</Text>
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
<Subscribe to={[]}>
    {/* {() =>} */}
</Subscribe>
);
}
}
  