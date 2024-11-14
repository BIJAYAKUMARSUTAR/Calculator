import React from 'react'
import styles from "./App.module.css"
import Display from './componets/Display'
import ButtonContainer from './componets/ButtonContainer'
import { useState } from "react"

function App() {
  let [calVal, setCalval] = useState("");

  const onButtonClick = (buttonText) => {
    if (buttonText === 'C') {
      // Remove the last character when 'C' is clicked
      setCalval(calVal.slice(0, -1));
    } else if (buttonText === '=') {
      try {
        const result = eval(calVal);
        setCalval(result);
      } catch (error) {
        setCalval("Error");
      }
    } else {
      const newDisplayValue = calVal + buttonText;
      setCalval(newDisplayValue);
    }
  };

  const onSubmit = () => {
    if (calVal) {
      try {
        const result = eval(calVal);
        setCalval(result);
      } catch (error) {
        setCalval("Error");
      }
    }
  };

  const onClear = () => {
    setCalval("");
  };

  return (
    <>
       <div className={styles.calculator}>
        <Display displayValue={calVal}></Display>
        <ButtonContainer onButtonClick={onButtonClick}></ButtonContainer>
        <div style={{ display: 'flex', gap: '70px' }}>
          <button onClick={onSubmit} className={styles.submitButton}>Submit</button>
          <button onClick={onClear} className={styles.submitButton}>CLEAR</button>
        </div>
      </div>
    </>
  );
}

export default App;