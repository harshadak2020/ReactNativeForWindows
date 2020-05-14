// JavaScript source code
import React, { Component } from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';

export class MyWeb extends Component {
    webview = null;

    render() {
        return (
            <WebView
                ref={ref => (this.webview = ref)}
                source={{ uri: 'https://reactnative.dev/' }}
                onNavigationStateChange={this.handleWebViewNavigationStateChange}
            />
        );
    }

    handleWebViewNavigationStateChange = newNavState =>
    {
        const { url } = newNavState;
         const newURL = 'https://bing.com/';
        const redirectTo = 'window.location = "' + newURL + '"';
        console.log(newNavState);
        this.webview.injectJavaScript(redirectTo);
    }

  
}