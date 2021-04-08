import React from 'react';
import styles from './IceCream.module.css'
import Scoop from './Scoop/Scoop'

const IceCream = ({scoops}) => {
  return (
    <div className={styles.icecream}>
		<p className={styles.cone}></p>
		{ scoops.map((scoop) => (
			<Scoop key={`${scoop}${Math.random()}`} scoop={scoop}/>
		)) }
		<div className={styles.cherry}></div>
	</div>
  );
}

export default IceCream;
