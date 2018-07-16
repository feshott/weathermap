import React, { Component } from 'react';
import { weather_data } from './data/data';
import Day from './component/day/day';
import './App.css';

const days = [
  [0, 1, 2, 3, 4, 5, 6, 7],
  [8, 9, 10, 11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20, 21, 22, 23],
  [24, 25, 26, 27, 28, 29, 30, 31],
  [32, 33, 34, 35, 36, 37, 38, 39]
]

class App extends Component {

  state = {
    currState: null,
    nowDay: 0
  }

  setDay = (elem) => {
    const nowDay = elem.target.dataset.state
    this.setState({ nowDay })
  }

  componentDidMount() {
    fetch('http://api.openweathermap.org/data/2.5/forecast?q=Moscow,ru&appid=ee6f9118bc7780eab4985a0f5155d14e')
      .then(
        (response) => {
          if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' +
              response.status);
            return;
          }

          response.json().then((data) => {
            this.setState({ currState: data })
            // console.log(data);
          });
        }
      )
      .catch(function (err) {
        console.log('Fetch Error :-S', err);
      });
  }

  render() {
    const { currState, nowDay } = this.state
    console.log(currState)
    return (
      <div className="App">

        {currState != null && <div className="weather">

          <div className={`main ${'main_image_' + currState.city.name}`}>
            <div className={`color_weather ${'color_weather_' + currState.list[nowDay].weather[0].main}`}></div>
            <div className="header">
              <p className="city">{currState.city.name}</p>
              <p key={nowDay} className="curr_day">
                {/* получаем название дня недели в зависимости от выбранного
                 (более подробно в большом описании ниже, в рендере кнопок выбора)*/}
                {((new Date((currState.list[days[nowDay][0]].dt) * 1000)) + '').slice(0, 4)}
              </p>
            </div>
            <Day key={nowDay} date={currState.list} needTime={days[nowDay]}/>
          </div>

          <div className="week_wrapper">
            {days.map((elem, index) =>
              <div
                key={index}
                className="day_btn"
                data-state={index}
                onClick={this.setDay}>
                {/* В следующей строке я беру первое значение каждого дня,
                    там использую дату которая в unix формате,
                    перевожу ее в формат JS,
                    делаю ее строкой,
                    беру первые три буквы и получаю название дня которое меняется в зависимости от времени запроса.
                    мы получаем динамичные кнопки которые меняю название дней ;)
                   */}
                {((new Date((currState.list[elem[0]].dt) * 1000)) + '').slice(0, 4)}
                {/* Похожим способом получаем название погодных условий и получаем картинку*/}
                <div
                  className={`day_btn_image ${'day_btn_image_' + currState.list[elem[0]].weather[0].main}`}
                  data-state={index} />
              </div>)}
          </div>

        </div>}

      </div>
    );
  }
}

export default App;
