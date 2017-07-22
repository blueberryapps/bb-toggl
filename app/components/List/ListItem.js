// @flow
import React, { Component } from 'react';
import style from './style.scss';

export default class ListWrapper extends Component {
  props: {
    description: string,
    project: string,
    company: string,
    time: string,
    startTime: string,
    endTime: string,
    tag: [{
      name: string,
      id: string | number
    }]
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
                {company}
              </span>
              }
            </div>

            {tag.length !== 0 &&
              <div className={style.tagWrapper}>
                {tag.map((item) =>
                  (<div key={item.id} className={style.tag}>
                    {item.name}
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
