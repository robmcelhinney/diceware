import React from 'react';
import '../css/style.css';
import Info from './Info';


const Footer = ({pass}) => {


	const click = (event) => {
        console.log("click: href ", 
        event.target.href)
        // event.preventDefault();
	}


	return (
        <div id={"footer"}>
            Inspired by <a href="https://diceware.herokuapp.com/" onClick={click}
            className="text-blue-500 hover:text-blue-800" >Michael Henriksen</a> | <Info /> | Created 
            by <a className="text-blue-500 hover:text-blue-800" 
            href={"https://twitter.com/RMcElhinney"}>Rob McElhinney</a>
        </div>
	);
}

export default Footer;
