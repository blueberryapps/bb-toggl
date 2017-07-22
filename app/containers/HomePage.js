import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { login as loginActions } from '../actions/login';

class HomePage extends Component {
  async componentDidMount() {
    const { login } = this.props;

    login();
  }

  render() {
    const { response } = this.props;

    return (
      <div>
        <span>Home</span>
        <p>{response && response.data.email}</p>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ loginActions }, dispatch);

const mapStateToProps = (state) => ({
  response: state.login.response
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
