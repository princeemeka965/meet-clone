import * as React from "react";
import MicOnIcon from "./Bottombar/MicOnIcon";

const SpeakerIcon = (props) => {
  return (
    <div className="container">
      <button id="speech" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }} className="btn m-left type2">
      <div className="pulse-ring"></div>
        <span style={{marginLeft: '8px'}}><MicOnIcon /></span>
        </button>
    </div>
  );
};
export default SpeakerIcon;
