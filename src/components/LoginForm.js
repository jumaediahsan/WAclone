import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Card, CardStart, Input, Button, Spinner } from './common';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);

  }

  onButtonPress() {
    const { email, password } = this.props;

    this.props.loginUser({ email, password });
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Sign In
      </Button>
    );
  }
    render() {
      const { navigate } = this.props.navigation;
        return (
          <Card>
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
              <Text style={styles.errorTextStyle}>
                {this.props.error}
              </Text>
              <CardStart>
                  {this.renderButton()}
              </CardStart>
              <Text>Belum Punya akun </Text>
              <Text onPress = {() => navigate('SignupForm')}>
                Daftar Disini !
              </Text>
            </Card>

        );
    }
}

const styles= {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

const mapStateToProps = ({ authsign }) => {
  const { email, password, error, loading } = authsign;

  return { email, password, error, loading };
};
export default connect(mapStateToProps, {
  emailChanged, passwordChanged, loginUser
 })(LoginForm);
