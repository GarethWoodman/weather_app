//Imports React object from react
import React from "react";

//Imports Titles object from Titles.js
import Titles from "./components/Titles"
import Form from "./components/Form"
import Weather from "./components/Weather"

const API_KEY = process.env.REACT_APP_API_KEY;
//Instaniate React object by calling a class that extends React.Component
class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }

  //Async is a way to make web requests easily
  //Pass in e as 'event'
  getWeather = async (e) => {

    //Prevent page from refreshing
    //Prevents default behaviour of component
    e.preventDefault();
    const city    = e.target.elements.city.value
    const country = e.target.elements.country.value

    //Fetch is a built in JS method to 'fetch' html
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);

    //We convert our api_call into json that we can manipulate
    const data = await api_call.json();

    if (city && country && data.cod != '404') {
      console.log(data.cod);
      console.log(city);
      this.setState({
        temperature: data.main.temp,
        city:        data.name,
        country:     data.sys.country,
        humidity:    data.main.humidity,
        description: data.weather[0].description,
        error:       ""
      });
    } else {
      this.setState({
        temperature: undefined,
        city:        undefined,
        country:     undefined,
        humidity:    undefined,
        description: undefined,
        error:       "Please enter the values"
      })
    }
  }

  //Returns JSX code
  //Form getWeather= is a prop
  //Prop is called inside the Form object via: this.props.getWeather
  render(){
    return(
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-5 title-container">
                  <Titles />
                </div>
                <div className="col-7 form-container">
                  <Form getWeather={this.getWeather}/>
                  <Weather
                    temperature=   {this.state.temperature}
                    city=          {this.state.city}
                    country=       {this.state.country}
                    humidity=      {this.state.humidity}
                    description=   {this.state.description}
                    error=         {this.state.error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}



export default App;
