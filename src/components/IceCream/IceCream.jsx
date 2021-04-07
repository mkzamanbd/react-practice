import React from 'react';
import classes from './IceCream.module'
import Scoop from './Scoop/Scoop'

const IceCream = () => {
  return (
    <div>
        <div className={classes.icecream}>
            <p className={classes.cone}></p>
            <Scoop/>
            <div className={classes.cherry}></div>
        </div>
    </div>
  );
}

export default IceCream;
