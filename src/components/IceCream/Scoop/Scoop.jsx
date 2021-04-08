import React from 'react';
import styles from './Scoop.module.css'

const Scoop = ({scoop}) => {
  return <div className={[styles.scoop, styles[scoop]].join(' ')}></div>;
}

export default Scoop;
