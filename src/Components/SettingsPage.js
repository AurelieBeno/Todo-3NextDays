import React from "react";

import "./cssComponents/Settings.css";

export class SettingsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ""
    };
    this.handleSettingClose = this.handleSettingClose.bind(
      this
    );
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSettingClose(e) {
    this.props.hideSettingFunction("False");
  }

  handleChange(e) {
    this.setState({
      term: e.target.value
    });
  }

  handleSubmit() {
    this.props.setUserName(this.state.term);
  }

  render() {
    return (
      <div className='settings_container'>
        <div className='settings_topbar'>
          {/* <div
            className="mainsettings cell"
            onClick={this.handleClickOnSetting}
          > */}
          {/* <img src={require("./setting-png.png")} alt="set" /> */}
          {/* </div> */}
          <div className='setting-title '>
            <span>S E T T I N G S</span>
          </div>
          <div className='topbar'>
            <button
              onClick={this.handleSettingClose}
              className='btn btn-success btn-ghost'
            >
              <i className='fas fa-times' />
            </button>
          </div>
        </div>
        <form
          className='formadjust'
          onSubmit={this.handleSubmit}
        >
          <div className='form-group'>
            <label>YOUR NAME : </label>
            <input
              type='text'
              placeholder={this.props.presentName}
              className='form-control'
              onChange={this.handleChange}
            />
          </div>
          <div className='form-group'>
            <button className=''>that's my name!</button>
          </div>
        </form>
        <br />
        <div className='maker_info'>
          <div className='maker_info_titl'>
            <h3> Made by Me with help </h3>
          </div>
          <div className='meker_info_content'>
            <p>you can find him here -</p>
            <h4>
              Github -{" "}
              <a href='https://www.github.com/aureliebeno'>
                www.github.com/aureliebeno
              </a>
            </h4>
          </div>
        </div>
      </div>
    );
  }
}
export default SettingsPage;
