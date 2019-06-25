import React, { Component } from "react";
import "../Components/cssComponents/Header.css";

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      TimeRightNow: "",
      d: "",
      day: "",
      keyword: ""
    };

    this.handleClickOnSetting = this.handleClickOnSetting.bind(
      this
    );
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    var currentTime = new Date();

    setInterval(() => {
      var currentTime = new Date();

      var hours = currentTime.getHours();
      var minutes = currentTime.getMinutes();

      if (minutes < 10) {
        minutes = "0" + minutes;
      }

      var v = hours + " : " + minutes;
      this.setState({
        timeRightNow: v
      });
    }, 1000);

    var day = currentTime.getDate();
    var month = currentTime.getMonth();
    var year = currentTime.getFullYear();
    var din = currentTime.getDay();
    var days = [
      "SUNDAY",
      "MONDAY",
      "TUESDAY",
      "WEDNESDAY",
      "THURSDAY",
      "FRIDAY",
      "SATURDAY"
    ];

    if (day < 10) {
      day = "0" + day;
    }
    if (month < 10) {
      month = "0" + month;
    }
    var d = day + "-" + month + "-" + year;
    this.setState({ d, day: " " + days[din] });
  }

  handleClickOnSetting(event) {
    this.props.showSettingFunction("True");
  }

  handleSearch(e) {
    const f = e.target.value;
    const g = f.replace(/ /g, "+");
    var u = "https://www.google.com/search?q=" + g;
    this.setState({
      keyword: u
    });
  }

  render() {
    return (
      <section className='header'>
        <div className=' datetime'>
          <div className='date_line'>
            <span>{this.state.day}</span>
          </div>
          <div className='date_line marginLeft'>
            <span>{this.state.timeRightNow}</span>
          </div>
        </div>
        <div className='salutation'>
          <div className='name'>
            <span>Hi {this.props.nam}</span>
          </div>
        </div>
        <div className=' settings'>
          <div
            className='setting_img'
            onClick={this.handleClickOnSetting}
          >
            <i className='fas fa-cog' />
          </div>
        </div>
        <div className='search__container'>
          <form
            onSubmit={() =>
              window.open(this.state.keyword, "_blank")
            }
          >
            <input
              type='text'
              id='search'
              name='search'
              onChange={this.handleSearch}
              className='search_input'
              placeholder='Type to search'
            />
          </form>
        </div>
      </section>
    );
  }
}

export default Header;
