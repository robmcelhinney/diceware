import React from 'react';
import '../css/style.css';
import {Words} from './Words';
import WordButtons from './WordButtons';
import CopyButton from './CopyButton';
import Footer from './Footer';

class App extends React.Component {

    render() {
          return (
              <div className="App">
                    <div id={"content-wrap"} className={"min-w-full"}>
                        <Words />
                        <WordButtons />
                        <CopyButton />
                    </div>
                    <Footer />
              </div>
          );
    }
}

export default App;
