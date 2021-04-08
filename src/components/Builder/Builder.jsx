import React from 'react'
import Items from './Items/Items'
import styles from './Builder.module.css'
import Total from './Total/Total'

const Builder = ({items, add, remove, price, scoops, next}) => {
    return (
        <div className={styles.builder}>
            <h3>Build your own Ice Cream Sundae</h3>
            <div className="react" id="items">
                <Items
                    items={items}
                    add={add}
                    remove={remove}
                    scoops={scoops}
                />
            </div>
            <Total
                price={price}
            />
            <button type="button" onClick={next.bind(this)} className={[styles.order, 'rounded'].join(' ')}>Add to Cart</button>
        </div>
    )
}

export default Builder
