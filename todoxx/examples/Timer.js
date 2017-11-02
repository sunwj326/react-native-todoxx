import React, {Component} from 'react';
import { View, Text } from 'react-native';

export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.increase = this.increase.bind(this);
  }

  componentDidMount() {
    setInterval(this.increase, 1000);

    // Or
    // let _this = this;
    // setInterval(function(){
    //   _this.increase();
    // }, 1000);
  }

  increase() {
    this.setState(prevState=>({
      count: prevState.count + 1
    }));
  }

  render() {
    return (
      <View>
        <Text>count: {this.state.count}</Text>
      </View>
    )
  }

}
