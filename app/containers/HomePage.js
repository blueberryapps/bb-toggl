import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import DateTimeEntries from '../components/DateTimeEntries/DateTimeEntries';
import {
  login as loginAction
} from '../actions/toggl';
import type { Client, Project, GrouppedTimeEntries } from '../types';

export class HomePage extends Component {
  props: {
    login: () => null,
    clients: Array<Client>,
    projects: Array<Project>,
    timeEntries: GrouppedTimeEntries
  }

  componentWillMount() {
    const { login } = this.props;
    login('starke@post.cz', 'bbtoggl');
  }

  render() {
    const { clients, projects, timeEntries } = this.props;
    return (
      <DateTimeEntries
        items={timeEntries}
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
