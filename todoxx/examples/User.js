import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';

class User extends Component {
  render() {
    const user = this.props.data;
    this.props.onReady('I am ready!');
    return (
      <View>
        <Text>
          score: {this.props.score}
          type: {this.props.type}
          name: {user.name}
          age: {user.age}
        </Text>
      </View>
    );
  }
}

//defaultProps
User.propTypes = { score: PropTypes.number };
User.defaultProps = { score: 0};

export default User;
