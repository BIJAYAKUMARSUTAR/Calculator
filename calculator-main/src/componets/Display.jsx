import styles from "./Display.module.css"
import React from 'react'

function Display({displayValue}) {
  return (
    <>
          <input className={styles.display}type="text" value={displayValue} readOnly />
    </>
  )
}

export default Display