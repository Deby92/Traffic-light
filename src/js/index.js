//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
/* import Home from "./component/home.jsx"; */
import { trafficLights } from "prop-types";

function trafficLights(props){
  return (
    <div className="container">
      <i class="fa-traffic-light"></i>
      <div className="lights off stop">{props.firstPosition}
        <div className="light red">{props.secondPositon}</div>
        <div className="light yellow">{props.thirdPosition}</div>
        <div className="light green">{props.fourthPosition}</div>
      </div>
    </div>
  );
}
trafficLights.propTypes = {
    firstPosition: propTypes.array,
	secondPosition: propTypes.array,
	thirdPosition: proprTypes.array,
	fourthPosition: propTypes.array,
}

//render your react application
ReactDOM.render(<trafficLights firstPosition={lights.off.stop} secondPosition={light.red} thirdPosition={light.yellow} fourth=
{light.green} />, document.querySelector("#app"));
