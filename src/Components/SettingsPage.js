import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import "./cssComponents/Settings.css";

function SettingsPage(props) {
  const [isSubmit, setIsSubmit] = useState(false);

  function onSubmitForm() {
    setIsSubmit(true);
    props.onSubmit();
  }
  function handleSettingClose() {}
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
            onClick={handleSettingClose}
            className='btn btn-success btn-ghost'
          >
            <i className='fas fa-times' />
          </button>
        </div>
      </div>
      <form className='formadjust' onSubmit={onSubmitForm}>
        <div className='form-group'>
          <label>YOUR NAME : </label>
          <input
            type='text'
            className='form-control'
            onChange={props.onChange}
            value={props.value}
          />
        </div>
        <div className='form-group'>
          <button type='submit' className=''>
            that's my name!
          </button>
        </div>
      </form>
      {isSubmit && <Redirect to='/' />}
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
export default SettingsPage;
