import moment from 'moment';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as List from '../components/List';
import { login as loginAction } from '../actions/toggl';

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
      <div>
        {grouppedTimeEntries && Object.keys(grouppedTimeEntries)
          .sort(((a, b) => moment(b, 'DD.MM.YYYY').diff(moment(a, 'DD.MM.YYYY'), 'seconds')))
          .map((date) => {
            const totalTime = grouppedTimeEntries[date].reduce((acc, cur) => (acc + (cur.duration > 0 ? cur.duration : 0)), 0);

            return (<List.Wrapper
              date={date}
              key={date}
              totalTime={secondsToHours(totalTime)}
            >
              {grouppedTimeEntries[date].map((timeEntry) => {
                const project = projects && projects.find((p) => p.id === timeEntry.pid);
                const client = project && project.cid && clients && clients.find((c) => c.id === project.cid);

                return (<List.Item
                  description={timeEntry.description || ''}
                  key={timeEntry.id}
                  project={project && project.name}
                  company={client && client.name}
                  startTime={moment(timeEntry.start).format('HH:MM')}
                  endTime={moment(timeEntry.stop).format('HH:MM')}
                  time={secondsToHours(timeEntry.duration)}
                  tag={timeEntry.tags && timeEntry.tags}
                />);
              })}
            </List.Wrapper>);
          })}
      </div>
    );
  }
}

const secondsToHours = (seconds) => moment('1900-01-01').startOf('day').seconds(seconds).format('H[h] mm[m] ss[s]');

const groupByTimeEntryDate = (timeEntries) => timeEntries.reduce((acc, cur) => {
  const date = moment(cur.start).format('DD.MM.YYYY');
  return { ...acc, [date]: [...acc[date] || [], cur] };
}, {});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  login: loginAction
}, dispatch);

const mapStateToProps = (state) => ({
  clients: state.toggl.clients,
  projects: state.toggl.projects,
  timeEntries: state.toggl.timeEntries
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
