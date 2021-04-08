import React from 'react'
import { countBy } from 'lodash';
import styles from './Item.module.css'

function Item({name, add, remove, scoops = {}}) {
    const scoopsByCount = countBy(scoops);
    return (
        <li className={styles.item}>
            <span>{name}</span>
            {scoopsByCount[name] > 0 ? (<span className={styles.quantity} style={{ margin: '0 5px' }}>{scoopsByCount[name]}</span>) : null }
            <div className="right">
                <button type="button" onClick={add.bind(this, name)} className={[styles.plus, 'rounded'].join(' ')}>+</button>
                <button type="button" onClick={remove.bind(this, name)} className={[styles.minus, 'rounded'].join(' ')}>-</button>
            </div>
        </li>
    )
}
export default Item
