// @flow
import React, { Component } from 'react';
import moment from 'moment';
import style from './style.scss';
import TimeEntry from '../TimeEntry/TimeEntry';
import { formatDate, secondsToHours } from '../../utils/helpers';
import type { Project, Client, TimeEntry as TimeEntryType } from '../../types';

export default class DateTimeEntry extends Component {
  props: {
    date: string,
    totalTime: number,
    entries: Array<TimeEntryType>,
    clients: Array<Client>,
    projects: Array<Project>
  };

  render() {
    const { date, totalTime, entries, clients, projects } = this.props;

    if (!entries) return null;

    return (
      <div>
        <div className={style.date}>
          {formatDate(date)}
          <span className={style.time}>
            {secondsToHours(totalTime)}
          </span>
        </div>
        <ul className={style.list}>
          {entries
            .sort((a, b) => moment(b.start).diff(moment(a.start), 'seconds'))
            .map(timeEntry => {
              const project = projects.find(p => p.id === timeEntry.pid) || {};
              const client = clients.find(c => c.id === project.cid);
              const duration = timeEntry.duration > 0 ? timeEntry.duration : 0;
              const isActive = timeEntry.duration < 0;
              return (
                <TimeEntry
                  active={isActive}
                  description={timeEntry.description || ''}
                  key={timeEntry.id}
                  project={project && project.name}
                  company={client && client.name}
                  startTime={timeEntry.start}
                  endTime={timeEntry.stop}
                  duration={duration}
                  tag={timeEntry.tags && timeEntry.tags}
                  timeEntry={timeEntry}
                  billable={timeEntry.billable}
                  color={project && project.color}
                />
              );
            })}
        </ul>
      </div>
    );
  }
}
