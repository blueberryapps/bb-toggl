// @flow
import React, { Component } from 'react';
import type { Children } from 'react';
import style from './style.scss';

export default class LayoutHeader extends Component {
  props: {
    children: Children
  };

  render() {
    return (
      <div className={style.header}>
        {this.props.children}
      </div>
    );
  }
}
