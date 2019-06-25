import React from "react";
import Modal from "../Modal.js";

export class DisplayToday extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todayTimingLeftHrs: "",
      todayTimingLeftMins: "",
      isOpen: false
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
      var todayTimingLeftMins =
        60 - currentTime.getMinutes();
      this.setState({
        todayTimingLeftHrs: todayTimingLeftHrs,
        todayTimingLeftMins: todayTimingLeftMins
      });
    }, 1000);
  }

  removeThis(e) {
    this.props.deleteItem(e, "Today");
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <div className='column__list '>
        <div className='column__item'>
          <div className='column__title--wrapper'>
            <h2>Today</h2>
            <span className='time-left'>
              {this.state.todayTimingLeftHrs} hr
              {this.state.todayTimingLeftMins} Min
            </span>
          </div>
          {this.props.items.map((item, index) => {
            return (
              <ul
                key={index}
                className='card__list'
                onClick={this.toggleModal}
              >
                <li className='card__item'>
                  <div className='card__title'>
                    &nbsp;{item} &nbsp;
                  </div>
                  <div
                    className='minus deleteItem'
                    onClick={() => this.removeThis(index)}
                  >
                    <i className='fas fa-times' />
                  </div>
                </li>
                <Modal
                  show={this.state.isOpen}
                  onClose={this.toggleModal}
                >
                  Here's some content for the modal
                  {this.props.items}
                </Modal>
              </ul>
            );
          })}
        </div>
      </div>
    );
  }
}
export default DisplayToday;
