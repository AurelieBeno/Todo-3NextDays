import React from "react";

import "./cssComponents/Display.css";

export class Plus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      today: ""
    };
  }
  render() {
    return (
      <div>
        <p>Coucou</p>
      </div>
    );
  }
}
export default Plus;
