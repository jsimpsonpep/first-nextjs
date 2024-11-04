'use client';
import React, { useState, useEffect } from 'react';
import styles from './Counter.module.css';

export default function Counter(props) {
  
  // Style object with CSS attributes. Would like to move these to the CSS file
  // but not sure how the padding can be handled dynamically in the CSS.
  const buttonStyle = {
    backgroundColor: "black",
    color: "white",
    padding: props.size + "rem",
    borderRadius: "10px",
  }

  // Hook: idea is to not redraw full window
  // We are basically registering currentCount with React
  // "Hey react current count is a piece of state I want to
  //  keep track of in my application."
  const [count, setCount] = useState(0);

  // Set the current count updated with the mult value passed
  // in as a prop from an instance of the component.
  const handleClick = () => {
    setCount(count +  props.mult)
  }

  // Called from a useEffect array parameter to update the counter to 0
  // when the state of the counter value reaches 10
  function rollOverCount() {
    if (count > 10) {
      setCount(0);
    }
  }

  // Two parameters: a call back function and an __array__
  // useEffect is essentially and function that can run after the
  // component is rendered and mounted onto the browser.
  // In the array, we pass in all the different pieces of state
  // that we want useEffect to respond to.
  // We can have multiple useEffect functions.
  useEffect(rollOverCount, [count]);

  return (
    <div>
      <p className={styles.countDisplay}>Count: {count}</p>
      <button onClick={handleClick} style={buttonStyle}>{props.name}</button>
    </div>
  )
}
