// @flow
import React, { Component } from 'react';
import type { Children } from 'react';
import style from './style.scss';

export default class LayoutContent extends Component {
  props: {
    children: Children
  };

  render() {
    return (
      <div className={style.content}>
        {this.props.children}
      </div>
    );
  }
}
