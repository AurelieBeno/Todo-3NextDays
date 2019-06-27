import React, { useState, useEffect } from "react";
import "../cssComponents/displayToday.css";

function DisplayDayAfterTomorrow(props) {
  const [
    dayAfterTomorrowTimingLeft,
    setTimingLeft
  ] = useState("");
  const [
    dayAfterTomorrowMinLeft,
    setTimingLeftMin
  ] = useState("");

  useEffect(() => {
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
      setTimingLeft(dayAfterTomorrowTimingLeft);
      setTimingLeftMin(dayAfterTomorrowMinLeft);
    }, 1000);
  });
  function removeThis(e) {
    props.deleteItem(e, "Day_After_Tomorrow");
  }

  return (
    <div className='column__list'>
      <div className='column__item'>
        <div className='column__title--wrapper'>
          <h2>After Tomorrow </h2>
          <span className='time-left'>
            {dayAfterTomorrowTimingLeft} hr{" "}
            {dayAfterTomorrowMinLeft} min
          </span>
        </div>
        {props.items.map((item, index) => {
          return (
            <ul key={index} className='card__list'>
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
            </ul>
          );
        })}
      </div>
    </div>
  );
}
export default DisplayDayAfterTomorrow;
