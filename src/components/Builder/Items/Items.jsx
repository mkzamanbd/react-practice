import React from 'react'
import Item from './Item/Item'

function Items({items, add, remove, scoops}) {
    const flavers = Object.keys(items)
    return (
        <ul>
            {flavers.map((flaver)=>(
                <Item key={flaver} name={flaver} add={add} remove={remove} scoops={scoops}/>
            ))}
        </ul>
    )
}

export default Items
