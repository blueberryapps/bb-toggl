// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import moment from 'moment';
import icoBillable from './billable.svg';
import style from './style.scss';
import { startTracking, stopTracking } from '../../actions/toggl';
import { secondsToHours } from '../../utils/helpers';
import Timer from '../Timer/Timer';
import type { TimeEntry as TimeEntryType } from '../../types';

class TimeEntry extends Component {
  props: {
    active: boolean,
    description: string,
    project: ?string,
    company: ?string,
    duration: number,
    startTime: string,
    endTime: ?string,
    tag: ?[string],
    billable: boolean,
    color: ?string,
    startTracking: (TimeEntryType) => null,
    stopTracking: (number) => null,
    timeEntry: TimeEntryType
  };

  onStartTracking = () => {
    const { active, startTracking, stopTracking, timeEntry } = this.props;

    if (active) {
      stopTracking(timeEntry.id);
    } else {
      const { billable, createdWith, description, pid, tags } = timeEntry;
      startTracking({ billable, createdWith, description, pid, tags });
    }
  }

  render() {
    const {
      active, description, project, company, tag,
      duration, startTime, endTime, billable, color } = this.props;
    return (
      <li className={style.item}>
        <div className={style.itemWrapper}>
          <div className={style.itemName}>
            <div className={[style.description, !description && style.noDescription].filter(Boolean).join(' ')}>
              {description || '(no description)'}
            </div>

            <div className={style.projectWrapper}>
              {project &&
                <span className={[style.project, color && style[`color${color}`]].filter(Boolean).join(' ')}>
                  {project}
                </span>
              }
              {company &&
                <span className={style.company}>
                  - {company}
                </span>
              }
            </div>

            {tag && tag.length !== 0 &&
              <div className={style.tagWrapper}>
                {tag.map((item) =>
                  (<div
                    key={item}
                    className={[
                      style.tag,
                      item === 'important' && style.tagImportant,
                      item === 'mobile' && style.tagMobile,
                    ].filter(Boolean).join(' ')}
                  >
                    {item}
                  </div>)
                )}
              </div>
            }
          </div>
          <div className={style.itemMenu}>
            <div
              role="button"
              tabIndex="0"
              className={[
                style.button,
                !active && style.continue,
                active && style.stop
              ].filter(Boolean).join(' ')}
              onClick={this.onStartTracking}
              title={active ? 'Stop this time entry' : 'Continue with this time entry'}
            />
          </div>
          <div className={style.itemTime}>
            <div className={style.timeFromTo}>
              {moment(startTime).format('HH:mm')} {moment(endTime).format('HH:mm') && `-  ${moment(endTime).format('HH:mm')}`}
            </div>
            <div className={style.currentTime}>
              {duration > 0 && endTime
                ? secondsToHours(duration)
                : <Timer from={startTime} />}
            </div>
            {billable &&
              <div className={style.icon}>
                <img src={icoBillable} className={style.iconBillable} alt="" />
              </div>
            }
          </div>
        </div>
      </li>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      startTracking,
      stopTracking,
    },
    dispatch,
  );

export default connect(null, mapDispatchToProps)(TimeEntry);
