//Imports React object from react
import React from "react";

//Imports Titles object from Titles.js
import Titles from "./components/Titles"
import Form from "./components/Form"
import Weather from "./components/Weather"

const API_KEY = process.env.REACT_APP_API_KEY;
//Instaniate React object by calling a class that extends React.Component
class App extends React.Component {
  //Async is a way to make web requests easily
  //Pass in e as 'event'
  getWeather = async (e) => {
    //Prevent page from refreshing
    //Prevents default behaviour of component
    e.preventDefault();
    //Fetch is a built in JS method to 'fetch' html
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=london&appid=${API_KEY}`);
    //We convert our api_call into json that we can manipulate
    const data = await api_call.json();
    console.log(data);
  }
  //Returns JSX code
  render(){
    return(
      <div>
        <Titles />
        <Form getWeather={this.getWeather}/>
        <Weather />
      </div>
    );
  }
}

export default App;
