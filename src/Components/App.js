import React from 'react';
import '../css/style.css';
import {Words} from './Words';
import WordButtons from './WordButtons';
import CopyButton from './CopyButton';

class App extends React.Component {

    render() {
          return (
              <div className="App">
                    <div id={"content-wrap"}>
                        <Words />
                        <WordButtons />
                        <CopyButton />
                    </div>
                    <div id={"footer"}>
                        Inspired by <a href={"https://diceware.herokuapp.com/"}>Michael Henriksen</a> | Created by <a href={"https://twitter.com/RMcElhinney"}>Rob McElhinney</a>
                    </div>
              </div>
          );
    }
}

export default App;
