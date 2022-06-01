import App from 'next/app';
import React from 'react';
import { ApolloProvider as  ApolloHooksProvider } from '@apollo/react-hooks'
import withApolloClient from '../utils/with-apollo-client';
import { ApolloProvider } from 'react-apollo';
import 'antd/dist/antd.css';

class MyApp extends App {
  render() {
    // @ts-ignore
    const { Component, pageProps, apolloClient } = this.props;
    return (
      <ApolloProvider client={apolloClient}>
        <ApolloHooksProvider client={apolloClient}>
          <Component {...pageProps} />
        </ApolloHooksProvider>        
      </ApolloProvider>
    );
  }
}

export default withApolloClient(MyApp);
