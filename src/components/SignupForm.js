import React, { Component } from 'react';
import { Text, ImageBackground } from 'react-native';
import { connect } from 'react-redux';
import { enterEmail, enterPassword, signUp, nameChanged } from '../actions';
import { Card, CardStart, Input, Button, Spinner } from './common';

class SignupForm extends Component {

  nameText(text) {
    this.props.nameChanged(text);
  }

  onEmailChange(text) {
    this.props.enterEmail(text);
  }

  onPasswordChange(text) {
    this.props.enterPassword(text);

  }

  onSignupPress(){
    const { email, password, name } = this.props;

    this.props.signUp({ email, password, name });
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />
    }

    return (
      <Button onPress={this.onSignupPress.bind(this)}>
        Sign Up
      </Button>
    );
  }
    render() {
        return (
            <Card>
            <CardStart>
              <Input
                label="Nama"
                placeholder="Enter Your Name"
                onChangeText={this.nameText.bind(this)}
                value={this.props.name}
              />
            </CardStart>
              <CardStart>
                <Input
                  label="Email"
                  placeholder="email@gmail.com"
                  onChangeText={this.onEmailChange.bind(this)}
                  value={this.props.email}
                />
              </CardStart>

              <CardStart>
                <Input
                  secureTextEntry
                  label="Password"
                  placeholder="password"
                  onChangeText={this.onPasswordChange.bind(this)}
                  value={this.props.password}
                />
              </CardStart>
              <CardStart>
                <Text style={styles.errorTextStyle}>
                  {this.props.error}
                </Text>
              </CardStart>

              <CardStart>
                {this.renderButton()}
              </CardStart>

            </Card>
        );
    }
}
const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

const mapStateToProps = ({ authsignup }) => {
  const { name, email, password, loading, error } = authsignup;

  return { name, email, password, loading, error };
};
export default connect(mapStateToProps, {
  enterEmail, enterPassword, signUp, nameChanged
})(SignupForm);
