//Imports React object from react
import React from "react";

//Imports Titles object from Titles.js
import Titles from "./components/Titles"
//Imports Form object from Form.js
import Form from "./components/Form"
import Weather from "./components/Weather"

//Instaniate React object by calling a class that extends React.Component
class App extends React.Component {
  //Returns JSX code
  render(){
    return(
      <div>
        //Components added within parent div element
        <Titles />
        <Form />
        <Weather />
      </div>
    );
  }
}

export default App;
