import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addPass, newClick } from "../js/actions/index";
import {get_all_die, get_all_words} from '../utils/Diceware';

const word = (word, numbers, key) => {
	return (
		<span key={key} className={"mx-2 my-3 inline-block"}>
			<div className={"text-xl md:text-3xl font-bold"}>
				{word}
			</div>
			<div className={"text-base md:text-lg font-medium tracking-wide"}>
				{dice(numbers)}
			</div>
			<div className={"text-base md:text-lg font-medium tracking-wide"}>
				{numbers}
			</div>
		</span>
	)
}


const dice = (number) => {
	const diceDict = {'1': '⚀', '2': '⚁', '3': '⚂', '4': '⚃', '5': '⚄', 
			'6': '⚅'}
	let container = []
	number.forEach((num, index)=>{
		container.push(
			<span className={"text-xl"} key={index}>
				{diceDict[num]}
			</span>
		)
	})
	return (
		container
	)
}


export const Words = () => {
	const [passphrase, setPassphrase] = useState("");
	const [localNumber, setLocalNumber] = useState(0);
	const [words, setWords] = useState(0);

	const number = useSelector(state => state.number);
	const new_click = useSelector(state => state.new_click);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(addPass(passphrase))
	  }, [passphrase]);

	
	if (localNumber !== number || new_click) {
		
		dispatch(newClick(false))
		setLocalNumber(number)
		const all_die = get_all_die(number)
		const all_words = get_all_words(all_die)
		const pass = all_words.join(" ")
		setPassphrase(pass);
	
		let wordsArray = [];
		for(let i = 0; i < all_words.length; i++) {
			let wordNumber = word(all_words[i], all_die[i], i)
			wordsArray.push(wordNumber)
		}
		setWords(wordsArray)
	}


	

	return (
		<div className={"words mb-8"}>{words}</div>
	);

}