// @flow
import React, { Component } from 'react';
import type { Children } from 'react';
import * as Layout from '../components/Layout';
import style from './style.scss';

export default class App extends Component {
  props: {
    children: Children
  };

  render() {
    return (
      <Layout.Wrapper>
        <Layout.Header>
          <div className={style.logo}>
            <div className={style.circleWrapper}>
              <div className={style.smallCircle} />
              <div className={style.bigCircle} />
            </div>
          </div>
        </Layout.Header>
        <Layout.Content>
          <div className={style.date}>
            Today
            <span className={style.time}>
              2h 48min
            </span>
          </div>
          <ul className={style.list}>
            <li className={style.item}>
              <div className={style.itemWrapper}>
                <div className={style.itemName}>
                  <div className={[style.description, style.noDescription].filter(Boolean).join(' ')}>
                    Project description...
                  </div>
                  <div className={style.project}>
                    p4 - Delivery schedule
                    <span className={style.company}>
                      Cemex
                    </span>
                  </div>
                  <div className={style.tagWrapper}>
                    <div className={style.tag}>
                      mobile
                    </div>
                    <div className={[style.tag, style.tagOrange].filter(Boolean).join(' ')}>
                      remote
                    </div>
                  </div>
                </div>
                <div className={style.itemMenu}>
                  <div className={style.continue} title="Continue with this time entry" />
                </div>
                <div className={style.itemTime}>
                  <div className={style.timeFromTo}>
                    8:34 - 11:22
                  </div>
                  <div className={style.currentTime}>
                    2h 48min 51s
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <div className={style.date}>
            Yesterday
            <span className={style.time}>
              7h 53min
            </span>
          </div>
          <ul className={style.list}>
            <li className={style.item}>
              <div className={style.itemWrapper}>
                <div className={style.itemName}>
                  <div className={style.description}>
                    Onboarding
                  </div>
                  <div className={style.project}>
                    <span className={style.other}>
                      _Other
                    </span>
                    <span className={style.company}>
                      Blueberry
                    </span>
                  </div>
                </div>
                <div className={style.itemMenu}>
                  <div className={style.continue} title="Continue with this time entry" />
                </div>
                <div className={style.itemTime}>
                  <div className={style.timeFromTo}>
                    13:48 - 17:10
                  </div>
                  <div className={style.currentTime}>
                    4h 22min 12s
                  </div>
                </div>
              </div>
            </li>
            <li className={style.item}>
              <div className={style.itemWrapper}>
                <div className={style.itemName}>
                  <div className={style.description}>
                    Project description...
                  </div>
                  <div className={style.project}>
                    Project name
                  </div>
                </div>
                <div className={style.itemTime}>
                  <div className={style.timeFromTo}>
                    9:32 - 13:10
                  </div>
                  <div className={style.currentTime}>
                    3h 22min 33s
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <div className={style.date}>
            21. June 2017
             <span className={style.time}>
              10h 19min
            </span>
          </div>
          <ul className={style.list}>
            <li className={style.item}>
              <div className={style.itemWrapper}>
                <div className={style.itemName}>
                  <div className={style.description}>
                    Project description...
                  </div>
                  <div className={style.project}>
                    Project name
                  </div>
                </div>
                <div className={style.itemTime}>
                  <div className={style.timeFromTo}>
                    15:11 - 18:11
                  </div>
                  <div className={style.currentTime}>
                    3h 0min 3s
                  </div>
                </div>
              </div>
            </li>
            <li className={style.item}>
              <div className={style.itemWrapper}>
                <div className={style.itemName}>
                  <div className={style.description}>
                    Project description...
                  </div>
                  <div className={style.project}>
                    Project name
                  </div>
                </div>
                <div className={style.itemTime}>
                  <div className={style.timeFromTo}>
                    12:57 - 14:49
                  </div>
                  <div className={style.currentTime}>
                    1h 59min 1s
                  </div>
                </div>
              </div>
            </li>
            <li className={style.item}>
              <div className={style.itemWrapper}>
                <div className={style.itemName}>
                  <div className={style.description}>
                    Project description...
                  </div>
                  <div className={style.project}>
                    Project name
                  </div>
                </div>
                <div className={style.itemTime}>
                  <div className={style.timeFromTo}>
                    8:57 - 12:44
                  </div>
                  <div className={style.currentTime}>
                    3h 57min 32s
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <div className={style.date}>
            20. June 2017
            <span className={style.time}>
              7h 53min
            </span>
          </div>
          <ul className={style.list}>
            <li className={style.item}>
              <div className={style.itemWrapper}>
                <div className={style.itemName}>
                  <div className={style.description}>
                    Project description...
                  </div>
                  <div className={style.project}>
                    Project name
                  </div>
                </div>
                <div className={style.itemTime}>
                  <div className={style.timeFromTo}>
                    13:48 - 17:10
                  </div>
                  <div className={style.currentTime}>
                    4h 22min 12s
                  </div>
                </div>
              </div>
            </li>
            <li className={style.item}>
              <div className={style.itemWrapper}>
                <div className={style.itemName}>
                  <div className={style.description}>
                    Project description...
                  </div>
                  <div className={style.project}>
                    Project name
                  </div>
                </div>
                <div className={style.itemTime}>
                  <div className={style.timeFromTo}>
                    9:32 - 13:10
                  </div>
                  <div className={style.currentTime}>
                    3h 22min 33s
                  </div>
                </div>
              </div>
            </li>
          </ul>
          {this.props.children}
        </Layout.Content>
      </Layout.Wrapper >
    );
  }
}
