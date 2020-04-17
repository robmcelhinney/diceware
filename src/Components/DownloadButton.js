import React from 'react';
import '../css/style.css';


const DownloadButton = ({pass}) => {

    if (navigator.platform.indexOf('Win') > -1){
        return (
            <a href={"https://github.com/robmcelhinney/" +
                    "diceware/releases/latest"}>
                <button className="download-button font-bold py-2 px-2 
                        md:px-4 bg-white rounded mt-20 my-2 mx-2 .w-2 
                        text-sm border"
            >
                Download Windows App
            </button>
            </a>
        );
    }
    else {
        return (null)
    }
	
}

export default DownloadButton;
