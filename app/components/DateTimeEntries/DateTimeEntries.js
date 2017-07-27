// @flow
import React, { Component } from 'react';
import moment from 'moment';
import DateTimeEntry from '../DateTimeEntry/DateTimeEntry';
import { DATE_FORMAT, secondsToHours } from '../../utils/helpers';

export default class DateTimeEntries extends Component {
  props: {
    items: Object,
    clients: ?Object,
    projects: ?Array<Object>
  };

  static defaultProps = {
    items: {},
    projects: [],
    clients: [],
  };

  render() {
    const { items, clients, projects } = this.props;

    const dayTimes = Object.keys(items).reduce((prev, date) => {
      const totalTime = items[date]
        .filter(item => item.duration > 0)
        .reduce((acc, cur) => acc + cur.duration, 0);
      return { ...prev, [date]: totalTime };
    }, {});

    const sortedDates = Object.keys(items).sort((a, b) =>
      moment(b, DATE_FORMAT).diff(moment(a, DATE_FORMAT), 'seconds'),
    );

    return (
      <div>
        {sortedDates.map(date =>
          (<DateTimeEntry
            date={date}
            key={date}
            totalTime={secondsToHours(dayTimes[date])}
            items={items}
            clients={clients}
            projects={projects}
          />)
        )}
      </div>
    );
  }
}
