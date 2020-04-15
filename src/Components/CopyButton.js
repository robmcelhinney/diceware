import React from 'react';
import { connect } from "react-redux";
import '../css/style.css';
import Tooltip from '@material-ui/core/Tooltip';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';


const mapStateToProps = state => {
  return { pass: state.pass };
};


const CopyButtonPass = ({pass}) => {
	
	const [open, setOpen] = React.useState(false);

	const handleTooltipClose = () => {
	  setOpen(false);
	};
  
	const handleTooltipOpen = () => {
	  setOpen(true);
	};
  

	const copyPass = () => {
		navigator.clipboard.writeText(pass)
		handleTooltipOpen()
	}

	if(navigator.clipboard === undefined) {
		return (null)
	}
	else{
		return (
			<ClickAwayListener onClickAway={handleTooltipClose}>
				<div>
					<Tooltip
					PopperProps={{
					disablePortal: true,
					}}
					onClose={handleTooltipClose}
					open={open}
					disableFocusListener
					disableHoverListener
					disableTouchListener
					title="Copied"
					arrow
				>
					<button className="word-count-button font-bold py-2 px-4 
							hover:text-purple-500 hover:border-purple-500 rounded 
							my-2 mx-2 .w-2 text-sm border"
						onClick={() => {copyPass()}}
					>
						Copy Passphrase
					</button>
				</Tooltip>
				</div>
			</ClickAwayListener>
			);
		}
	}

const CopyButton = connect(mapStateToProps)(CopyButtonPass);

export default CopyButton;
