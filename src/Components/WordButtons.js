import React, {useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { changeNumber } from "../js/actions/index.js";
import '../css/style.css';
import * as myConstClass from '../constants.js';
import { newClick } from "../js/actions/index";


const WordButtons = (props) => {

	const dispatch = useDispatch();

	const selectedNumber = useSelector(state => state.number);

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

	const clickButton = (number) => {
		dispatch(changeNumber(number))
		dispatch(newClick(true))
	}

	const wordButton = (number) => {
		return (
			<button key={number} className={"font-bold py-2 px-2 md:px-4 " +
					"border border-white-500 hover:text-purple-500 " +
					"hover:border-purple-500 rounded my-2 mx-1 " +
					"inline-block" + (selectedNumber === number ? 
					" border-purple-600 text-purple-600" : "")}
					value={number} onClick={() => clickButton(number)}>
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

	const reloadMinMax = () => {
		setMinNumberWords(myConstClass.MIN_NUM_WORDS);
		setMaxNumberWords(myConstClass.MAX_NUM_WORDS);
	}

	return (
		<div>
			<div className={"max-w-full"}>
				{mapButtons()}
			</div>
			<div>
				<button className={"font-bold py-1 md:py-2 " +
						"px-3 md:px-4 border hover:border-purple-500 " +
						"rounded my-2 mx-2 +.w-2" + (minNumberWords <= 1 ? 
						" opacity-50 cursor-not-allowed" : "")}
						onClick={decreaseMin}
						disabled={minNumberWords <= 1}>
					-
				</button>
				<button className={"font-bold py-1 md:py-2 px-3 md:px-4 " +
						"border hover:border-purple-500 rounded my-2 " +
						"mx-1 md:mx-2 .w-2" + (minNumberWords === 
						myConstClass.MIN_NUM_WORDS && maxNumberWords === 
						myConstClass.MAX_NUM_WORDS ? 
						" opacity-50 cursor-not-allowed" : "")}
						onClick={reloadMinMax}>
					↻
				</button>
				<button className="font-bold py-1 md:py-2 px-3 md:px-4 
						border hover:border-purple-500 rounded my-2
						mx-1 md:mx-2 .w-2"
						onClick={increaseMax}>
					+
				</button>
			</div>
		</div>
	);
}



export default WordButtons;
