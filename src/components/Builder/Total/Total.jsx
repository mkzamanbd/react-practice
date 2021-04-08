import React from 'react'
import styles from './Total.module.css'
function Total({price = 0}) {
    return (
        <div className={styles.total}>
            <div>Total Price</div>
            <div>{price.toFixed(2)} Tk</div>
        </div>
    )
}

export default Total
