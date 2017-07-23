import moment from 'moment';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as List from '../components/List';
import { login as loginAction, startTracking as startTrackingAction, stopTracking as stopTrackingAction } from '../actions/toggl';
import { DATE_FORMAT, groupByTimeEntryDate, secondsToHours } from '../utils/helpers';

export class HomePage extends Component {
  props: {
    login: any,
    clients: any,
    projects: any,
    timeEntries: any,
    startTracking: any,
    stopTracking: any
  }

  componentWillMount() {
    const { login } = this.props;
    login('starke@post.cz', 'bbtoggl');
  }

  render() {
    const { clients, projects, timeEntries, startTracking, stopTracking } = this.props;
    const grouppedTimeEntries = timeEntries && groupByTimeEntryDate(timeEntries);

    return (
      <div>
        {grouppedTimeEntries && Object.keys(grouppedTimeEntries)
          .sort(((a, b) => moment(b, DATE_FORMAT).diff(moment(a, DATE_FORMAT), 'seconds')))
          .map((date) => {
            const totalTime = grouppedTimeEntries[date].reduce((acc, cur) => (acc + (cur.duration > 0 ? cur.duration : 0)), 0);

            return (<List.Wrapper
              date={date}
              key={date}
              totalTime={secondsToHours(totalTime)}
            >
              {grouppedTimeEntries[date]
                .sort(((a, b) => moment(b.start).diff(moment(a.start), 'seconds')))
                .map((timeEntry) => {
                  const project = projects && projects.find((p) => p.id === timeEntry.pid);
                  const client = project && project.cid && clients && clients.find((c) => c.id === project.cid);
                  const duration = timeEntry.duration > 0 ? timeEntry.duration : 0;
                  const isActive = timeEntry.duration > 0;

                  return (<List.Item
                    active={isActive}
                    description={timeEntry.description || ''}
                    key={timeEntry.id}
                    project={project && project.name}
                    company={client && client.name}
                    startTime={moment(timeEntry.start).format('HH:mm')}
                    endTime={moment(timeEntry.stop).format('HH:mm')}
                    time={secondsToHours(duration)}
                    tag={timeEntry.tags && timeEntry.tags}
                    startTracking={startTracking}
                    stopTracking={stopTracking}
                    timeEntry={timeEntry}
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
  startTracking: startTrackingAction,
  stopTracking: stopTrackingAction,
}, dispatch);

const mapStateToProps = (state) => ({
  clients: state.toggl.clients,
  projects: state.toggl.projects,
  timeEntries: state.toggl.timeEntries
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
