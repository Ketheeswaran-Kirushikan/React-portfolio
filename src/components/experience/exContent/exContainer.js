import React from 'react';
import "./exContainer.css";

const exContainer = ({number,title,style}) => {
  return (
    <div style={{...style}} className='exContainer'>
      <h1>{number}</h1>
      <p>{title}</p>
    </div>
  )
}

export default exContainer
