import React from "react";

const ProgressBar = (props) => {
    const {  background, completed, margin } = props;
  
    const containerStyles = {
      height: 10,
      width: '100%',
      backgroundColor: "#e0e0de",
      borderRadius: 20,
      margin : margin
    }
  
    const fillerStyles = {
      height: '100%',
      width: `${completed}%`,
      background:  background,
      borderRadius: 'inherit',
      textAlign: 'right'
    }
  
    const labelStyles = {
      padding: 5,
      color: 'white',
      fontWeight: 'bold'
    }
  
    return (
      <div style={containerStyles}>
        <div style={fillerStyles}>
          <span style={labelStyles}>{`${completed}%`}</span>
        </div>
      </div>
    );
  };
  
  export default ProgressBar;