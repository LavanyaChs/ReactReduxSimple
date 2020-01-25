import React from "react";
import Home from "./Home"
import Clock from "./Clock";
export default class Layout extends React.Component{
	render(){	
		return(
			<div>
				 <h1>My.. Calculator</h1>
				 <Home/>
				 <Clock/>		
			</div>
		);
	}
}