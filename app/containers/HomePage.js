import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as List from '../components/List';
import mockData from './mockData.json';
import { login as loginAction } from '../actions/login';

export class HomePage extends Component {
  props: {
    login: any,
    response: any
  }

  componentWillMount() {
    const { login } = this.props;
    login();
  }

  render() {
    return (
      <div>
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
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  login: loginAction
}, dispatch);

const mapStateToProps = (state) => ({ response: state.login.response });


export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
