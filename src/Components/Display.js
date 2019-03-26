import React from "react";
import "./cssComponents/Display.css";

export class DisplayToday extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todayTimingLeftHrs: "",
      todayTimingLeftMins: ""
    };
  }

  componentDidMount() {
    var currentTime = new Date();

    setInterval(() => {
      var minuteSec = currentTime.getMinutes() * 60;
      var hoursSec = currentTime.getHours() * 3600;
      var oneDay = 86400;

      var todayTimingLeftHrs = Math.floor(
        (oneDay - (hoursSec + minuteSec)) / 3600
      );
      var todayTimingLeftMins = 60 - currentTime.getMinutes();
      this.setState({
        todayTimingLeftHrs: todayTimingLeftHrs,
        todayTimingLeftMins: todayTimingLeftMins
      });
    }, 1000);
  }

  removeThis(e) {
    this.props.deleteItem(e, "Today");
  }
  render() {
    return (
      <div className="cell cellContainer">
        <div className="boxx boxx1">
          <div className="alert">
            Today
            <span className="time-left">
              {this.state.todayTimingLeftHrs} hr
              {this.state.todayTimingLeftMins} Min
            </span>
          </div>
          {this.props.items.map((item, index) => {
            return (
              <div key={index} className="listitems">
                <div className="cell">
                  <div className="cell content-title">
                    <div
                      className="minus deleteItem"
                      onClick={() => this.removeThis(index)}
                    >
                      <i class="fas fa-times" />
                    </div>
                    &nbsp;{item} &nbsp;
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export class DisplayTomorrow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tomorrowTimingLeft: "",
      tomorrowTimingLeftMins: ""
    };
  }

  componentDidMount() {
    var currentTime = new Date();

    setInterval(() => {
      var minuteSec = currentTime.getMinutes() * 60;
      var hoursSec = currentTime.getHours() * 3600;
      var oneDay = 86400;
      var twoDay = oneDay * 2;

      var tomorrowTimingLeft = Math.floor(
        (twoDay - (hoursSec + minuteSec)) / 3600
      );

      var tomorrowTimingLeftMins = 60 - currentTime.getMinutes();
      this.setState({
        tomorrowTimingLeftMins: tomorrowTimingLeftMins
      });

      this.setState({
        tomorrowTimingLeft: tomorrowTimingLeft,
        tomorrowTimingLeftMins: tomorrowTimingLeftMins
      });
    }, 1000);
  }

  removeThis(e) {
    this.props.deleteItem(e, "Tomorrow");
  }

  render() {
    return (
      <div className="cell">
        <div className="boxx boxx2">
          <div className="alert alert-success">
            Tomorrow
            <span className="time-left">
              {this.state.tomorrowTimingLeft} hr{" "}
              {this.state.tomorrowTimingLeftMins} min
            </span>
          </div>
          {this.props.items.map((item, index) => {
            return (
              <div key={index} className="listitems">
                <div className="cell">
                  <div className="content-title">
                    <div
                      className="minus deleteItem"
                      onClick={() => this.removeThis(index)}
                    >
                      <i class="fas fa-times" />
                    </div>
                    &nbsp;{item}&nbsp;
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
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
      var dayAfterTomorrowMinLeft = 60 - currentTime.getMinutes();
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
      <div className="cell">
        <div className="boxx boxx3">
          <div className="alert alert-success">
            After Tomorrow
            <span className="time-left">
              {this.state.dayAfterTomorrowTimingLeft} hr{" "}
              {this.state.dayAfterTomorrowMinLeft} min
            </span>
          </div>
          {this.props.items.map((item, index) => {
            return (
              <div key={index} className="listitems">
                <div className="cell">
                  <div className="content-title">
                    <div
                      className="minus deleteItem"
                      onClick={() => this.removeThis(index)}
                    >
                      <i class="fas fa-times" />
                    </div>
                    &nbsp;{item} &nbsp;
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default DisplayToday;
