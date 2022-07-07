import React from "react";

//include images into your bundle

//create your first component
export const trafficLight = (props) => {
	return (<div className="container">
		<i class="fa-traffic-light"></i>
		<div className="lights off stop">
			{props.firstPosition}
			<div className="light red">
				{props.secondPosition}
			</div>
			<div className="light yellow">
				{props.thirdPositon}
			</div>
			<div className="light green">
				{props.fourthPosition}
			</div>
		</div>
	</div>
	);
}

trafficLight.setPropTypes = {
	lightsOffStop: propTypes.array,
	lightRed: propTypes.array,
	lightYellow: proprTypes.array,
	lightGreen: propTypes.array,
};