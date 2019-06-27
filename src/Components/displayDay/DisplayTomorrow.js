import React, { useState, useEffect } from "react";

function DisplayTomorrow(props) {
  const [
    tomorrowTimingLeft,
    setTomorrowTimingLeft
  ] = useState("");
  const [
    tomorrowTimingLeftMins,
    setTomorrowTimingLeftMins
  ] = useState("");

  useEffect(() => {
    let currentTime = new Date();
    setInterval(() => {
      let minuteSec = currentTime.getMinutes() * 60;
      let hoursSec = currentTime.getHours() * 3600;
      let oneDay = 86400;
      let twoDay = oneDay * 2;
      let tomorrowTimingLeft = Math.floor(
        (twoDay - (hoursSec + minuteSec)) / 3600
      );
      let tomorrowTimingLeftMins =
        60 - currentTime.getMinutes();

      setTomorrowTimingLeftMins(tomorrowTimingLeftMins);
      setTomorrowTimingLeft(tomorrowTimingLeft);
    }, 1000);
  });
  function removeThis(e) {
    props.deleteItem(e, "Tomorrow");
  }

  return (
    <div className='column__list'>
      <div className='column__item'>
        <div className='column__title--wrapper'>
          <h2>Tomorrow</h2>
          <span className='time-left'>
            {tomorrowTimingLeft} hr {tomorrowTimingLeftMins}{" "}
            min
          </span>
        </div>
        {props.items.map((item, index) => {
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
                <div
                  className='minus deleteItem'
                  onClick={() => removeThis(index)}
                >
                  <i className='fas fa-times' />
                </div>
              </li>
              {/* </button> */}
            </ul>
          );
        })}
      </div>
    </div>
  );
}

export default DisplayTomorrow;
