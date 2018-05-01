import React, { Component } from "react";

const Weather = props =>  (
    <div className = "weather__info">
      {props.city && props.country && (<p className = "weather__key">Location:<span className = "weather__value">{props.country}, {props.city} </span></p>)}
      {props.temperature && <p>Temperature : {props.temperature} </p>}
      {props.humidity && <p>Humidity : {props.humidity} </p>}
      {props.description && <p>Conditions : {props.description}</p>}
      {/* If User does not Enter any Value, we propt User to Enter the Values.  */}
      {props.error && <p> Error : {props.error}</p>}
    </div>
  );
  
export default Weather;
