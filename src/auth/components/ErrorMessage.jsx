import React from 'react'
import styles from './ErrorMessage.module.css'

const ErrorMessage = ( { msg, visible } ) => {
    //console.log( 'Error message', msg ); !importante

  return (
    <p 
    className={`${styles.error}`}
    style={{
      display: visible ? 'block' : 'none'
    }}
    >
    { msg }
    </p>
  )
}

export default ErrorMessage