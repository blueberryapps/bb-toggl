// @flow
import React, { Component } from 'react';
import moment from 'moment';
import DateTimeEntry from '../DateTimeEntry/DateTimeEntry';
import { DATE_FORMAT } from '../../utils/helpers';
import type { Client, Project, GrouppedTimeEntries } from '../../reducers/toggl';

export default class DateTimeEntries extends Component {
  props: {
    items: GrouppedTimeEntries,
    clients: Array<Client>,
    projects: Array<Project>
  };

  static defaultProps = {
    items: {},
    projects: [],
    clients: [],
  };

  render() {
    const { items, clients, projects } = this.props;

    const sortedDates = Object.keys(items).sort((a, b) =>
      moment(b, DATE_FORMAT).diff(moment(a, DATE_FORMAT), 'seconds'),
    );

    return (
      <div>
        {sortedDates.map(date =>
          (<DateTimeEntry
            date={date}
            key={date}
            totalTime={items[date].totalTime}
            entries={items[date].entries}
            clients={clients}
            projects={projects}
          />)
        )}
      </div>
    );
  }
}
