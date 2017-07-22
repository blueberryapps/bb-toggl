import React, { Component } from 'react';
import type { Children } from 'react';
import * as Layout from '../components/Layout';
import Logo from '../components/Logo/Logo';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { logout as logoutAction } from '../actions/toggl';
import style from './style.scss';
import LoginForm from '../components/LoginForm/LoginForm';
import { shell } from 'electron';

export class App extends Component {
  props: {
    children: Children,
    isLogged: any,
    signOut: any
  }

  openBBWeb(e) {
    e.preventDefault();
    shell.openExternal('https://www.blueberry.io/');
  }

  render() {
    const { isLogged } = this.props;
    return (
      <Layout.Wrapper>
        <Layout.Header isLoggin={isLogged}>
          <Logo />
          {isLogged ?
            <div className={style.buttonLogInOut} onClick={this.props.signOut}>
              Sign Out
            </div>
            :
            <div className={style.footer}>
              <div className={style.footerWrapper} onClick={(e) => this.openBBWeb(e)}>
                <div className={style.logo}>
                  <div className={style.circleWrapper}>
                    <div className={style.smallCircle} />
                    <div className={style.bigCircle} />
                  </div>
                </div>
                created by blueberry 2017
              </div>
            </div>
          }
          <LoginForm />
        </Layout.Header>
        <Layout.Content>
          {this.props.children}
        </Layout.Content>
      </Layout.Wrapper >
    );
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  signOut: logoutAction,
}, dispatch);

const mapStateToProps = (state) => ({
  isLogged: state.toggl.isLogged,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
