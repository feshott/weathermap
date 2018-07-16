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

        {/* описание погоды, влажность , скорость ветра, облачность показывают значения середины дня */}
        <p className="description">{date[needTime[6]].weather[0].description}</p>

        <div className="temp_wrapper">
          {this.createTempBlock('Morn','4', needTime)}
          {this.createTempBlock('Day','5', needTime)}
          {this.createTempBlock('Eve','7', needTime)}
          {this.createTempBlock('Night','2', needTime)}
        </div>

        {/* описание погоды, влажность , скорость ветра, облачность показывают значения середины дня */}
        <p className="speed">{date[needTime[6]].wind.speed}mps</p>
        <p className="clouds">{date[needTime[6]].clouds.all}%</p>
        <p className="humidity">{date[needTime[6]].main.humidity}%</p>
      </div>
    );
  }
}

export default Day;
