import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as List from '../components/List';
import mockData from './mockData.json';
import { loadInitialData as loadInitialDataAction } from '../actions/toggl';

export class HomePage extends Component {
  props: {
    loadInitialData: any,
    response: any
  }

  componentWillMount() {
    const { loadInitialData } = this.props;
    loadInitialData();
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
  loadInitialData: loadInitialDataAction
}, dispatch);

const mapStateToProps = (state) => ({ response: state.toggl.response });

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
