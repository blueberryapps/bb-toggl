import React, { Component } from 'react';
import type { Children } from 'react';
import * as Layout from '../components/Layout';
import Logo from '../components/Logo/Logo';

export default class App extends Component {
  props: {
    children: Children,
  }

  render() {
    return (
      <Layout.Wrapper>
        <Layout.Header>
          <Logo />
        </Layout.Header>
        <Layout.Content>
          {this.props.children}
        </Layout.Content>
      </Layout.Wrapper >
    );
  }
}
