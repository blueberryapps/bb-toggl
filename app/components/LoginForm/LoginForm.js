import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login as loginAction, logout as logoutAction } from '../../actions/toggl';
import style from './style.scss';

export class App extends Component {
  props: {
    isLogged: any,
    isLoading: any,
    signOut: any,
    signIn: any,
    wasLoaded: any,
    error: any
  }

  async signIn(e) {
    e.preventDefault();
    await this.props.signIn(this.refs.email.value, this.refs.pass.value);
    this.refs.pass.value = null;
  }

  render() {
    const { isLoading, wasLoaded, error } = this.props;
    return (
      <div className={style.login}>
        <div className={style.loginContent}>
          <form>
            <div className={style.inputWrapper}>
              <label className={style.inputLabel}>
                Email:
              </label>
              <input ref="email" className={style.input} type="text" placeholder="Email" />
            </div>
            <div className={style.inputWrapper}>
              <label className={style.inputLabel}>
                Password:
              </label>
              <input ref="pass" className={style.input} type="password" placeholder="Password" />
            </div>
            {error &&
              <div className={style.error}>
                The <b>email address</b> or <b>password</b> you entered is not valid.
                  </div>
            }
            <div className={style.inputSubmitWrapper}>
              <div className={[(wasLoaded || isLoading) && style.isLoading].filter(Boolean).join(' ')}>
                <input type="submit" value="Sign in" className={style.button} onClick={(e) => this.signIn(e)} />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  signIn: loginAction,
  signOut: logoutAction,
}, dispatch);

const mapStateToProps = (state) => ({
  isLogged: state.toggl.isLogged,
  isLoading: state.toggl.isLoading,
  wasLoaded: state.toggl.wasLoaded,
  error: state.toggl.error
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
