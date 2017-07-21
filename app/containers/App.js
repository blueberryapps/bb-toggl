// @flow
import React, { Component } from 'react';
import type { Children } from 'react';
import * as Layout from '../components/Layout';

export default class App extends Component {
  props: {
    children: Children
  };

  render() {
    return (
      <Layout.Wrapper>
        <Layout.Header>
          BB-Toggle
        </Layout.Header>
        <Layout.Content>
          {this.props.children}
        </Layout.Content>
      </Layout.Wrapper>
    );
  }
}
