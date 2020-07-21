//Imports React object from react
import React from "react";

//Imports Titles object from Titles.js
import Titles from "./components/Titles"
//Imports Form object from Form.js
import Form from "./components/Form"

//Instaniate React object by calling a class that extends React.Component
class App extends React.Component {
  //Returns JSX code
  render(){
    return(
      <div>
        <Titles />
        <Form />
      </div>
    );
  }
}

export default App;
