// @flow
import React, { Component } from 'react';
import type { Children } from 'react';
import style from './style.scss';

export default class ListWrapper extends Component {
  props: {
    children: Children,
    date: string,
    time: string
  };

  render() {
    const { children, date, time } = this.props;
    return (
      <div>
        <div className={style.date}>
          {date}
          <span className={style.time}>
            {time}
          </span>
        </div>
        <ul className={style.list}>
          {children}
        </ul>
      </div>
    );
  }
}
