import React from 'react';
import {get_all_die, get_all_words} from '../assets/Diceware';


class NumSelect extends React.Component {

	constructor(props) {
		super(props);
	}
	
	word = (word, numbers) => {
		return (
			<span className={"mx-2 my-3 inline-block"}>
				<div className={"text-3xl font-bold"}>
					{word}
				</div>
				<div className={"text-xl font-semibold"}>
					{numbers}
				</div>
			</span>
		)
	}

    render() {
		
		const all_die = get_all_die(this.props.number)
		const all_words = get_all_words(all_die)
		console.log("all_words: ", all_words)
		// this.props.handleNewPass(all_words)


		let words = [];
		for(let i = 0; i < all_words.length; i++) {
			let word = this.word(all_words[i], all_die[i])
			words.push(word)
		}

		return (
			<div className="max-w-full mb-8">{words}</div>
		);
	}

}

export default NumSelect;
