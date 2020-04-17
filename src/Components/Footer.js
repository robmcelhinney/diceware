import React from 'react';
import '../css/style.css';
import Info from './Info';


const Footer = ({pass}) => {

	return (
        <div id={"footer"}>
            Inspired by <a class="text-blue-500 hover:text-blue-800" href={"https://diceware.herokuapp.com/"}>Michael Henriksen</a> | <Info /> | Created by <a class="text-blue-500 hover:text-blue-800" href={"https://twitter.com/RMcElhinney"}>Rob McElhinney</a>
        </div>
	);
}

export default Footer;
