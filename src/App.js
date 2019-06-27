import React, { useState, useEffect } from "react";

import { Switch, Route } from "react-router-dom";
import "./App.css";
import { DisplayToday } from "./Components/displayDay/DisplayToday";
import { DisplayTomorrow } from "./Components/displayDay/DisplayTomorrow";
import { DisplayDayAfterTomorrow } from "./Components/displayDay/DisplayDayAfterTomorrow";
import Textbox from "./Components/Texbox";
import Header from "./Components/Header";
import SettingsPage from "./Components/SettingsPage";

const App = props => {
  const [today, setToday] = useState([]);
  const [tomorrow, setTomorrow] = useState([]);
  const [dayAfter, setDayAfter] = useState([]);
  const [err, setErr] = useState("");
  const [name, setName] = useState("");

  function deleteItem(index, day) {
    if (day === "Today") {
      let filterList = today.filter((elem, i) => {
        if (i === index) {
          return false;
        }
        return true;
      });
      setToday(filterList);
    } else if (day === "Tomorrow") {
      let filterList = tomorrow.filter((elem, i) => {
        if (i === index) {
          return false;
        }
        return true;
      });
      setTomorrow(filterList);
    } else if (day === "Day_After_Tomorrow") {
      let filterList = dayAfter.filter((elem, i) => {
        if (i === index) {
          return false;
        }
        return true;
      });
      setDayAfter(filterList);
    } else {
      console.log(
        "something went wrong while removing item..."
      );
    }
  }

  function updateEntry(term, day) {
    if (day === "Today") {
      if (today.indexOf(term) > -1) {
        setErr("already taken");
      } else {
        setToday([...today, term]);
      }
    } else if (day === "Tomorrow") {
      if (tomorrow.indexOf(term) > -1) {
        setErr("This is already present");
      } else {
        setTomorrow([...tomorrow, term]);
        setErr("");
      }
    } else if (day === "Day_After_Tomorrow") {
      if (dayAfter.indexOf(term) > -1) {
        setErr("This is already present");
      } else {
        setDayAfter([...dayAfter, term]);
        setErr("");
      }
    }
  }
  function handleSubmit(e) {
    console.log("hello handleSubmit");
    setName(name);
  }

  return (
    <div>
      <Header name={name} />
      <br />
      <Textbox updateEntry={updateEntry} />
      <span>{err}</span>
      <br />
      <br />
      <div className='wrapper'>
        <DisplayToday
          items={today}
          deleteItem={deleteItem}
        />
        <DisplayTomorrow
          items={tomorrow}
          deleteItem={deleteItem}
        />
        <DisplayDayAfterTomorrow
          items={dayAfter}
          deleteItem={deleteItem}
        />
      </div>
      <Switch>
        <Route
          path='/settings'
          render={() => {
            return (
              <SettingsPage
                value={name}
                onSubmit={e => handleSubmit(e)}
                onChange={e => setName(e.target.value)}
              />
            );
          }}
        />
      </Switch>
    </div>
  );
};

export default App;
