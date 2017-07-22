import moment from 'moment';

export const secondsToHours = (seconds) => moment('1900-01-01').startOf('day').seconds(seconds).format('H[h] mm[m] ss[s]');

export const groupByTimeEntryDate = (timeEntries) => timeEntries.reduce((acc, cur) => {
  const date = moment(cur.start).format('DD.MM.YYYY');
  return { ...acc, [date]: [...acc[date] || [], cur] };
}, {});
