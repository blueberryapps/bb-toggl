// @flow
import React, { Component } from 'react';
import moment from 'moment';
import { secondsToHours } from '../../utils/helpers';

export default class Timer extends Component {
  props: {
    from: string
  };

  state = {
    duration: 0
  }

  componentDidMount() {
    const { from } = this.props;
    const now = moment(new Date());
    const startsFrom = moment(from);

    this.setState({
      duration: moment.duration(now.diff(startsFrom)).asSeconds(),
    });

    this.timer = setInterval(() => {
      this.setState({
        duration: this.state.duration + 1,
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return <div>{secondsToHours(this.state.duration)}</div>;
  }
}
