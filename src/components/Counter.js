import React from 'react';
import Dialog, {
  DialogTitle,
  DialogContent,
  DialogButton,
  SlideAnimation,
  ScaleAnimation,
} from 'react-native-popup-dialog';
import { CheckBox, size, Button } from 'react-native-elements';
import { Image, StyleSheet, View, Text, Dimensions, borderRightWidth, border } from 'react-native';
import CounterContainer from '../containers/CounterContainer';
import { Subscribe } from 'unstated';
import { LineChart } from 'react-native-chart-kit';
import { CardDetails} from '../elements/CardDetails';
import { colors } from 'react-native-elements';
console.disableYellowBox = true;
class CounterView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: false,
    };
  }
  
  render() {
    return (
      <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={{
          marginTop: -400,
          maxHeight: 300,
        }}>
              <Image source={require('../images/canteen.png')}>
              </Image>
        </View>
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
              defaultAnimationDialog: true,
            });
          }}
        />
      </View>

                      <Dialog
                        onDismiss={() => {
                          this.setState({ defaultAnimationDialog: false });
                        }}
                        width={0.9}
                        visible={this.state.defaultAnimationDialog}
                        rounded
                        dialogTitle={
                          <DialogTitle
                            title="You are about to spend 5 TOKENS on this decision. You can only choose YES or NO."
                            style={{
                              backgroundColor: '#F7F7F8',
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
                          />,
                        ]}
                      >
                        <DialogContent
                          style={{
                            backgroundColor: '#F7F7F8',
                          }}
                        >
                        <View style={{flexDirection: "row", width: 150, height: 75, marginLeft: 50, marginTop:10}}>
                          <CheckBox
                            center='true'
                            title='No'
                            checkedColor='#00C091'
                            checkedIcon='check-circle'
                            uncheckedIcon='circle'
                            size={40}
                            wrapperStyle='center'
                            checked={this.state.checked}
                            onPress={() => this.setState({ checked: !this.state.checked })}
                          />
                          <CheckBox
                            center='true'
                            title='Yes'
                            checkedColor='#00C091'
                            checkedIcon='check-circle'
                            size={40}
                            uncheckedIcon='circle'
                            checked={this.state.checked}
                            onPress={() => this.setState({ checked: !this.state.checked })}
                          />
                        </View>
                        </DialogContent>
                      </Dialog>

    </View>
    );
  }
}

export class Counter extends React.Component {
  state = {
    customBackgroundDialog: false,
    defaultAnimationDialog: false,
    scaleAnimationDialog: false,
    slideAnimationDialog: false,
  };

  render() {
    return (
      <Subscribe to={[CounterContainer]}>
        {data => <CounterView data={data} />}
      </Subscribe>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#392E42'
  },
  dialogContentView: {
    // flex: 1,
    paddingLeft: 18,
    paddingRight: 18,
    backgroundColor: '#F7F7F7',
    // opacity: 0.4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navigationBar: {
    borderBottomColor: '#b5b5b5',
    borderBottomWidth: 0.5,
    backgroundColor: '#ffffff',
  },
  navigationTitle: {
    padding: 10,
  },
  navigationButton: {
    padding: 10,
  },
  navigationLeftButton: {
    paddingLeft: 20,
    paddingRight: 40,
  },
  navigator: {
    flex: 1,
    // backgroundColor: '#000000',
  },
  customBackgroundDialog: {
    opacity: 0.5,
    backgroundColor: '#000',
  }
});
