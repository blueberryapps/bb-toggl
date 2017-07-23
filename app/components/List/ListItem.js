import React, { Component } from 'react';
import icoBillable from './billable.svg';
import style from './style.scss';

export default class ListWrapper extends Component {
  props: {
    active: boolean,
    description: string,
    project: ?string,
    company: ?string,
    time: string,
    startTime: string,
    endTime: ?string,
    startTracking: any,
    tag: ?[string],
    billable: boolean,
    color: ?string,
    stopTracking: any,
    timeEntry: any
  };

  onStartTracking() {
    const { active, startTracking, stopTracking, timeEntry } = this.props;

    if (!active) {
      stopTracking(timeEntry.id);
    } else {
      startTracking({});
    }
  }

  render() {
    const { description, project, company, tag, time, startTime, endTime, billable, color } = this.props;
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
              className={style.continue}
              onClick={this.onStartTracking.bind(this)}
              title="Continue with this time entry"
            />
          </div>
          <div className={style.itemTime}>
            <div className={style.timeFromTo}>
              {startTime} {endTime && `-  ${endTime}`}
            </div>
            <div className={style.currentTime}>
              {time}
            </div>
            {billable &&
              <div className={style.icon}>
                <img src={icoBillable} className={style.iconBillable} />
              </div>
            }
          </div>
        </div>
      </li>
    );
  }
}
