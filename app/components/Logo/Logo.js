// @flow
import React, { Component } from 'react';
import type { Children } from 'react';
import style from './style.scss';

export default class Logo extends Component {

  render() {
    return (
     <div className={style.logo}>
        <div className={style.circleWrapper}>
          <div className={style.smallCircle} />
          <div className={style.bigCircle} />
       </div>
    </div>
    );
  }
}
