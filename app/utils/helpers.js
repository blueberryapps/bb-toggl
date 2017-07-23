import moment from 'moment';

export const DATE_FORMAT = 'DD. MMMM YYYY';
export const TIME_FORMAT = 'H[h] mm[m] ss[s]';

export const secondsToHours = (seconds) => moment('1900-01-01').startOf('day').seconds(seconds).format(TIME_FORMAT);

export const groupByTimeEntryDate = (timeEntries) => timeEntries.reduce((acc, cur) => {
  const date = moment(cur.start).format(DATE_FORMAT);
  return { ...acc, [date]: [...acc[date] || [], cur] };
}, {});

export const formatDate = (date) => {
  switch (date) {
    case moment().format(DATE_FORMAT):
      return 'Today';
    case moment().subtract(1, 'days').startOf('day').format(DATE_FORMAT):
      return 'Yesterday';
    default:
      return date;
  }
};
