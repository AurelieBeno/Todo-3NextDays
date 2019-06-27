import React, { useState } from "react";

import "./cssComponents/Textbox.css";

const Textbox = props => {
  const [term, setTerm] = useState("");
  const [err, setErr] = useState("");
  const [day, setDay] = useState("Today");

  function handleSubmit(e) {
    e.preventDefault();
    if (term.length > 1) {
      setErr("");
      props.updateEntry(term, day);
      setTerm("");
    } else {
      setErr("Please enter something");
    }
  }

  return (
    <div className='texbox__container'>
      <form
        onSubmit={handleSubmit}
        className='formContainer'
      >
        <div className='GoalContainer'>
          <center className='GoalLabel'>
            <label>Choose When </label>
          </center>
          <select
            value={day}
            id='day'
            onChange={e => setDay(e.target.value)}
            className='GoalSelect'
          >
            <option value='Today'>Today</option>
            <option value='Tomorrow'>Tomorrow</option>
            <option value='Day_After_Tomorrow'>
              Day after Tomorrow
            </option>
          </select>
        </div>
        <div className='GoalContainer'>
          <center className='GoalLabel'>
            <label>What you need to do ?</label>
          </center>
          <input
            type='text'
            id='aim'
            value={term}
            placeholder=' Type here your goal'
            onChange={e => setTerm(e.target.value)}
            className='GoalInput'
          />
        </div>

        <div className='btnSubmit'>
          <button className='' id='iwilldothis'>
            Submit{" "}
          </button>
        </div>
        <span>{err}</span>
      </form>
    </div>
  );
};

export default Textbox;
