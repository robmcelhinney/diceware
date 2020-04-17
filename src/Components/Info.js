import React from 'react';
import '../css/style.css';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    paper: {
      position: 'absolute',
      textAlign: 'left',
      width: '80%',
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      paddingTop: '2em',
      paddingBottom: '2em',
    },
  }));


const Info = ({pass}) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const link = (link, text) => {
        return (
            <a class="text-blue-500 hover:text-blue-800" href={link}>{text}</a>
        )
    }
    
    const body = (
        <div className={classes.paper}>
            <p className={"text-lg font-semibold mb-2"}>What's Diceware?</p>
            <div>"Diceware is a method for creating passphrases, 
                    passwords, and other cryptographic variables 
                    using ordinary dice as a hardware random 
                    number generator" {link(
                    "https://en.wikipedia.org/wiki/Diceware", 
                    "- Wiki")}</div>
            <div>Read more about password Dice generated passwords from 
                    the {link("https://www.eff.org/dice", "EFF")}.</div>
            
            <p className={"text-lg font-semibold mt-3 mb-2"}>What 
                    list is used?</p>
            <div>{link("https://www.eff.org/files/2016/07/18/" +
                    "eff_large_wordlist.txt", "EFF Large Word List")} I 
                    converted this list into a json file to make it easier 
                    to import.</div>

            <p className={"text-lg font-semibold mt-3 mb-2"}>
                    Should I trust this site?</p>
            <div>Probably not, but it is open source so please have a look 
                    at the {link("https://github.com/robmcelhinney/diceware/", 
                    "code on github")}. If you spot any issues, let me know 
                    or make a pull request.</div>
            <div>It is always better to use real dice to verify the 
                    randomness yourself but that's a lot of hassle so here 
                    we are.</div>
            
            <p className={"text-lg font-semibold mt-3 mb-2"}>
                How is randomness verified?</p>
            <div>The {link("https://developer.mozilla.org/en-US/docs/Web/" +
                    "API/Crypto", "Web Crypto API's")} Window.Crypto.getRandom 
                    which was copied from the {link(
                    "https://github.com/EFForg/OpenWireless/blob" +
                    "/master/app/js/diceware.js", "EFF")}.</div>
            
            <p className={"text-lg font-semibold mt-3 mb-2"}>
                Are you saving any data?</p>
            <div>All code is completely run on the client side so it's 
                    staying on your device. If you use Windows you can 
                    download this site as a program to use it completely 
                    offline.</div>
        </div>
    );

	return (
        <>
        <a class="text-blue-500 hover:text-blue-800" href={"/diceware/#"} 
                onClick={handleOpen}>More Info</a>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            className={classes.modal}
        >
            {body}
        </Modal>
        </>
	);
}

export default Info;
