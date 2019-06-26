import React, { useState, useEffect } from "react";
import SimpleSotrage from "react-simple-storage";
import moment from "moment";
import "../Components/cssComponents/Header.css";
import SettingsPage from "./SettingsPage";

const Header = props => {
  const [timeRightNow, setTimeRightNow] = useState("");
  const [keyword, setKeyword] = useState("");
  const [isClick, setIsClick] = useState(false);
  const [name, setName] = useState("");
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    setCurrentDate(
      moment(new Date()).format("dddd DD MMM")
    );
    setInterval(() => {
      let minutes = moment().format(" HH:mm:ss ");
      setTimeRightNow(minutes);
    }, 1000);
  });

  const handleClickOnSetting = event => {
    setIsClick(true);
  };

  const handleSearch = e => {
    const f = e.target.value;
    const g = f.replace(/ /g, "+");
    var u = "https://www.google.com/search?q=" + g;
    setKeyword(u);
  };
  return (
    <section className='header'>
      <div className=' datetime'>
        <div className='date_line'>
          <span>{currentDate}</span>
        </div>
        <div className='date_line marginLeft'>
          <span>{timeRightNow}</span>
        </div>
      </div>
      <div className='salutation'>
        <div className='name'>
          <span>Hi {props.name}</span>
        </div>
      </div>
      <div className=' settings'>
        <div
          className='setting_img'
          onClick={e => handleClickOnSetting(e)}
        >
          <i className='fas fa-cog' />
        </div>
      </div>
      <div className='search__container'>
        <form
          onSubmit={() => window.open(keyword, "_blank")}
        >
          <input
            type='text'
            id='search'
            name='search'
            onChange={handleSearch}
            className='search_input'
            placeholder='Type to search'
          />
        </form>
      </div>
      {isClick && (
        <div>
          <SimpleSotrage parent={this} />

          <SettingsPage parentName={name} />
        </div>
      )}
    </section>
  );
};

export default Header;
