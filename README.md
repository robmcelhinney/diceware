# Diceware
Viewable at [https://robmcelhinney.com/diceware/](https://robmcelhinney.com/diceware)

## Download Electron application
[https://github.com/robmcelhinney/diceware/releases](https://github.com/robmcelhinney/diceware/releases)

Currently only available on Windows.

Web effort is on master branch and Electron app is on electron branch but they largely work interchangably.
Electron missing clipboard action for non-chromium based browsers.

## Install

    $ git clone git@github.com:robmcelhinney/diceware.git
    $ cd diceware
    $ npm install

## Start & watch

    $ npm start
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Simple build for production

    $ npm run build

## Build electron 
    $ npm run electron-pack

    


## Acknowledgments
* Inspiration: [https://diceware.herokuapp.com/](https://diceware.herokuapp.com/)
* Word List taken from [eff.org](eff.org): [https://www.eff.org/files/2016/07/18/eff_large_wordlist.txt](https://www.eff.org/files/2016/07/18/eff_large_wordlist.txt).
