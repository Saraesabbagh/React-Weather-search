import React from "react";

export default function Weather(props) {
  function showFarenheit(event) {
    event.preventDefault();
    let temperature = (props.temperature * 9) / 5 + 32;

    alert(`the temperature in F is ${Math.round(temperature)}°F`);
  }
  return (
    <p>
      Weather in {props.city} is {props.temperature}°C |{" "}
      <a href="/" onClick={showFarenheit}>
        ° F
      </a>
    </p>
  );
}
