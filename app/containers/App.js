// @flow
import React, { Component } from 'react';
import type { Children } from 'react';
import * as Layout from '../components/Layout';
import style from './style.scss';
import * as List from '../components/List';
import mockData from './mockData.json';

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
          {mockData.map((listItem) => {
            return (
              <List.Wrapper
                date={listItem.date}
                time={listItem.time}
              >
                {listItem.list.map((item) => {
                  return (
                    <List.Item
                      description={item.description}
                      project={item.project}
                      company={item.company}
                      startTime={item.startTime}
                      endTime={item.endTime}
                      time={item.time}
                      tag={item.tag}
                    />
                  );
                })}
              </List.Wrapper>
            );
          })}
          {this.props.children}
        </Layout.Content>
      </Layout.Wrapper >
    );
  }
}
