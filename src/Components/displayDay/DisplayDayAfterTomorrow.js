import React from "react";
import "../cssComponents/displayToday.css";

export class DisplayDayAfterTomorrow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dayAfterTomorrowTimingLeft: "",
      dayAfterTomorrowMinLeft: ""
    };
  }
  componentDidMount() {
    var currentTime = new Date();
    setInterval(() => {
      var minuteSec = currentTime.getMinutes() * 60;
      var hoursSec = currentTime.getHours() * 3600;
      var oneDay = 86400;
      var threeDay = oneDay * 3;
      var dayAfterTomorrowTimingLeft = Math.floor(
        (threeDay - (hoursSec + minuteSec)) / 3600
      );
      var dayAfterTomorrowMinLeft =
        60 - currentTime.getMinutes();
      this.setState({
        dayAfterTomorrowMinLeft: dayAfterTomorrowMinLeft
      });
      this.setState({
        dayAfterTomorrowTimingLeft: dayAfterTomorrowTimingLeft,
        dayAfterTomorrowMinLeft: dayAfterTomorrowMinLeft
      });
    }, 1000);
  }
  removeThis(e) {
    this.props.deleteItem(e, "Day_After_Tomorrow");
  }
  render() {
    return (
      <div className='column__list'>
        <div className='column__item'>
          <div className='column__title--wrapper'>
            <h2>After Tomorrow </h2>
            <span className='time-left'>
              {this.state.dayAfterTomorrowTimingLeft} hr{" "}
              {this.state.dayAfterTomorrowMinLeft} min
            </span>
          </div>
          {this.props.items.map((item, index) => {
            return (
              <ul key={index} className='card__list'>
                <li className='card__item'>
                  <div className='card__title'>
                    &nbsp;{item} &nbsp;
                  </div>
                  {/* <ol
                    className='minus deleteItem'
                    onClick={() => this.removeThis(index)}
                  >
                    <i class='fas fa-times' />
                  </ol> */}
                </li>
              </ul>
            );
          })}
        </div>
      </div>
    );
  }
}
