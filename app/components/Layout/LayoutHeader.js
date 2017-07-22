// @flow
import React, { Component } from 'react';
import type { Children } from 'react';
import style from './style.scss';

export default class LayoutHeader extends Component {
  props: {
    children: Children,
    isLoggin: Boolean,
  };

  render() {
    const { isLoggin } = this.props;
    return (
      <div className={[style.header, !isLoggin && style.isLoggin].filter(Boolean).join(' ')}>
        {this.props.children}
      </div>
    );
  }
}
