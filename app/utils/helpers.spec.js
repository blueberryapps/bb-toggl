import moment from 'moment';
import { groupByTimeEntryDate, secondsToHours, formatDate, DATE_FORMAT } from './helpers';

const timeEntries = [{
  duration: 10,
  start: '2017-07-21T10:34:00+00:00'
},
{
  duration: 15,
  start: '2017-07-21T12:10:00+00:00'
}];

describe('groupByTimeEntryDate', () => {
  test('works with zero entries', () => {
    const data = [];
    const expectedOutput = {};
    expect(groupByTimeEntryDate(data)).toEqual(expectedOutput);
  });

  test('transform input correctly', () => {
    const expectedOutput = {
      '21. July 2017': {
        totalTime: 25,
        entries: [{
          duration: 10,
          start: '2017-07-21T10:34:00+00:00'
        },
        {
          duration: 15,
          start: '2017-07-21T12:10:00+00:00'
        }]
      }
    };
    expect(groupByTimeEntryDate(timeEntries)).toEqual(expectedOutput);
  });

  test('handles negative duration', () => {
    const input = [...timeEntries, { duration: -20, start: '2017-07-21T12:10:00+00:00' }];

    const expectedOutput = {
      '21. July 2017': {
        totalTime: 25,
        entries: [{
          duration: 10,
          start: '2017-07-21T10:34:00+00:00'
        },
        {
          duration: 15,
          start: '2017-07-21T12:10:00+00:00'
        },
        {
          duration: -20,
          start: '2017-07-21T12:10:00+00:00'
        }]
      }
    };
    expect(groupByTimeEntryDate(input)).toEqual(expectedOutput);
  });
});


describe('secondsToHours', () => {
  test('format hours correctly', () => {
    expect(secondsToHours(3600)).toBe('1h 00m 00s');
  });

  test('format negative seconds', () => {
    expect(secondsToHours(-3600)).toBe('0h 00m 00s');
  });
});


describe('formatDate', () => {
  test('formats today date and returns Today', () => {
    expect(formatDate(moment().format(DATE_FORMAT))).toBe('Today');
  });

  test('formats today date and returns Yesterday', () => {
    expect(formatDate(moment().subtract(1, 'days').format(DATE_FORMAT))).toBe('Yesterday');
  });

  test('formats other date and returns timestamp', () => {
    expect(formatDate('25. June 2017')).toBe('25. June 2017');
  });
});
