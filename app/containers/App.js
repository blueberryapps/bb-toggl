import React, { Component } from 'react';
import type { Children } from 'react';
import * as Layout from '../components/Layout';
import Logo from '../components/Logo/Logo';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loginOut as layoutLoginOut, loginIn as layoutLoginIn } from '../actions/layout';
import style from './style.scss';

export class App extends Component {
  props: {
    children: Children,
    isLoggin: any,
    loginOut: any,
    loginIn: any
  }

  render() {
    const { isLoggin } = this.props;
    return (
      <Layout.Wrapper>
        <Layout.Header isLoggin={isLoggin}>
          <Logo />
          {isLoggin &&
            <div className={style.buttonLogInOut} onClick={this.props.loginOut}>
              Login Out
            </div>
          }
          <div className={style.login}>
            <div className={style.loginContent}>
              <div onClick={this.props.loginIn}>
                <button className={style.button}>
                  Login In
                </button>
              </div>
            </div>
          </div>
        </Layout.Header>
        <Layout.Content>
          {this.props.children}
        </Layout.Content>
      </Layout.Wrapper >
    );
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  loginOut: layoutLoginOut,
  loginIn: layoutLoginIn
}, dispatch);

const mapStateToProps = (state) => ({ isLoggin: state.layout.isLoggin });

export default connect(mapStateToProps, mapDispatchToProps)(App);
