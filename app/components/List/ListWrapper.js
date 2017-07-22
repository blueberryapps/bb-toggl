// @flow
import React, { Component } from 'react';
import type { Children } from 'react';
import style from './style.scss';

export default class ListWrapper extends Component {
  props: {
    children: Children,
    date: string,
    totalTime: string
  };

  render() {
    const { children, date, totalTime } = this.props;
    return (
      <div>
        <div className={style.date}>
          {date}
          <span className={style.time}>
            {totalTime}
          </span>
        </div>
        <ul className={style.list}>
          {children}
        </ul>
      </div>
    );
  }
}
