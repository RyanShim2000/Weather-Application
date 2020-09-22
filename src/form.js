import React from "react";
import "./form.css";

class Form extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <form onSubmit={this.props.weather} className=" col-12 d-flex ">
          <input
            className="form-control"
            type="text"
            placeholder="city"
            name="city"
          />
          <button className="btn ">Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;

