import React, { Component } from 'react';
import './day.css';

class Day extends Component {

  createTempBlock = (time) => {
    return (
      <div className="temp_block">
        <div className="temp_time">{time}</div>
        <div className="temp">{Math.round(this.props.date.temp[time] - 273)}°</div>
      </div>)
  }

  render() {
    const { date } = this.props
    console.log(date)
    return (
      <div className="day">

        <div className="description">{date.weather[0].description}</div>

        <div className="temp_wrapper">
          {this.createTempBlock('morn')}
          {this.createTempBlock('day')}
          {this.createTempBlock('eve')}
          {this.createTempBlock('night')}
        </div>

        <div className="speed">{date.speed}mph</div>
        <div className="clouds">{date.clouds}%</div>
        <div className="humidity">{date.humidity}%</div>
      </div>
    );
  }
}

export default Day;
