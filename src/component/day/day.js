import React, { Component } from 'react';
import './day.css';

class Day extends Component {

  createTempBlock = (time, timeNum, needTime) => {
    return (
      <div className="temp_block">
        <div className="temp_time">{time}</div>
        <div className="temp">{Math.round(this.props.date[needTime[timeNum]].main.temp - 273)}°</div>
      </div>)
  }

  render() {
    const { date, needTime } = this.props
    console.log(date)
    console.log(needTime)
    return (
      <div className="day">

        <p className="description">{date[needTime[0]].weather[0].description}</p>

        <div className="temp_wrapper">
          {this.createTempBlock('Morn','0', needTime)}
          {this.createTempBlock('Day','2', needTime)}
          {this.createTempBlock('Eve','3', needTime)}
          {this.createTempBlock('Night','4', needTime)}
        </div>

        <p className="speed">{date[needTime[0]].wind.speed}mps</p>
        <p className="clouds">{date[needTime[0]].clouds.all}%</p>
        <p className="humidity">{date[needTime[0]].main.humidity}%</p>
      </div>
    );
  }
}

export default Day;
