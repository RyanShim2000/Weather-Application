import React from "react";
import "./App.css";
import Form from "./form.js";

const API = "2713fd06941d8e3fccbddc5cc138f2bf";

class App extends React.Component {
  state = {
    city: [],
    temp: [],
    humidity: [],
    wind: [],
    description: []
  };

  weather = async event => {
    event.preventDefault();
    const place = event.target.city.value;
    const link =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      place +
      "&appid=" +
      API +
      "&units=metric";

    const apiLink = await fetch(link);

    const data = await apiLink.json();
    if (place) {
      this.setState({
        city: "City: " + data.name,
        temp: "Temperature: " + data.main.temp + " degrees Celsius",
        humidity: "Humidity: " + data.main.humidity + " %",
        wind: "Windspeed: " + data.wind.speed + " m/s",
        description: "Description: " + data.weather[0].main
      });
    }
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <h1>WEATHER APP</h1>
        </div>

        <div className="row justify-content-center">
          <Form weather={this.weather} />
        </div>
        <div className="el">{this.state.city}</div>
        <div className="el">{this.state.temp}</div>
        <div className="el">{this.state.humidity}</div>
        <div className="el">{this.state.wind}</div>
        <div className="el">{this.state.description}</div>
      </div>
    );
  }
}

export default App;
