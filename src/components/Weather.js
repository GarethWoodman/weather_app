import React from "react";

//Stateless functional component so we can use an arrow function instead of class
//We can also omit the render() method
const Weather = props => (
  // props only get displayed if they are NOT undefined
  <div>
    { props.city && props.country && <p>Location:    { props.city }, { props.country }</p> }
    { props.temperature && <p>Temperature: { props.temperature }</p> }
    { props.huidity && <p>Humidity: { props.humidity }</p> }
    { props.description && <p>Conditions: { props.description }</p> }
    { props.error && <p>{ props.error }</p> }
  </div>
)



export default Weather;
