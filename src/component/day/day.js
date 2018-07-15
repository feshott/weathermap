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

        <p className="description">{date.weather[0].description}</p>

        <div className="temp_wrapper">
          {this.createTempBlock('morn')}
          {this.createTempBlock('day')}
          {this.createTempBlock('eve')}
          {this.createTempBlock('night')}
        </div>

        <p className="speed">{date.speed}mph</p>
        <p className="clouds">{date.clouds}%</p>
        <p className="humidity">{date.humidity}%</p>
      </div>
    );
  }
}

export default Day;
