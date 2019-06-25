import React from "react";
import "./App.css";
import { DisplayToday } from "./Components/displayDay/DisplayToday";
import { DisplayTomorrow } from "./Components/displayDay/DisplayTomorrow";
import { DisplayDayAfterTomorrow } from "./Components/displayDay/DisplayDayAfterTomorrow";
// import {
//   DisplayToday,
//   DisplayTomorrow,
//   DisplayDayAfterTomorrow
// } from "./Components/Display";
// import { Header } from "./Components/Header";
import { SettingsPage } from "./Components/SettingsPage";
import SimpleSotrage from "react-simple-storage";
import Textbox from "./Components/Texbox";
import Header from "./Components/Header";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Today: [],
      Tomorrow: [],
      Day_After_Tomorrow: [],
      aray: [],
      err: "",
      showSetting: "False",
      username: "Hi Someone!"
    };
    this.updateEntry = this.updateEntry.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.showSettingFunction = this.showSettingFunction.bind(
      this
    );
    this.setUserName = this.setUserName.bind(this);
    this.hideSettingFunction = this.hideSettingFunction.bind(
      this
    );
  }

  setUserName(nam) {
    this.setState({
      username: nam
    });
  }

  showSettingFunction(parameter) {
    if (parameter === "True") {
      this.setState({
        showSetting: "True"
      });
    }
  }

  hideSettingFunction(parameter) {
    if (parameter === "False") {
      this.setState({
        showSetting: "False"
      });
    }
  }

  updateEntry(term, day) {
    // console.log(day);
    if (day === "Today") {
      if (this.state.Today.indexOf(term) > -1) {
        this.setState({
          err: "this is already present"
        });
      } else {
        this.setState({
          Today: [...this.state.Today, term],
          err: ""
        });
      }
    } else if (day === "Tomorrow") {
      if (this.state.Tomorrow.indexOf(term) > -1) {
        this.setState({
          err: "this is already present"
        });
      } else {
        this.setState({
          Tomorrow: [...this.state.Tomorrow, term],
          err: ""
        });
      }
    } else if (day === "Day_After_Tomorrow") {
      if (
        this.state.Day_After_Tomorrow.indexOf(term) > -1
      ) {
        this.setState({
          err: "this is already present"
        });
      } else {
        this.setState({
          Day_After_Tomorrow: [
            ...this.state.Day_After_Tomorrow,
            term
          ],
          err: ""
        });
      }
    }
  }

  deleteItem(index, day) {
    if (day === "Today") {
      let filterList = this.state.Today.filter(
        (elem, i) => {
          if (i === index) {
            return false;
          }
          return true;
        }
      );
      this.setState({
        Today: filterList
      });
    } else if (day === "Tomorrow") {
      let filterList = this.state.Tomorrow.filter(
        (elem, i) => {
          if (i === index) {
            return false;
          }
          return true;
        }
      );
      this.setState({
        Tomorrow: filterList
      });
    } else if (day === "Day_After_Tomorrow") {
      let filterList = this.state.Day_After_Tomorrow.filter(
        (elem, i) => {
          if (i === index) {
            return false;
          }
          return true;
        }
      );
      this.setState({
        Day_After_Tomorrow: filterList
      });
    } else {
      console.log(
        "something went wrong while removing item..."
      );
    }
  }

  render() {
    if (this.state.showSetting === "False") {
      return (
        <div>
          <SimpleSotrage parent={this} />
          <Header
            showSettingFunction={this.showSettingFunction}
            nam={this.state.username}
          />
          <br />
          <Textbox updateEntry={this.updateEntry} />
          <span>{this.state.err}</span>
          <br />
          <br />
          <div className='wrapper'>
            <DisplayToday
              items={this.state.Today}
              deleteItem={this.deleteItem}
            />
            <DisplayTomorrow
              items={this.state.Tomorrow}
              deleteItem={this.deleteItem}
            />
            <DisplayDayAfterTomorrow
              items={this.state.Day_After_Tomorrow}
              deleteItem={this.deleteItem}
            />
          </div>
        </div>
      );
    } else if (this.state.showSetting === "True") {
      return (
        <div>
          <SimpleSotrage parent={this} />
          <Header
            showSettingFunction={this.showSettingFunction}
            nam={this.state.username}
          />
          <br />
          <span>{this.state.err}</span>
          <br />
          <br />
          <div>
            <button> show Setting</button>

            <SettingsPage
              hideSettingFunction={this.hideSettingFunction}
              presentName={this.state.username}
              setUserName={this.setUserName}
            />
          </div>
        </div>
      );
    } else {
      return (
        <div>some thing is wrong...contact developer!</div>
      );
    }
  }
}

export default App;
