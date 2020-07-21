//Imports React object from react
import React from "react";

//Imports Titles object from Titles.js
import Titles from "./components/Titles"
import Form from "./components/Form"
import Weather from "./components/Weather"

const API_KEY = "73786c0808618c866b9d8cddfe3fb5d9"

//Instaniate React object by calling a class that extends React.Component
class App extends React.Component {
  //Returns JSX code
  render(){
    return(
      <div>
        <Titles />
        <Form />
        <Weather />
      </div>
    );
  }
}

export default App;
