import React, { Component } from 'react';
import type { Children }
from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Layout from '../components/Layout';
import style from './style.scss';
import * as List from '../components/List';
import mockData from './mockData.json';
import { login as loginAction } from '../actions/login';

class App extends Component {
  props: {
    children: Children,
    login: any,
    response: any
  }

  componentWillMount() {
    const { login } = this.props;
    login();
  }

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
          {mockData.map((listItem) => (
            <List.Wrapper
              date={listItem.date}
              key={listItem.date + listItem.time}
              time={listItem.time}
            >
              {listItem
                .list
                .map((item) => (
                  <List.Item
                    description={item.description}
                    key={item.date + item.time}
                    project={item.project}
                    company={item.company}
                    startTime={item.startTime}
                    endTime={item.endTime}
                    time={item.time}
                    tag={item.tag}
                  />
              ))}
            </List.Wrapper>
          ))}
          {this.props.children}
        </Layout.Content>
      </Layout.Wrapper >
    );
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  login: loginAction
}, dispatch);

const mapStateToProps = (state) => ({ response: state.login.response });

export default connect(mapStateToProps, mapDispatchToProps)(App);
