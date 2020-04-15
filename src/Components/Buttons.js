import React, {useState, useEffect} from 'react';
import '../css/style.css';
import * as myConstClass from '../constants.js';


const Buttons = (props) => {

	const [maxNumberWords, setMaxNumberWords] = useState(
		myConstClass.MAX_NUM_WORDS
	);

	const [minNumberWords, setMinNumberWords] = useState(
		myConstClass.MIN_NUM_WORDS
	);


	const mapButtons = () => {
		let buttons = [];
		for(let i = minNumberWords; i <= maxNumberWords; i++) {
			buttons.push(wordButton(i))
		}
		return buttons;
	}

	const wordButton = (number) => {
		return (
			<button key={number} className="word-count-button font-bold 
					py-2 px-4 hover:border-blue-500 rounded my-2 mx-1 
					inline-block" 
					value={number} onClick={props.handleNumberClick}>
				{number} words
			</button>
		)
	}

	const increaseMax = () => {
		setMaxNumberWords(maxNumberWords+1);
	}

	const decreaseMin = () => {
		setMinNumberWords(minNumberWords-1);
	}

	return (
		<div>
			<div className="max-w-full">
				{mapButtons()}
			</div>
			<div>
				<button className={'word-count-button font-bold py-2 px-4 hover:border-blue-500 rounded my-2 mx-2 .w-2' + (minNumberWords <= 1 ? " opacity-50 cursor-not-allowed" : "")}
						onClick={decreaseMin}
						disabled={minNumberWords <= 1}>
					-
				</button>
				<button className="word-count-button font-bold py-2 px-4 
						hover:border-blue-500 rounded my-2 mx-2 .w-2" 
						onClick={increaseMax}>
					+
				</button>
			</div>
		</div>
	);
}



export default Buttons;
