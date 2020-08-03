import React from "react";

//Stateless functional component so we can use an arrow function instead of class
//We can also omit the render() method
const Weather = props => (
  // props only get displayed if they are NOT undefined
  <div className="weather__info">
    {
      props.city && props.country && <p className="weather__key"> Location:
      <span className="weather__value"> { props.city }, { props.country }</span>
      </p>
    }
    {
      props.temperature && <p className="weather__key">Temperature:
      <span className="weather__value"> { toCelcius(props.temperature) }</span>
      </p>
    }
    {
      props.huidity && <p className="weather__key">Humidity:
      <span className="weather__value"> { props.humidity }</span>
      </p>
    }
    {
      props.description && <p className="weather__key">Conditions:
      <span className="weather__value"> { props.description }</span>
      </p>
    }
    {
      props.error && <p className="weather__error">{ props.error }</p>
    }
  </div>
)

function toCelcius(temperature) {
  return Math.round(temperature - 273.15) + "°C";
}

export default Weather;
