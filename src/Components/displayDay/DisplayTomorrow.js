import React from "react";
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
      var tomorrowTimingLeftMins =
        60 - currentTime.getMinutes();
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
      <div className='column__list'>
        <div className='column__item'>
          <div className='column__title--wrapper'>
            <h2>Tomorrow</h2>
            <span className='time-left'>
              {this.state.tomorrowTimingLeft} hr{" "}
              {this.state.tomorrowTimingLeftMins} min
            </span>
          </div>
          {this.props.items.map((item, index) => {
            return (
              <ul key={index} className='card__list'>
                {/* <button
                  type='button'
                  data-toggle='modal'
                  data-target='#exampleModalCenter'
                  onClick={this.toggleModal}
                > */}
                <li className='card__item'>
                  <div className='card__title'>
                    &nbsp;{item}&nbsp;
                  </div>
                  {/* <div
                    className='minus deleteItem'
                    onClick={() => this.removeThis(index)}
                  >
                    <i className='fas fa-times' />
                  </div> */}
                </li>
                {/* </button> */}
              </ul>
            );
          })}
        </div>
      </div>
    );
  }
}
