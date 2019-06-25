import React from "react";

import "./cssComponents/Textbox.css";

class Textbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      err: "",
      day: "Today"
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleChange(e) {
    this.setState({
      term: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.term.length > 1) {
      this.setState({
        err: ""
      });
      this.props.updateEntry(
        this.state.term,
        this.state.day
      );
      this.setState({
        term: ""
      });
    } else {
      this.setState({
        err: "please type something..."
      });
    }
  }

  handleSelect(event) {
    this.setState({
      day: event.target.value
    });
    console.log(event.target.value);
  }

  render() {
    return (
      <div className='Container'>
        <form
          onSubmit={this.handleSubmit}
          className='formContainer'
        >
          <div className='GoalContainer'>
            <center className='GoalLabel'>
              <label>Choose When </label>
            </center>
            <select
              value={this.state.day}
              id='day'
              onChange={this.handleSelect}
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
              value={this.state.term}
              placeholder=' Type here your goal'
              onChange={this.handleChange}
              className='GoalInput'
            />
          </div>

          <div className='btnSubmit'>
            <button className='' id='iwilldothis'>
              Submit{" "}
            </button>
          </div>
          <span>{this.state.err}</span>
        </form>
      </div>
    );
  }
}
export default Textbox;
