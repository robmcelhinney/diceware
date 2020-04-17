import React, {useEffect} from 'react';
import { connect } from "react-redux";
import '../css/style.css';
import Tooltip from '@material-ui/core/Tooltip';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';


const mapStateToProps = state => {
  return { pass: state.pass };
};


const CopyButtonPass = ({pass}) => {
	
	const [open, setOpen] = React.useState(false);
	const [navigatorExists, setNavigatorExists] = React.useState(true);

	useEffect(() => {
		if(navigator.clipboard === undefined) {
			setNavigatorExists(false)
		}
	  }, [navigatorExists]);

	const handleTooltipClose = () => {
	  setOpen(false);
	};
  
	const handleTooltipOpen = () => {
	  setOpen(true);
	};
  

	const copyPass = () => {
		if (navigatorExists) {
			navigator.clipboard.writeText(pass)
		}
		else {

			let textArea;

			textArea = document.createElement('textArea');
			textArea.value = pass;
			document.body.appendChild(textArea);

			textArea.select()
			document.execCommand('copy');
        	document.body.removeChild(textArea);
		}
		handleTooltipOpen()
	}

	
	return (
		<ClickAwayListener onClickAway={handleTooltipClose}>
			<div className={"min-w-full"}>
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
					<button className="font-bold py-2 px-2 md:px-4
							hover:text-purple-500 hover:border-purple-500
							rounded my-2 mx-2 .w-2 text-sm border"
						onClick={() => {copyPass()}}
					>
						Copy Passphrase
					</button>
				</Tooltip>
			</div>
		</ClickAwayListener>
	);
}

const CopyButton = connect(mapStateToProps)(CopyButtonPass);

export default CopyButton;
