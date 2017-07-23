import moment from 'moment';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as List from '../components/List';
import { login as loginAction, startTracking as startTrackingAction } from '../actions/toggl';
import { DATE_FORMAT, groupByTimeEntryDate, secondsToHours, formatDate } from '../utils/helpers';

export class HomePage extends Component {
  props: {
    login: any,
    clients: any,
    projects: any,
    timeEntries: any,
    startTracking: any
  }

  componentWillMount() {
    const { login } = this.props;
    login('starke@post.cz', 'bbtoggl');
  }

  render() {
    const { clients, projects, timeEntries, startTracking } = this.props;
    const grouppedTimeEntries = timeEntries && groupByTimeEntryDate(timeEntries);

    return (
      <div>
        {grouppedTimeEntries && Object.keys(grouppedTimeEntries)
          .sort(((a, b) => moment(b, DATE_FORMAT).diff(moment(a, DATE_FORMAT), 'seconds')))
          .map((date) => {
            const totalTime = grouppedTimeEntries[date].reduce((acc, cur) => (acc + (cur.duration > 0 ? cur.duration : 0)), 0);
            return (<List.Wrapper
              date={formatDate(date)}
              key={date}
              totalTime={secondsToHours(totalTime)}
            >
              {grouppedTimeEntries[date].map((timeEntry) => {
                const project = projects && projects.find((p) => p.id === timeEntry.pid);
                const client = project && project.cid && clients && clients.find((c) => c.id === project.cid);
                const duration = timeEntry.duration > 0 ? timeEntry.duration : 0;

                return (<List.Item
                  description={timeEntry.description || ''}
                  key={timeEntry.id}
                  project={project && project.name}
                  company={client && client.name}
                  startTime={moment(timeEntry.start).format('HH:MM')}
                  endTime={moment(timeEntry.stop).format('HH:MM')}
                  time={secondsToHours(duration)}
                  tag={timeEntry.tags && timeEntry.tags}
                  startTracking={startTracking}
                  billable={timeEntry.billable}
                  color={project && project.color}
                />);
              })}
            </List.Wrapper>);
          })}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  login: loginAction,
  startTracking: startTrackingAction
}, dispatch);

const mapStateToProps = (state) => ({
  clients: state.toggl.clients,
  projects: state.toggl.projects,
  timeEntries: state.toggl.timeEntries
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
