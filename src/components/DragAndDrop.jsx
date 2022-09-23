import React from 'react'
import { Icon } from '@iconify/react';
import styles from './DragAndDrop.module.css';

const DragAndDrop = () => {

  return (
    <div className={styles.dragArea}>
        <div className={ styles.icon }>
            <Icon icon="bi:cloud-upload" />
        </div>
        <header>Drag & Drop to Upload File</header>
        <span>OR</span>
        <button
        onClick={ (e) => e.preventDefault() }
        >
        Browse File
        </button>
        <input type="file" hidden/>
    </div>
  )
}

export default DragAndDrop