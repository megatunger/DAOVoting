import React from 'react';
import { Avatar } from 'react-native-elements';
import {
  Image,
  StatusBar,
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Button,
  ScrollView,
  Touchable,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Dimensions
} from 'react-native';
import { Card } from '../elements/Card';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeCon from '../containers/Home';
import { Subscribe } from 'unstated';
import ActionSheet from 'react-native-actionsheet';
import { withNavigation } from 'react-navigation';
import PTRView from 'react-native-pull-to-refresh';

/**
 * Build up screen
 */
export class HomeView extends React.Component {
  componentDidMount() {
    this.props.home.getProposal();
  }
  showActionSheet = () => {
    this.ActionSheet.show();
  };
  refresh() {
    this.props.home.getProposal();
  }
  render() {
    const { home } = this.props;
    return (
      <PTRView onRefresh={() => this.refresh()}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={{ justifyContent: 'center' }}
        >
          <SafeAreaView>
            <ActionSheet
              style={{ height: 1 }}
              ref={o => (this.ActionSheet = o)}
              title={'Filter'}
              options={['Voting Now', 'Ended Polls', 'cancel']}
              cancelButtonIndex={2}
              destructiveButtonIndex={0}
              onPress={index => {
                /* do something */
              }}
            />
            <StatusBar hidden={true} />
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                marginTop: 30,
                marginLeft: 30,
                marginRight: 30,
                marginBottom: 30,
                justifyContent: 'space-between'
              }}
            >
              <View style={{ height: 30 }}>
                <Icon
                  onPress={() => this.showActionSheet()}
                  name="bars"
                  color="#FFFFFF"
                  size={30}
                />
              </View>

              <Image
                style={{ width: 190 / 1.8, height: 66 / 1.8 }}
                source={require('../images/logo3.png')}
              />
              <Avatar
                medium
                rounded
                source={require('../images/Face.png')}
                onPress={() => console.log('Works!')}
                activeOpacity={0.7}
              />
            </View>
            <Text
              style={{
                fontSize: 25,
                fontWeight: '700',
                letterSpacing: 0.36,
                color: '#ffffff',
                marginLeft: 30,
                marginBottom: 20
              }}
            >
              Voting Now
            </Text>
            <View style={{ flex: 1, alignItems: 'center' }}>
              {home.state.proposals ? (
                home.state.proposals.payload.map((item, index) => {
                  return (
                    <Card key={index} data={item} nav={this.props.navigation} />
                  );
                })
              ) : (
                <Text> </Text>
              )}
            </View>
            <Text
              style={{
                fontSize: 25,
                fontWeight: '700',
                letterSpacing: 0.36,
                color: '#ffffff',
                marginLeft: 30,
                marginBottom: 20
              }}
            >
              Ended Polls
            </Text>
          </SafeAreaView>
        </ScrollView>
      </PTRView>
    );
  }
}

/**
 * Subscribe to container to get data
 */
class Home extends React.Component {
  render() {
    return (
      <Subscribe to={[HomeCon]}>
        {home => <HomeView home={home} navigation={this.props.navigation} />}
      </Subscribe>
    );
  }
}
export default withNavigation(Home);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#392E42'
  }
});
