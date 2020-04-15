import React, {useState, useEffect} from 'react';
import '../css/style.css';
import * as myConstClass from '../constants.js';


const CopyButton = (props) => {


	// const copyPass = () => {
	// 	alert("Copied")
	// }

	return (
        <button className="word-count-button font-bold py-2 px-4 
                hover:border-blue-500 rounded my-2 mx-2 .w-2" 
                onClick={() => {navigator.clipboard.writeText(props.textToCopy)}}>
            Copy Password
        </button>
	);
}



export default CopyButton;
