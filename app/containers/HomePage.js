import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import DateTimeEntries from '../components/DateTimeEntries/DateTimeEntries';
import { groupByTimeEntryDate } from '../utils/helpers';
import {
  login as loginAction
} from '../actions/toggl';

export class HomePage extends Component {
  props: {
    login: any,
    clients: any,
    projects: any,
    timeEntries: any
  }

  componentWillMount() {
    const { login } = this.props;
    login('starke@post.cz', 'bbtoggl');
  }

  render() {
    const { clients, projects, timeEntries } = this.props;
    const grouppedTimeEntries = timeEntries && groupByTimeEntryDate(timeEntries);

    return (
      <DateTimeEntries
        items={grouppedTimeEntries}
        clients={clients}
        projects={projects}
      />
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    login: loginAction
  },
  dispatch
);

const mapStateToProps = state => ({
  clients: state.toggl.clients,
  projects: state.toggl.projects,
  timeEntries: state.toggl.timeEntries,
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
