import React, { Component } from 'react';
import style from './style.scss';

export default class ListWrapper extends Component {
  props: {
    description: string,
    project: ?number,
    company: string,
    time: number,
    startTime: string,
    endTime: ?string,
    tag: ?[string]
  };


  render() {
    const { description, project, company, tag, time, startTime, endTime } = this.props;
    return (
      <li className={style.item}>
        <div className={style.itemWrapper}>
          <div className={style.itemName}>
            <div className={[style.description, !description && style.noDescription].filter(Boolean).join(' ')}>
              {description || '(no description)'}
            </div>

            <div className={style.projectWrapper}>
              {project &&
                <span className={style.project}>
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
                  (<div key={item} className={style.tag}>
                    {item}
                  </div>)
                )}
              </div>
            }
          </div>
          <div className={style.itemMenu}>
            <div className={style.continue} title="Continue with this time entry" />
          </div>
          <div className={style.itemTime}>
            <div className={style.timeFromTo}>
              {startTime} {endTime && `-  ${endTime}`}
            </div>
            <div className={style.currentTime}>
              {time}
            </div>
          </div>
        </div>
      </li>
    );
  }
}
