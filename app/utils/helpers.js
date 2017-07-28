import moment from 'moment';
import { TimeEntry, GrouppedTimeEntries } from '../types';

export const DATE_FORMAT = 'DD. MMMM YYYY';
export const TIME_FORMAT = 'H[h] mm[m] ss[s]';

export const secondsToHours = (seconds: number): string => {
  const numberOfSeconds = seconds < 0 ? 0 : seconds;
  return moment('1900-01-01').startOf('day').seconds(numberOfSeconds).format(TIME_FORMAT);
};

export const getDayInDateFormat = (date: string): string => moment(date).format(DATE_FORMAT);

export const groupByTimeEntryDate = (timeEntries: Array<TimeEntry>): GrouppedTimeEntries =>
  timeEntries.reduce((acc, cur) => {
    const date = getDayInDateFormat(cur.start);
    const data = acc[date] || {};
    const entries = [...(data.entries || []), cur];
    const totalTime = (data.totalTime || 0) + (cur.duration > 0 ? cur.duration : 0);
    return { ...acc, [date]: { entries, totalTime } };
  }, {});

export const formatDate = (date: string): string => {
  switch (date) {
    case moment().format(DATE_FORMAT):
      return 'Today';
    case moment().subtract(1, 'days').startOf('day').format(DATE_FORMAT):
      return 'Yesterday';
    default:
      return date;
  }
};
