import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import Todo from './Todo';
// import User from './examples/User';
// var user = {name: 'foo', age: 21};
import Timer from './examples/Timer';

export default class App extends React.Component {
  handleReady(str){
    console.log(str);
  }

  render() {
    debugger;
    return (
      <View style={{flex:1}}>
        <View style={{flex: 1, backgroundColor:'powderblue' }} />
        {/* <Todo style={{flex: 1, backgroundColor:'skyblue'}} /> */}
        {/* <User type="Dev" data={user} onReady={this.handleReady} /> */}
        <Timer />
        <View style={{flex: 1, backgroundColor:'steelblue'}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
