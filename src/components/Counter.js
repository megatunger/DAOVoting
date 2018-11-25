import React from 'react';
import Dialog, {
  DialogTitle,
  DialogContent,
  DialogButton,
  SlideAnimation,
  ScaleAnimation
} from 'react-native-popup-dialog';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Card } from '../elements/CardComments';
import { CheckBox, size, Button, Divider } from 'react-native-elements';
import {
  Image,
  StyleSheet,
  View,
  Text,
  Dimensions,
  borderRightWidth,
  border,
  ScrollView,
  TextInput,
  AsyncStorage
} from 'react-native';
import CounterContainer from '../containers/CounterContainer';
import { Subscribe } from 'unstated';
import { LineChart } from 'react-native-chart-kit';
import { CardDetails } from '../elements/CardDetails';
import { colors } from 'react-native-elements';
import { API } from '../../config';
import axios from 'axios';
import PTRView from 'react-native-pull-to-refresh';
console.disableYellowBox = true;
class CounterView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      yesChecked: true,
      noChecked: false,
      comment: ''
    };
  }
  async componentDidMount() {
    this.props.data.getComment(this.props.params._id);
  }
  async onComment() {
    let a = await AsyncStorage.getItem('user');
    a = JSON.parse(a);
    const url = `${API}/proposal/${this.props.params._id}/debate`;
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      data: JSON.stringify(this.state),
      url
    };
    axios.defaults.headers.common['Authorization'] = a.payload.token;
    console.log(option);
    try {
      await axios(options);
    } catch (error) {
      console.log(error);
    }
  }
  async onVote() {
    let a = await AsyncStorage.getItem('user');
    a = JSON.parse(a);

    const url = `${API}/${this.props.params._id}/debates/`;
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      data: JSON.stringify(this.state.comment),
      url
    };
    axios.defaults.headers.common['Authorization'] = a.payload.token;
    try {
      await axios(options);
    } catch (error) {
      console.log(error);
    }
  }
  refresh() {
    this.props.data.getComment(this.props.params._id);
  }
  render() {
    console.log(this.props.data.state.voting);
    return (
      <PTRView onRefresh={() => this.refresh()}>
        <ScrollView style={styles.container}>
          <View style={{ flex: 1 }}>
            <View style={styles.container}>
              <View style={styles.left}>
                <Image
                  style={{
                    width: 450,
                    height: 280,
                    padding: 20,
                    marginTop: 0,
                    marginLeft: -20,
                    marginBottom: 20
                  }}
                  source={require('../images/canteen.png')}
                />
                <View
                  style={{
                    position: 'absolute',
                    marginTop: 20,
                    marginLeft: 340
                  }}
                >
                  <Icon name="times-circle" color={'white'} size={36} />
                </View>
                <View
                  style={{
                    position: 'absolute',
                    marginTop: 220,
                    marginLeft: 30,
                    backgroundColor: 'rgba(52, 52, 52, 0.8)',
                    width: 97,
                    height: 30
                  }}
                >
                  <Text
                    style={{
                      color: '#ffff',
                      textAlign: 'center',
                      marginTop: 5
                    }}
                  >
                    2 days left
                  </Text>
                </View>
              </View>
              <Text
                style={{
                  fontSize: 28,
                  fontWeight: '600',
                  lineHeight: 33,
                  letterSpacing: -0.41,
                  color: '#ffffff',
                  marginLeft: 30,
                  marginBottom: 20,
                  marginRight: 30
                }}
              >
                Title Goes Here Title Goes Here Title Goes Here
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '400',
                  letterSpacing: 0,
                  color: '#ffffff',
                  marginLeft: 30,
                  marginBottom: 0,
                  marginRight: 30
                }}
              >
                Lorem ipsum dolor sit amet, sit cu agam atqui, mediocrem
                tincidunt vel te. Latine instructior ad mea, alterum civibus
                elaboraret duo ut
              </Text>
              <View style={{ flexDirection: 'row', marginLeft: 15 }}>
                <Button
                  title="COMMENTS"
                  buttonStyle={{
                    marginTop: 40,
                    backgroundColor: 'transparent',
                    width: 159,
                    height: 60,
                    borderColor: '#eeeeee',
                    borderWidth: 1,
                    borderRadius: 5
                  }}
                  onPress={() => {
                    this.setState({
                      slideAnimationDialog: true
                    });
                  }}
                />
                <Button
                  title="VOTE"
                  buttonStyle={{
                    marginTop: 40,
                    backgroundColor: '#00C091',
                    width: 159,
                    height: 60,
                    borderColor: 'transparent',
                    borderWidth: 0,
                    borderRadius: 5
                  }}
                  onPress={() => {
                    this.setState({
                      defaultAnimationDialog: true
                    });
                  }}
                />
              </View>

              <Divider
                style={{
                  backgroundColor: 'white',
                  marginTop: 40,
                  marginRight: 30,
                  marginLeft: 30
                }}
              />
              <Text
                style={{
                  fontSize: 28,
                  fontWeight: '600',
                  lineHeight: 33,
                  letterSpacing: -0.41,
                  color: '#ffffff',
                  marginLeft: 30,
                  marginBottom: 20,
                  marginRight: 30,
                  marginTop: 20
                }}
              >
                Comments
              </Text>
              <View style={{ flex: 1, alignItems: 'center' }}>
                {this.props.data.state.voting ? (
                  this.props.data.state.voting.payload.debates.map(
                    (item, index) => {
                      return (
                        <Card
                          key={index}
                          data={item}
                          nav={this.props.navigation}
                        />
                      );
                    }
                  )
                ) : (
                  <Text />
                )}
              </View>
            </View>

            <Dialog
              onDismiss={() => {
                this.setState({ defaultAnimationDialog: false });
              }}
              width={0.9}
              visible={this.state.defaultAnimationDialog}
              rounded
              dialogAnimation={
                new ScaleAnimation({
                  toValue: 0, // optional
                  useNativeDriver: true // optional
                })
              }
              dialogTitle={
                <DialogTitle
                  title="You are about to spend 5 TOKENS on this decision. You can only choose YES or NO."
                  style={{
                    backgroundColor: '#F7F7F8'
                  }}
                  hasTitleBar={false}
                  align="center"
                />
              }
              actions={[
                <DialogButton
                  text="Cancel"
                  onPress={() => {
                    this.setState({ defaultAnimationDialog: false });
                  }}
                  key="button-1"
                />,
                <DialogButton
                  text="Confirm"
                  onPress={() => {
                    this.setState({ defaultAnimationDialog: false });
                  }}
                  key="button-2"
                />
              ]}
            >
              <DialogContent
                style={{
                  backgroundColor: '#F7F7F8'
                }}
              >
                <View
                  style={{
                    flexDirection: 'row',
                    width: 150,
                    height: 75,
                    marginLeft: 50,
                    marginTop: 10
                  }}
                >
                  <CheckBox
                    center="true"
                    title="No"
                    checkedColor="#00C091"
                    checkedIcon="check-circle"
                    uncheckedIcon="circle"
                    size={40}
                    wrapperStyle="center"
                    checked={this.state.noChecked}
                    onPress={() =>
                      this.setState({
                        noChecked: !this.state.noChecked,
                        yesChecked: !this.state.yesChecked
                      })
                    }
                  />
                  <CheckBox
                    center="true"
                    title="Yes"
                    checkedColor="#00C091"
                    checkedIcon="check-circle"
                    size={40}
                    uncheckedIcon="circle"
                    checked={this.state.yesChecked}
                    onPress={() =>
                      this.setState({
                        noChecked: !this.state.noChecked,
                        yesChecked: !this.state.yesChecked
                      })
                    }
                  />
                </View>
              </DialogContent>
            </Dialog>

            <Dialog
              onDismiss={() => {
                this.setState({ slideAnimationDialog: false });
              }}
              onTouchOutside={() => {
                this.setState({ slideAnimationDialog: false });
              }}
              visible={this.state.slideAnimationDialog}
              dialogTitle={<DialogTitle title="Enter your comment here" />}
              dialogAnimation={new SlideAnimation({ slideFrom: 'bottom' })}
              width={355}
              height={400}
              actions={[
                <DialogButton
                  text="Discard"
                  onPress={() => {
                    this.setState({ slideAnimationDialog: false });
                  }}
                  key="button-1"
                />,
                <DialogButton
                  text="Send"
                  onPress={() => {
                    this.onComment();
                    this.setState({
                      slideAnimationDialog: false
                    });
                  }}
                  key="button-2"
                />
              ]}
            >
              <DialogContent
                style={{
                  backgroundColor: '#f7f7f7',
                  height: 300
                }}
              >
                <TextInput
                  value={this.state.comment}
                  onChangeText={comment => this.setState({ comment })}
                  placeholder={'Type something here...'}
                  style={styles.input}
                  placeholderTextColor="#BBBBBB"
                />
                <View
                  style={{
                    flexDirection: 'row',
                    width: 150,
                    height: 75,
                    marginLeft: 50,
                    marginTop: 10
                  }}
                >
                  <CheckBox
                    center="true"
                    title="No"
                    checkedColor="#00C091"
                    checkedIcon="check-circle"
                    uncheckedIcon="circle"
                    size={40}
                    wrapperStyle="center"
                    checked={this.state.noChecked}
                    onPress={() =>
                      this.setState({
                        noChecked: !this.state.noChecked,
                        yesChecked: !this.state.yesChecked
                      })
                    }
                  />
                  <CheckBox
                    center="true"
                    title="Yes"
                    checkedColor="#00C091"
                    checkedIcon="check-circle"
                    size={40}
                    uncheckedIcon="circle"
                    checked={this.state.yesChecked}
                    onPress={() =>
                      this.setState({
                        noChecked: !this.state.noChecked,
                        yesChecked: !this.state.yesChecked
                      })
                    }
                  />
                </View>
              </DialogContent>
            </Dialog>
          </View>
        </ScrollView>
      </PTRView>
    );
  }
}

export class Counter extends React.Component {
  state = {
    customBackgroundDialog: false,
    defaultAnimationDialog: false,
    scaleAnimationDialog: false,
    slideAnimationDialog: false
  };

  render() {
    const { navigation } = this.props;
    const params = navigation.getParam('data');
    return (
      <Subscribe to={[CounterContainer]}>
        {data => {
          return <CounterView data={data} params={params} />;
        }}
      </Subscribe>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#392E42'
  },
  dialogContentView: {
    // flex: 1,
    paddingLeft: 18,
    paddingRight: 18,
    backgroundColor: '#F7F7F7',
    // opacity: 0.4,
    alignItems: 'center',
    justifyContent: 'center'
  },
  navigationBar: {
    borderBottomColor: '#b5b5b5',
    borderBottomWidth: 0.5,
    backgroundColor: '#ffffff'
  },
  navigationTitle: {
    padding: 10
  },
  navigationButton: {
    padding: 10
  },
  navigationLeftButton: {
    paddingLeft: 20,
    paddingRight: 40
  },
  navigator: {
    flex: 1
    // backgroundColor: '#000000',
  },
  customBackgroundDialog: {
    opacity: 0.5,
    backgroundColor: '#000'
  },
  left: { width: 450 }
});
