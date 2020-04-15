import React from 'react';
import '../css/style.css';
import NumSelect from './NumSelect';
import Buttons from './Buttons';
import CopyButton from './CopyButton';

class App extends React.Component {


	constructor(props) {
		super(props);
		this.state = {
      number: 8,
      textToCopy: ""
		};
	}

	handleNumberClick = (e) => {
		console.log("clicked: ", e.target.value)
		this.setState({
		  number: e.target.value
		})
	}

	handleNewPass = (words) => {
		console.log("words: ", words)
		this.setState({
		  textToCopy: words
		})
	}
  
  render() {
    return (
      <div className="App">
        <NumSelect number={this.state.number} handleNewPass={this.handleNewPass} />
        <Buttons handleNumberClick={this.handleNumberClick} />
        <CopyButton textToCopy={this.state.textToCopy}/>
      </div>
    );
  }
}

export default App;
