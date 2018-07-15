import React, { Component } from 'react';
import { weather_data } from './data/data';
import Day from './component/day/day';
import './App.css';

const days = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday'
]

class App extends Component {

  state = {
    currState: weather_data,
    nowDay: 0
  }

  setDay = (elem) => {
    const nowDay = elem.target.dataset.state
    this.setState({ nowDay })
  }

  render() {
    const { currState, nowDay } = this.state
    return (
      <div className="App">

        <div className="weather">

          <div className={`main ${'main_image_' + currState.city.name}`}>
            <div className={`color_weather ${'color_weather_' + currState.list[nowDay].weather[0].main}`}></div>
            <div className="header">
              <p className="city">{currState.city.name}</p>
              <p key={nowDay}className="curr_day">{days[nowDay]}</p>
            </div>
            <Day key={nowDay} date={currState.list[nowDay]} />
          </div>

          <div className="week_wrapper">
            {days.map((elem, index) =>
              <div
                key={index}
                className="day_btn"
                data-state={index}
                onClick={this.setDay}>
                {elem.substring(0, 3)}
                <div
                  className={`day_btn_image ${'day_btn_image_' + currState.list[index].weather[0].main}`}
                  data-state={index} />
              </div>)}
          </div>

        </div>

      </div>
    );
  }
}

export default App;
