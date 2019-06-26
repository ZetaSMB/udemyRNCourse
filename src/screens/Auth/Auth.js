import React, { Component } from 'react';
import { SafeAreaView, View, Text, Button } from 'react-native';

import startMainTabs from '../MainTabs/startMainTabs';

class AuthScreen extends Component {
    static options(passProps) {
        return {
          topBar: {
            title: {
              text: 'Login Screen'
            },
            drawBehind: true,
            visible: false,
            animate: false
          }
        };
    }

    loginHandler = () => {
        startMainTabs();
    }

    render () {
        return (
            <SafeAreaView>
                <Text>Auth Screen</Text>
                <Button title="Login" onPress={this.loginHandler}/>
            </SafeAreaView>
        );
    }
}

export default AuthScreen;